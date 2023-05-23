import { createSignal, onMount } from "solid-js";
import SliderNumberInput from "../input/slider-number-input/sliderNumberInput";
import { toUrl } from "../../utility/helper";

export default function ImageCompress() {
    let max_width = 300
    let max_height = 300
    let img
    let output
    let fileinput
    const [imgs, setImgs] = createSignal([]);
    const [image, setImage] = createSignal('./library/images/nature (5).jpg');
    const [x, setX] = createSignal(max_width);
    const [y, setY] = createSignal(max_height);

    onMount(() => {
        setX(output.width);
        setY(output.height);
    })

    function outputFile(files) {
        let file = files[0];
        img.src = toUrl(file);
        output.src = toUrl(file);
        // setImage(toUrl(file))
        setX(output.width)
        setY(output.height)
    }

    function handleFileChange() {
        if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
            alert('The File APIs are not fully supported in this browser.');
            return false;
        }
        outputFile(fileinput.files);
    }

    function resizeMe(img, quality = 1.0) {
        let canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        if (width > height) {
            if (width > max_width) {
                height = Math.round(height *= max_width / width);
                width = max_width;
            }
        } else {
            if (height > max_height) {
                width = Math.round(width *= max_height / height);
                height = max_height;
            }
        }
        canvas.width = width;
        canvas.height = height;
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        return canvas.toDataURL("image/webp", quality);
    }

    

    function onQualityInput(e) {
        let value = e.target.value;
        if (value == 100) {
            output.src = img.src;
            return 0;
        }
        let quality = value / 100;
        let newimg = resizeMe(img, quality)
        output.src = newimg;
        setX(output.width)
        setY(output.height)
    }

    return <div>
        <input id='fileinput'
            type="file"
            ref={fileinput}
            multiple="multiple"
            accept="image/*"
            data-maxwidth={max_width}
            data-maxheight={max_height}
            onchange={handleFileChange}
        />
        <img src="./library/images/nature (5).jpg" ref={img} style='visibility:hidden; position:absolute; left:0;'/>
        <img src="./library/images/nature (5).jpg" ref={output}/>
        <p>{x()} x {y()}</p>
        <SliderNumberInput min={0} max={100} value={100} onInput={onQualityInput}/>
        <div>
            {imgs().map(img => {
                return <img src={img} alt="image" />
            })}
        </div>
    </div>
}