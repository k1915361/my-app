import './rangeslider.css'

export default function RangeSlider({class: classs, min, value, clss, onInput, max}) {
    return <form>
        <input 
            class={classs || '  '}
            type="range" 
            value={value} 
            min={min}
            max={max}
            onInput={onInput}
            style={`--min: ${0};
                    --max: ${100};
                    --val: ${50};`}
            onMouseMove={e => e.target.style.setProperty('--val', e.target.value)}
        />
    </form>
} 
