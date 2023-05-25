import { createSignal } from "solid-js";
import SliderNumberInput from "../input/slider-number-input/sliderNumberInput";
import { dataURLSize, humanFileSize, isFileAPISupported, toUrl } from "../../utility/helper";

export default function ImageCompress() {
    const [x, setX] = createSignal();
    const [y] = createSignal();
    const [quality, setQuality] = createSignal(1);
    const [size, setSize] = createSignal(0);
    let img: HTMLImageElement | ((el: HTMLImageElement) => void) | undefined
    let output: HTMLImageElement
    let fileinput: HTMLInputElement

    function outputFile(files = fileinput.files) {
        if(!isFileAPISupported()) return;
        let file = files[0];
        img.src = toUrl(file);
        output.src = toUrl(file);
    }

    function resizeMe(img: HTMLImageElement, quality = 1.0) {
        let canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        if (width > height) {
            if (width > x()) {
                height = Math.round(height *= x() / width);
                width = x();
            }
        } else {
            if (height > y()) {
                width = Math.round(width *= y() / height);
                height = y();
            }
        }
        canvas.width = width;
        canvas.height = height;
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        return canvas.toDataURL("image/webp", quality);
    }

    function onQualityInput(e) {
        let val = e.target.value;
        setQuality(val / 100)
        let newimg = resizeMe(img, quality())
        output.src = newimg;
    }

    function handleXChange (e) {
        setX(e.target.value)
        let newimg = resizeMe(img, quality())
        output.src = newimg;
    }

    return <div>
        <input 
            id='fileinput'
            type="file"
            ref={fileinput}
            multiple="multiple"
            accept="image/*"
            data-maxwidth={1900}
            data-maxheight={1900}
            onchange={outputFile}
        />
        <img 
            src="./library/images/nature (5).jpg" 
            ref={img} 
            style='visibility:hidden; position:absolute; left:0;' 
        />
        <div class='resizeable'>
        <img 
            src="./library/images/nature (5).jpg" 
            ref={output} 
            onLoad={(e)=>setSize(dataURLSize(output.src))}
        />
        </div>
        <p>w{x()} size:{humanFileSize(size() || 1)}</p>
        <span>compress quality</span>
        <SliderNumberInput min={0} max={100} value={100} onInput={onQualityInput}/>
        <span>resize</span>
        <SliderNumberInput min={1} max={3000} value={580} onInput={handleXChange}/>
    </div>
}