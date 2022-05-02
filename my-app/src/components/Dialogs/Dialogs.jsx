import React from 'react';
import s from './Dialogs.module.css';
import DialogLinks from './DialogsComponents/DialogsLinks';
import DialogsMessages from './DialogsComponents/Messages';

const Dialogs = () => {
    /* 2 уровня: */
    /* BLL - Business Logic Layer -- DATA */
    /* UI -- User Interface -- Components */

    let dialogsData = [
        { url: '/dialogs/1', name: 'Vadym' },
        { url: '/dialogs/2', name: 'Kirill' },
        { url: '/dialogs/3', name: 'Yasya' },
        { url: '/dialogs/4', name: 'Galina' },
        { url: '/dialogs/5', name: 'Sergey' },
        { url: '/dialogs/6', name: 'Kolya' }
    ];

    let messagesData = [
        { message: 'Hi', id: 1 },
        { message: 'How are you?', id: 2 },
        { message: 'What are you doing?', id: 3 },
    ];

    /* let dialogsElements = [
        <DialogLinks user={dialogsData[0].name} url={dialogsData[0].url} />,
        <DialogLinks user={dialogsData[1].name} url={dialogsData[1].url} />,
        <DialogLinks user={dialogsData[2].name} url={dialogsData[2].url} />,
        <DialogLinks user={dialogsData[3].name} url={dialogsData[3].url} />,
        <DialogLinks user={dialogsData[4].name} url={dialogsData[4].url} />,
        <DialogLinks user={dialogsData[5].name} url={dialogsData[5].url} />
    ]; */


    let dialogsElements = dialogsData
        .map(dialog => <DialogLinks user={dialog.name} url={dialog.url} />); /* Короче и лучше. Используем метод map() */
    /* dialog - будет перебор каждого элемента в массиве dialogsData */

    let messagesElements = messagesData
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