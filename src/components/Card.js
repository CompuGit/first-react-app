export default function Card(props) {
    let pStyle = {color:"black", padding:"4px"}
    return (
        <div className='container card p-2 mt-3 w-25'>
            <div className="d-flex">
                <div><button onClick={props.onDelete} className="btn btn-danger">-</button></div>
                <div style={pStyle}>
                {props.text}
                </div>
            </div>
        </div>
    )
}
//css - background-color
//js  - backgroundColor