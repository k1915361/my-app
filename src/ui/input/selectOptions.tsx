import { createSignal } from "solid-js";
import Line from "../helper/line";

export default function SelectOptions({ name, options }) {
    const [selectedOption, setSelectedOption] = createSignal(options[0].value || options[0]);

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    }

    return <>
        <legend>{name}</legend>
        <Line/>
        <select class='input'>
            {options.map((o) => (
                <option
                    name={o.name || o}
                    value={o.value || o}
                    checked={selectedOption() === (o.value || o)}
                    onChange={handleChange}
                >
                    {o.label || o}
                    <Line/>
                </option>
            ))}
        </select>
    </>
}