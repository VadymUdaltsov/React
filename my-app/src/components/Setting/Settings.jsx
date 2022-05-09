import React from "react";
import '../../App.css'
import '../Header/Header.module.css'

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
                navbarA.style.background = 'white';
            }
        }
    }

    return (
        <div>
            <button onClick={changer} className='btn__in-3'>Change color:</button>
            {/* <input type='radio' className="origin" /> */}
            <input type='radio' className="black" />
        </div>
    );
}

export default Football;