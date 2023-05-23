import Compressor from 'compressorjs';
import { dataURLtoFile, toDataURL, toUrl } from '../../../utility/helper';
import { createSignal } from 'solid-js';
import SliderNumberInput from '../../input/slider-number-input/sliderNumberInput';

export default function CompressorJS() {
    let output!: HTMLImageElement
    let originalImg!: HTMLImageElement
    let defaultImgUrl = '/library/images/nature (5).jpg'
    const [file, setFile] = createSignal<File>();

    toDataURL(defaultImgUrl)
        .then(dataUrl => {
            var fileData = dataURLtoFile(dataUrl, defaultImgUrl);
            setFile(fileData)
        })

    async function handleFileChange(e) {
        e.preventDefault()
        const file = e.target.files[0];
        setFile(file)
        const res = await handleCompress(file, 1);
        originalImg.src = URL.createObjectURL(res);
        output.src = URL.createObjectURL(res);
    }

    async function handleCompress(file: File, quality = 0.6) {
        if (!file) return;

        return new Promise((resolve, reject) => {
            new Compressor(file, {
                quality: quality,
                success(result) {
                    resolve(result)
                },
                error(err) {
                    console.log(err.message);
                    reject(err)
                },
            });
        });
    }

    async function onQualityChange(e: Event) {
        const res = await handleCompress(file(), e.target.value / 100);
        output.src = toUrl(res);
    }

    return <div>
        <span>CompressorJS </span>
        <input type="file" id="file" accept="image/*" onChange={handleFileChange} />
        <img ref={originalImg} class='hidden' src={defaultImgUrl} />
        <img ref={output} src={defaultImgUrl} />
        <SliderNumberInput min={0} max={100} value={100} onInput={onQualityChange} />
    </div>
}