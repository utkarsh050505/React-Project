import React from 'react';
import './Nav.css';
import { useNavigate } from 'react-router-dom';

function Nav() {

    const navigate = useNavigate();

    const [show, handleShow] = React.useState(false)

    function transitionNavBar() {
        if (window.scrollY > 100) {
            handleShow(true)
        }
        else {
            handleShow(false)
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className='nav__contents'>
            <img
            onClick={() => navigate('/')}
            className='nav__logo'
            src='https://img.icons8.com/?size=100&id=20519&format=png&color=000000'
            //src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj0jWPJ2dABPXDnURT5UrGTNzA5ONHfTO2qQ&s"
            alt="" />

            <img
            onClick={() => {
                navigate('/profile')
            }}
            className='nav__avatar' 
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="" />
            </div>
        </div>
    )
}

export default Nav