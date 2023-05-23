import { Cloudinary } from "@cloudinary/url-gen";
import { saturation } from "@cloudinary/url-gen/actions/adjust";
import { scale } from "@cloudinary/url-gen/actions/resize";

const cld = new Cloudinary({
    cloud: {
        cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    }
})

export default function Home_Cloudinary() {
    return (
        <div>            
            <h1>Cloudinary</h1>
            <img 
                src={
                    cld.image('cld-sample-5')
                    .adjust(saturation().level(0))
                    .quality('auto')
                    .format('auto')
                    .resize(scale().width(580).height(387))
                    .toURL()
                }
                alt="Gutar Player" 
                loading="lazy" 
            />            
        </div>
    )
}