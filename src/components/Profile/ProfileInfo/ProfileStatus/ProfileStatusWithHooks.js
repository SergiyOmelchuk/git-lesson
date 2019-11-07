import React, {useState, useEffect} from "react";

const ProfileStatusWithHooks = ({status, updateStatus}) => {

    let [editMode, setEditMode] = useState(false);
    let [statusLocal, setStatus] = useState(status);

    useEffect( () => {
        setStatus(status);
    }, [status] );

    let activateEditMode = () => {
        setEditMode(true)
    }
    let deActivateEditMode = () => {
        setEditMode(false);
        debugger;
        updateStatus(statusLocal);
    }
    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                        <span onDoubleClick={activateEditMode}>
                            Статус: {statusLocal || "No status"}
                         </span>
            </div>
            }

            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditMode}
                       value={statusLocal}/>
            </div>
            }
        </div>
    )

}

export default ProfileStatusWithHooks;