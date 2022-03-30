import React from "react"
import { DialogsPageType } from "../../state/state"
import { DialogItem } from "./DialogItem/DialogItem"
import { DialogMessage } from "./DialogMessage/DialogMessage"
type DialogsPropsType = {
    dialogsPage: DialogsPageType
}
export const Dialogs = ({ dialogsPage, ...props }: DialogsPropsType) => {
    const newMessageItem = React.createRef<HTMLTextAreaElement>()
    const addNewMessage = () => {
        const messageItem = newMessageItem.current as HTMLTextAreaElement
        console.log(messageItem.value);
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
            <div>
                <textarea ref={newMessageItem} name="" id="" ></textarea>
                <button>add message</button>
            </div>
        </div>
    )
}