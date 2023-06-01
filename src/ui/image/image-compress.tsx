import { createSignal, onMount } from "solid-js";
import SliderNumberInput from "../input/slider-number-input/sliderNumberInput";
import { dataURLSize, humanFileSize, isFileAPISupported, toUrl } from "../../utility/helper";

export default function ImageCompress() {
    const [x, setX] = createSignal();
    const [y, setY] = createSignal();
    const [quality, setQuality] = createSignal(1);
    const [size, setSize] = createSignal(0);
    let inputImg: HTMLImageElement
    let output: HTMLImageElement
    let fileinput: HTMLInputElement
    let max_width = 1900
    let max_height = 1900

    function outputFile(e: Event) {
        let files = e.target.files
        if(!isFileAPISupported()) return;
        let file = files[0];
        inputImg.src = toUrl(file);
        output.src = toUrl(file);
    }

    function resizeMe(img: HTMLImageElement, quality = 1.0) {
        let canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        if (width > height) {
            height = Math.round(height *= x() / width);
            width = x();
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
        let newimg = resizeMe(inputImg, (val / 100))
        output.src = newimg;
        updateSize()
    }

    function handleXChange (e) {
        setX(e.target.value)
        let newimg = resizeMe(inputImg, quality())
        output.src = newimg;
        updateSize()
    }

    function updateSize() {
        setSize(dataURLSize(output.src))
    }

    onMount(() => {
        setX(output.width)
        setY(output.height)
    })

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
            src="./library/image/nature (5).jpg" 
            ref={inputImg} 
            style='visibility:hidden; position:absolute; top:0; left:0;' 
        />
        <div class='resizeable'>
        <img 
            src="./library/image/nature (5).jpg" 
            ref={output} 
        />
        </div>
        <p>w{x()} size:{humanFileSize(size() || 1)}</p>
        <span>compress quality</span>
        <SliderNumberInput 
            min={0} 
            max={100} 
            value={70} 
            onInput={onQualityInput}
        />
        <span>resize</span>
        <SliderNumberInput 
            min={1} 
            max={1900} 
            value={580} 
            onInput={handleXChange}
        />
    </div>
}