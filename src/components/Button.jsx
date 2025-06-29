export const Button = ({
    color,
    title,
    onClick,
    type,
    ...props
}) => {
    return (
        <>
            <button style={{ backgroundColor: `${color}` }} title={title} onClick={onClick} {...props}
            >
                {title}
            </button>
        </>
    )
}

export default Button