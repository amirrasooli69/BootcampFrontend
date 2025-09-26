function FormInput({name, label, type, value, onChange }) {
    return (
        <div className="form-input">
            <label htmlFor={name}>{label}</label>
            <input label={label} id={name} name={name} type={type} value={value} onChange={onChange}/>
            
        </div>
    );
}

export default FormInput;