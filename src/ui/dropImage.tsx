import { createSignal } from 'solid-js';
import './dropImage.css';
import { deleteOne, handleFiles, toUrl } from '../utility/helper';
import Toast from './toast/toast';

export default function DropImage() {
    const [images, setImages] = createSignal([])

    function handleInputChange(e) {
        const newFiles = e.target.files
        handleFiless(newFiles)
    }

    function handleFileDrop(e) {
        e.preventDefault()
        const newFiles = e.dataTransfer.files
        handleFiless(newFiles)
    }

    function handleFiless(newFiles) {
        handleFiles(images(), newFiles, 'image', setImages)
    }

    return <>
        <div class="input-div">
            <p>Drag & drop photos here or <strong>Browse</strong></p>
            <input
                onDrop={handleFileDrop}
                onChange={handleInputChange}
                type="file"
                class="file"
                multiple={true}
                accept="image/jpeg, image/png, image/jpg, image/webp, image/avif"
            />

        </div>
        <output>
            {images().length && images().map((img, idx) =>
                <div class="image">
                    <img src={toUrl(img)} alt="image" />
                    <span onClick={()=>setImages(ls => deleteOne(ls, idx))}
                        >&times;</span>
                </div>
            )}
        </output>
        {/* <div id="snackbar">Only images can be dropped here.</div> */}
        <Toast message='Only images can be dropped here.'/>
    </>
}