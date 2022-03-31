import { addMessageAC, changeNewMessageTextAC, DialogsPageType } from "../../state/redux/dialogs-reducer"
import { ActionType, StoreType } from "../../state/redux/redux-store"
import { StoreContext } from "../StoreContext"
import { DialogItem } from "./DialogItem/DialogItem"
import { DialogMessage } from "./DialogMessage/DialogMessage"
import { DialogsAddMessage } from "./DialogsAddMessage/DialogsAddMessage"
type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionType) => void
}
//*! Dialogs props = { dialogsPage, ...props }: DialogsPropsType
export const Dialogs = () => {
    // const addNewMessage = () => {
    //     props.dispatch(addMessageAC())
    //     props.dispatch(changeNewMessageTextAC(''))
    // }
    // const onChangeMessage = (value: string) => {
    //     props.dispatch(changeNewMessageTextAC(value))
    // }
    return <StoreContext.Consumer>
        {
            (store: StoreType) => {
                const state = store.getState()
                const addNewMessage = () => {
                    store.dispatch(addMessageAC())
                    store.dispatch(changeNewMessageTextAC(''))
                }
                const onChangeMessage = (value: string) => {
                    store.dispatch(changeNewMessageTextAC(value))
                }
                return <div className='dialogs'>
                    <div className='dialogs__columns'>
                        <ul className='dialogs__column column__messages'>
                            {state.dialogsPage.dialogs.map(el => <li key={el.id} id={el.id}>
                                <DialogItem title={el.name} id={el.id} img={el.img} />
                            </li>)}
                        </ul>
                        <ul className='dialogs__column'>
                            {state.dialogsPage.messages.map(el => <li key={el.id} id={el.id}>
                                <DialogMessage title={el.message} id={el.id} />
                            </li>)}
                        </ul>
                    </div>
                    <DialogsAddMessage value={state.dialogsPage.newMessage} onChangeMessage={onChangeMessage} addNewMessage={addNewMessage} />
                </div >
            }
        }
    </StoreContext.Consumer>
}