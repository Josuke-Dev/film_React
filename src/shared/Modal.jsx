import React from "react";
import Button from "./Button";
import './modal.css';

const Modal = (props) => {
    return (
        <div className='container'>
            <div className='body'>
                <p>{props.data.firstName}</p>
                <p>{props.data.name}</p>
                <p>{props.data.city}</p>
                <p>{props.data.birthday}</p>
                <p>{props.data.postalCode}</p>
                Modal
                <Button
                    label={'Close modal'}
                    click={props.closeModal}
                />
                <Button
                    label={'Validate'}
                    click={props.validateModal}
                />

            </div>
        </div>
    )
}

export default Modal;