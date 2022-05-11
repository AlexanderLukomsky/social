import { ChangeEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editModeProfileStatusAC, ProfileStatusType, setProfileStatusAC } from "../../../redux/profileStatus-reducer"
import { AppStateType } from "../../../redux/redux-store"

export const ProfileStatus = (props: { updateStatus: (status: string) => void }) => {
    const profileStatus = useSelector<AppStateType, ProfileStatusType>(state => state.profilestatus)
    const dispatch = useDispatch()
    const [value, setValue] = useState(profileStatus.status)

    const editingModeToggle = () => {
        dispatch(editModeProfileStatusAC(true))
        setValue(profileStatus.status)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const onBlurHandler = () => {
        dispatch(editModeProfileStatusAC(false))
        props.updateStatus(value)
    }
    const setChangedStatus = () => {
        // props.updateStatus(value)
        // dispatch(setProfileStatusAC(value))
        // setValue(profileStatus.status)
    }
    return (
        <div>
            <div onDoubleClick={editingModeToggle}>
                {profileStatus.editMode ?
                    <input value={value}
                        autoFocus
                        onBlur={onBlurHandler}
                        onChange={onChangeHandler}>
                    </input>
                    : <span style={{ display: 'block', padding: '10px', backgroundColor: 'grey' }}>{profileStatus.status}</span>}
            </div>
            <div>
                <button onClick={setChangedStatus}>+</button>
            </div>
        </div>
    )
}