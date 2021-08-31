import React, {Component} from 'react';
import './Navbar.css';
import {NavbarItems} from './NavbarItems';


class Navbar extends Component
{
    state = {clicker: false}

    handleClick = () => 
    {
        this.setState({clicked: !this.state.clicked}) /*Ustawienie funkcji handleClick na klikniętą */
    }

    
    render(){
        return(
            <nav className="NavbarItems">
        <h1  className="navbar-logo">Hooy's Vision</h1>
            <div className="menu-icon" onClick={this.handleClick}>
<i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i> {/*Zmiana ikony menu (Jeżeli klikniemy pojawi się X, aby ,,zamknąc")*/}
            </div>

            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}> {/* jeżeli nie jest kliknięte to załaduje się CSS inny niż w przypadku klikniętego */}
                {NavbarItems.map((item, index) =>{
                    return(
                        <li key={index}>
                        <a className={item.cName} href={item.url}> {item.title}</a>
                       
                    </li>
                    )
                })}

            </ul>
            </nav>
            )
}}
export default Navbar;