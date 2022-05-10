import React from "react";
import '../../App.css'
import '../Header/Header.module.css'
import s from './Settings.module.css'

function Football() {
    const changer = () => {
        document.querySelector('.btn__in-3').onclick = () => {
            let black = document.querySelector('.black');
            let header = document.querySelector('.Header_header__tfdZ5');
            let navbar = document.querySelector('.Navbar_nav__D1URt');
            let navbarA = navbar.querySelectorAll('div.Navbar_item__8Antn > a');
            if (black.checked) { /* если выбрана эта точка то делай это  */
                 header.style.background = 'black';
                 navbar.style.background = 'black';
                navbarA.forEach(function (a) {
                    a.style.color = 'white';;
                });
            }
            let origin = document.querySelector('.default');
            if (origin.checked) { /* если выбрана эта точка то делай это  */
                header.style.background = 'green';
                navbar.style.background = 'burlywood';
                navbarA.forEach(function (a) {
                    a.style.color = 'black';
                });
            }
        }
    }

    return (
        <div className={s.setting__div}>
            <button onClick={changer} className='btn__in-3'>Change color:</button>
            {/* <input type='radio' className="origin" /> */}
            <p>Black Style:</p><input type='radio' className="black" name="theme" />
            <p>Origin Style:</p><input type='radio' className="default" name="theme" />
        </div>
    );
}

export default Football;