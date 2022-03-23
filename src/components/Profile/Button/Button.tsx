type ButtonType = {
    callback: () => void
    title: string
}
export const Button = (props: ButtonType) => {
    return (
        <button>{props.title}</button>
    )
}