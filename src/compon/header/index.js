import React, {useState} from 'react'
import './style.css'

function Header() {
    const [toggle, setToggle] = useState(false)

    function check() {
      setToggle(!toggle)
    }  
    return(
        <div>
            <div className="header">
                <h4><span>Dev_</span>Bekzat</h4>
                <div onClick={check} className={toggle ? 'open menu' : 'menu'}>
                    <div className="burger"></div>
                </div>
            </div>
            <div className={toggle ? 'active menu-overlay' : 'menu-overlay'}>
                <ul>
                    <li data-text="Home"><a href="/dev_bekzat">Home</a></li>
                    <li data-text="About"><a href="/about">About</a></li>
                    <li data-text="Portfolio"><a href="/portfolio">Portfolio</a></li>
                    <li data-text="Contacts"><a href="/contacts">Contacts</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header