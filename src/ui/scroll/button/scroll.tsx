import { isTopOfDiv } from "../../../utility/helper"
import { Button } from "../../Button"

export default function ScrollButton({ text, ref, yPos, onclick, style }) {
    ref = ref()
    yPos = yPos || (isTopOfDiv(ref) ? 0 : ref.scrollHeight)

    return <Button
        onClick={() =>
            ref.scrollTo({
                top: (isTopOfDiv(ref) ? 0 : ref.scrollHeight),
                behavior: 'smooth'
            })
        }
        style={{
            position: 'sticky',
            bottom: '0px',
            float: 'right',
            width: 'fit-content',
            ...style
        }}

    >{text}</Button>
}