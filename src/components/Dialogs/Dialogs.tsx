import { DialogsPageType } from "../types/StateType"
import { DialogItem } from "./DialogItem/DialogItem"
import { DialogMessage } from "./DialogMessage/DialogMessage"
import { DialogsAddMessage } from "./DialogsAddMessage/DialogsAddMessage"
export type DialogsPropsType = {
    dialogsPage: DialogsPageType
    addNewMessage: () => void
    onChangeMessage: (value: string) => void
    isAuth: boolean
}

export const Dialogs = ({ dialogsPage, addNewMessage, onChangeMessage, ...props }: DialogsPropsType) => {

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