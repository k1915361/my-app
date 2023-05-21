export default function Container(props) {

    return <div class=" container " ref={props.ref}>
        {props.children}
    </div>
}