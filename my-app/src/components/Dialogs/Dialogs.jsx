import React from 'react';
import s from './Dialogs.module.css';
import DialogLinks from './DialogsLinks';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                <div className={s.dialog + ' ' + s.active}>
                    <DialogLinks user='Vadym' url="/dialogs/1" /> 
                </div>
                <div className={s.dialog}>
                    <DialogLinks user='Kirill' url="/dialogs/2" />
                </div>
                <div className={s.dialog}>
                    <DialogLinks user='Yasya' url="/dialogs/3" />
                </div>
                <div className={s.dialog}>
                    <DialogLinks user='Galina' url="/dialogs/4" />
                </div>
                <div className={s.dialog}>
                    <DialogLinks user='Sergey' url="/dialogs/5" />
                </div>
                <div className={s.dialog}>
                    <DialogLinks user='Kolya' url="/dialogs/6" />
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    How are you?
                </div>
                <div className={s.message}>
                    How is your progress?
                </div>
            </div>
        </div>
    )
};

export default Dialogs;