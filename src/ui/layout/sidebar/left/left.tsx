import { numbersfrom } from "../../../../utility/helper";
import RangeSlider from "../../../rangeSlider";

export default function SideBarLeft() {

    return <div >
        <RangeSlider />
    {
        numbersfrom(1, 30).map((n) =>
            <div class="left-item borderbottom" > <p>{ n }</p></div >)
    }
    </div>
}