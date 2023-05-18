import { Title } from "solid-start";
import { Cloudinary } from "@cloudinary/url-gen";
import { scale } from "@cloudinary/url-gen/actions/resize";

const cld = new Cloudinary({
    cloud: {
        cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    }
})

export default function Home_Cloudinary() {
    return (
        <div >
            <div >
                <h1 >
                    SolidJS &amp; Cloudinary
                </h1>
                <img 
                    width='600'
                    height='400'
                    src={
                        cld.image('cld-sample-5')
                        .quality('auto')
                        .format('auto')
                        .resize(scale().width(1200).height(800))
                        .toURL()
                    }
                    alt="Gutar Player" 
                    loading="lazy" 
                />
            </div>
        </div>
    )
}