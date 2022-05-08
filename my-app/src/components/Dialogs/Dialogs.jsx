import React from 'react';
import s from './Dialogs.module.css';
import DialogLinks from './DialogsComponents/DialogsLinks';
import DialogsMessages from './DialogsComponents/Messages';

const Dialogs = (props) => {
    /* 2 уровня: */
    /* BLL - Business Logic Layer -- DATA */
    /* UI -- User Interface -- Components */


    /* let dialogsElements = [
        <DialogLinks user={dialogsData[0].name} url={dialogsData[0].url} />,
        <DialogLinks user={dialogsData[1].name} url={dialogsData[1].url} />,
        <DialogLinks user={dialogsData[2].name} url={dialogsData[2].url} />,
        <DialogLinks user={dialogsData[3].name} url={dialogsData[3].url} />,
        <DialogLinks user={dialogsData[4].name} url={dialogsData[4].url} />,
        <DialogLinks user={dialogsData[5].name} url={dialogsData[5].url} />
    ]; */


    let dialogsElements = props.dialogsData
        .map(dialog => <DialogLinks user={dialog.name} url={dialog.url} />); /* Короче и лучше. Используем метод map() */
    /* dialog - будет перебор каждого элемента в массиве dialogsData */

    let messagesElements = props.messagesData
        .map(messages => <DialogsMessages message={messages.message} /> );




    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {dialogsElements} {/* React компилирует массив в html разметку */}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
};

export default Dialogs;