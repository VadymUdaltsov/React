import React from 'react';
import s from './Dialogs.module.css';
import DialogLinks from './DialogsComponents/DialogsLinks';
import DialogsMessages from './DialogsComponents/Messages';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                <DialogLinks user='Vadym' url="/dialogs/1" />
                <DialogLinks user='Kirill' url="/dialogs/2" />
                <DialogLinks user='Yasya' url="/dialogs/3" />
                <DialogLinks user='Galina' url="/dialogs/4" />
                <DialogLinks user='Sergey' url="/dialogs/5" />
                <DialogLinks user='Kolya' url="/dialogs/6" />
            </div>
            <div className={s.messages}>
                <DialogsMessages message="Hi" />
                <DialogsMessages message="How are you?" />
                <DialogsMessages message="What are you doing?" />
            </div>
        </div>
    )
};

export default Dialogs;