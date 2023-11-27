import './module.css'

function Wrapper(props) {
    const style = {background:props.color, width:'200px' , padding:'20px' ,margin:'20px auto'}
    return <div style={style}>{props.children}</div>
}
export default Wrapper