import { ChangeEvent } from "react"

type DialogsAddMessageType = {
    value: string
    onChangeMessage: (value: string) => void
    addNewMessage: () => void
}
export const DialogsAddMessage = (props: DialogsAddMessageType) => {
    const onClickHandler = () => {
        props.addNewMessage()
    }
    const onChangeHadler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.currentTarget.value
        props.onChangeMessage(value)
    }
    return (
        <div className="dialogs__footer">
            <textarea value={props.value} onChange={onChangeHadler}></textarea>
            <button onClick={onClickHandler}>add message</button>
        </div>
    )

}