export const Button = (props) => {
    return (
        <button id={props.id} onClick={props.action} className="py-3 px-5 bg-white-600 bg-slate-100 rounded-md">
            {props.label}
        </button>
    )
}