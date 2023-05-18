import './rangeslider.css'
export default function RangeSlider({resetClass = false, class: clss = ''}) {
    return <form>
        <input 
            class={resetClass ? '' : clss} 
            type="range" 
            value="50" 
        />
    </form>
} 
