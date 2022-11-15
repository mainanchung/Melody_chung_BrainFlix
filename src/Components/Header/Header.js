import '../Header/Header.scss';
import Logo from '../../ Assets/Images/Logo/BrainFlix-logo.svg';
import Avatar from '../../ Assets/Images/Mohan-muruge.jpg'
import { NavLink } from 'react-router-dom';

function Header(){

    return (
        <header className='header-container'>
             <NavLink to="/" className='header-container--link'><img className="header__logo" src={Logo} alt=''></img></NavLink>
                <div className='header__search'>
                    <input className='header__search-bar' type='search' id="search" name='search' placeholder='Search'/>
                    <img src={Avatar} className='header__search--avatar-mob' alt='avatar'/>
                </div>
                <NavLink to="/upload-page"><button className='header__search--btn' type='submit'>UPLOAD</button></NavLink>
            <div className='header__search--avatar-tab-des'></div>
        </header>
    );

}

export default Header;