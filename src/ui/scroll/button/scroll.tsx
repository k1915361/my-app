import { bottomOrTop, isTopOfDiv } from "../../../utility/helper"
import { Button } from "../../Button"

export default function ScrollButton({ text, ref, yPos, onclick, style }) {
    ref = ref()
    
    return <Button
        onClick={() =>
            ref.scrollTo({
                top: bottomOrTop(ref),
                behavior: 'smooth'
            })}
        style={{
            position: 'sticky',
            bottom: '0px',
            float: 'right',
            width: 'fit-content',
            ...style
        }}

    >{text}</Button>
}