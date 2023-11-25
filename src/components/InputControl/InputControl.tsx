
function InputControl(props) {
  return (
    
    <div className="text-sm mt-5">
        {props.label && <label>{props.label} </label>}
        <div>
            <input className=" px-5 py-1 rounded-md mt-1" type="text" {...props} />
        </div>
    </div>
  )
  }

export default InputControl