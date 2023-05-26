export default function styleDynamic(props) {
    
    function camelCaseToDash() {
        const res = 'maxWidth800px'.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(
        ) 
        console.log(res) 
    }

    return (
        <div style={
            ``
        }>
        </div>
    )
}