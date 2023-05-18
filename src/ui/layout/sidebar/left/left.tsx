import { numbersfrom } from "../../../../utility/helper";
import RangeSlider from "../../../rangeSlider";

export default function SideBarLeft() {

    return <div >
        <div class=' borderbottom '>
            <RangeSlider />
        </div>
    {
        ...numbersfrom(1, 30).map((n) =>
            <div class="borderbottom" > <p>{ n }</p></div >)
    }
    </div>
}