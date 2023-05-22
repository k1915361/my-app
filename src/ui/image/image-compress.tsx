import { createSignal, onMount } from "solid-js";
import SliderNumberInput from "../input/slider-number-input/sliderNumberInput";
import { toUrl } from "../../utility/helper";

export default function ImageCompress() {
    const [imgs, setImgs] = createSignal([]);
    const [image, setImage] = createSignal('./library/images/nature (5).jpg');
    let img
    let output
    let fileinput
    let max_width
    let max_height
    let preview
    let form

    const output_height = () => output.height

    onMount(() => {
        fileinput = document.getElementById('fileinput');
        max_width = fileinput?.getAttribute('data-maxwidth');
        max_height = fileinput?.getAttribute('data-maxheight');
        preview = document.getElementById('preview');
        form = document.getElementById('form');
    })

    function outputFile(files) {
        let file = files[0];
        img.src = toUrl(file);
        output.src = toUrl(file);
        // output.height = output.height;
        // output.width = output.width;
        setImage(toUrl(file))
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
        preview.appendChild(canvas);
        return canvas.toDataURL("image/jpeg", quality);
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
    }

    return <div>
        <input id='fileinput'
            type="file"
            multiple="multiple"
            accept="image/*"
            data-maxwidth="300"
            data-maxheight="300"
            onchange={handleFileChange}
        />
        <img src="./library/images/nature (5).jpg" ref={img} style='visibility:hidden; position:absolute; left:0;'/>
        {/* <img src="./library/images/nature (5).jpg" ref={output}/> */}
        <img src={image()} ref={output}/>
        <p>{output.height * output.width} = {output_height()} x {output.width}</p>
        <SliderNumberInput min={0} max={100} value={100} onInput={onQualityInput}/>
        <canvas id="preview"></canvas>
        <div id="form" ></div>
        <div>
            {imgs().map((i, idx) => {
                return <img src={i} alt="image" />
            })}
        </div>
    </div>
}