import { useState } from "react";
import styled from "./DeleteAccount.module.css";
import trashIcon from "./assets/trash.svg"

function DeleteAccount(props) {
    const [isOpen, setIsOpen] = useState(false);

    const popup = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }


    return (
        <div>
            <p className={styled.dlt__header}>Delete Account</p>

            <p className={styled.dlt__desc}>This will immediately delete your opspad account along with all server information. This action is not reversible.</p>

            <div className={styled.dlt__btn} onClick={popup}>Delete Account</div>

            {isOpen && <div className={styled.overlay}>
                <div className={styled.confirmPopup}>
                    <div className={styled.dlt__box}>
                    <img src={trashIcon} alt="trash-icon" style={{width: "16px", height: "20px"}} />

                    </div>
                    <p>
                        Are you sure you want to delete this account? This action cannot be undone
                    </p>

                    <div className={styled.confirmPopup__btn}>
                        <div className={styled.cancel} onClick={popup}>Cancel</div>

                        <div className={styled.delete} onClick={props.handleDelete}>Delete</div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default DeleteAccount;