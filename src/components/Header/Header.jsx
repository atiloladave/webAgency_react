
import React from 'react'
import './header.css'

const nav__links = [
    {
        path: '#home',
        display: 'Home'
    },

    {
        path: '#about',
        display: 'About'
    },

    {
        path: '#services',
        display: 'Services'
    },

    {
        path: '#projects',
        display: 'Projects'
    },

    {
        path: '#blog',
        display: 'Blog'
    },
]

const Header = () => {
  return (
    <header className="header">
        <div className="container">
            <div className="nav__wrapper">
                <div className="logo">
                    <h2>SYDEWORK</h2>
                </div>

                {/* Navigation bar */}
                <div className="navigation">
                    <ul className="menu">
                        {
                            nav__links.map((item,index) => (
                                <li className="menu__item"><a href={item.path} className="menu__link">{item.display}</a></li>
                            ))
                        }
                    </ul>
                </div>

                {/* Light mode area */}
                    <div className="light__mode">
                        <span><i class="ri-sun-line"></i> Light Mode</span>
                    </div>
            </div>
        </div>
    </header>
  )
}

export default Header