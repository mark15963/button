export const Input = ({
    value,
    onChange,
    type,
}) => {
    return (
        <>
            <input value={value} onChange={onChange} type={type} />
        </>
    )
}

export default Input