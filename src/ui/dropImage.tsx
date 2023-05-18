import { createSignal } from 'solid-js';
import './dropImage.css';

export default function DropImage() {
    const [images, setImages] = createSignal([])

    function handleInputChange(e) {
        const files = e.target.files
        console.log('files',files)
        setImages([...images(), ...files])
    }

    function handleImageDrop(e) {
        e.preventDefault()
        const files = e.dataTransfer.files
        for (let i = 0; i < files.length; i++) {
            if (!files[i].type.match("image")) continue;

            if (images().every(image => image.name !== files[i].name))
                setImages([...images(), files[i]])
        }
    }

    function deleteImage(index: number) {
        setImages(i => i.filter((i, idx) => idx !== index))
    }

    return <>
        <div class="input-div">
            <p>Drag & drop photos here or <strong>Browse</strong></p>
            <input
                onInputChange={handleInputChange}
                onDrop={handleImageDrop}
                onChange={handleInputChange}
                type="file"
                class="file"
                multiple="multiple"
                accept="image/jpeg, image/png, image/jpg, image/webp, image/avif"
            />

        </div>
        <output>
            {images().length && images().map((image, index) =>
                <div class="image">
                    <img src={URL.createObjectURL(image)} alt="image" />
                    <span onClick={()=>deleteImage(index)}>&times;</span>
                </div>
            )}
            {images().length}
        </output>
    </>
}