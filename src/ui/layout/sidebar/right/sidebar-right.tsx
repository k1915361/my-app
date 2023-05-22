import { Checkbox, FormControlLabel, FormGroup } from "@suid/material";
import Line from "../../../helper/line";
import { Show, createSignal } from "solid-js";
import '../../../input/input.css'
import SelectOptions from "../../../input/SelectOptions";
import SliderNumberInput from "../../../input/slider-number-input/sliderNumberInput";
const data = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];

export default function SidebarRight({app}) {
    const [selectedOptions, setSelectedOptions] = createSignal([])

    const handleSelectChange = (e) => {
        const { value, checked } = e.target
        if (checked) {
            setSelectedOptions([...selectedOptions(), value])
        } else {
            setSelectedOptions(selectedOptions().filter(o => o !== value))
        }
    }

    return <div class="sidebar-right" >
        <input class='input' list="brow" placeholder="search" />
        <datalist id="brow">
            {data.map(o =>
                <option value={o} />)}
        </datalist>
        <Line />
        <SelectOptions name='Setting options' options={data}/>
        <Line />
        <SliderNumberInput />
        <Line />
        <input class='input' type='number' value={1} />
        <Line />
        <FormGroup onChange={(e) => ''}>
            {data.map(o =>
                <FormControlLabel
                    class='borderbottom'
                    control={
                        <Checkbox
                            value={o}
                            onChange={handleSelectChange}
                        />}
                    label={o}
                />
            )}
        </FormGroup>
        <Show when={selectedOptions().length}
        >
            <div>{selectedOptions().join(' ')}</div>
            <Line />
        </Show>
    </div>
}