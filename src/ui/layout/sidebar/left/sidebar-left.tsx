import { Checkbox, FormControlLabel, FormGroup } from "@suid/material";
import Line from "../../../helper/line";
import { Show, createSignal } from "solid-js";
import '../../../input/input.css'
const data = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen'];

export default function SidebarLeft() {
    const [selectedOptions, setSelectedOptions] = createSignal([])

    const handleSelectChange = (e) => {
        const { value, checked } = e.target
        if (checked) {
            setSelectedOptions([...selectedOptions(), value])
        } else {
            setSelectedOptions(selectedOptions().filter(o => o !== value))
        }
    }

    return <div class="sidebar-left">
        <input class='input' list="brow" placeholder="search" />
        <datalist id="brow">
            {data.map(o =>
                <option value={o} />)}
        </datalist>
        <Line/>
        <FormGroup onChange={(e) => ''}>
            {data.map(o =>
                <FormControlLabel
                    class='borderbottom'
                    label={o}
                    control={
                        <Checkbox
                            value={o}
                            onChange={handleSelectChange}/>} />)}
        </FormGroup>
        <Show when={selectedOptions().length}>
            <div>{selectedOptions().join(' ')}</div>
            <Line />
        </Show>
    </div>
}