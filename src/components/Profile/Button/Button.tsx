type ButtonType = {
    callback: () => void
    title: string
}
export const Button = ({ callback, title, ...props }: ButtonType) => {
    console.log('button render');
    return (
        <button onClick={callback}>{title}</button>
    )
}