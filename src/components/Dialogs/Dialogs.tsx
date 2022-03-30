import React, { ChangeEvent } from "react"
import { addMessageAC, changeNewMessageTextAC, DialogsPageType } from "../../state/redux/dialogs-reducer"
import { ActionType } from "../../state/redux/redux-store"
import { DialogItem } from "./DialogItem/DialogItem"
import { DialogMessage } from "./DialogMessage/DialogMessage"
import { DialogsAddMessage } from "./DialogsAddMessage/DialogsAddMessage"
type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionType) => void
}
export const Dialogs = ({ dialogsPage, ...props }: DialogsPropsType) => {
    const addNewMessage = () => {
        props.dispatch(addMessageAC())
        props.dispatch(changeNewMessageTextAC(''))
    }
    const onChangeMessage = (value: string) => {
        props.dispatch(changeNewMessageTextAC(value))
    }
    return (
        <div className='dialogs'>
            <div className='dialogs__columns'>
                <ul className='dialogs__column column__messages'>
                    {dialogsPage.dialogs.map(el => <li key={el.id} id={el.id}>
                        <DialogItem title={el.name} id={el.id} img={el.img} />
                    </li>)}
                </ul>
                <ul className='dialogs__column'>
                    {dialogsPage.messages.map(el => <li key={el.id} id={el.id}>
                        <DialogMessage title={el.message} id={el.id} />
                    </li>)}
                </ul>
            </div>
            <DialogsAddMessage value={dialogsPage.newMessage} onChangeMessage={onChangeMessage} addNewMessage={addNewMessage} />
        </div >
    )
}