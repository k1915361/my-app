import Style from './resizeable.module.css';

export default function Resizeable(props) {
    return <div class={Style.resizeable} {...props} />
}