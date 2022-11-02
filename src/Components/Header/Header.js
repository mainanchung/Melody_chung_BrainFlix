import '../Header/Header.scss';
import Logo from '../../ Assets/Images/Logo/BrainFlix-logo.svg';

function Header(){

    return (
        <header className='header'>
            <img className="header__logo" src={Logo}></img>
                <div className='header__search'>
                    <input type='search' id="search" name='search' placeholder='Search'/>
                    <div className='header__search--avatar'></div>
                </div>
            <button className='header__search--btn' type='submit'>UPLOAD</button>
            <div className='header__search--avatar-tab-des'></div>
        </header>
    )

}











export default Header;