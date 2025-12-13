function InputText(props: any) {
    const { name, setter, type } = props

    return (
        <>
            <label>
                {name}
            </label>
            <br />
            <input id={name} type={type} onChange={(e) => {
                console.log(e.target.value);
                setter(e.target.value);
            }} />
        </>
    );
}
export default InputText