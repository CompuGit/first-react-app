export default function Card(props) {
    return (
        <div className='container card p-2 mt-3 w-25'>
            {props.text}
        </div>
    )
}