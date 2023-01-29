import React, { useState } from 'react';

//will also create navbar in header file


const Header = () => {
    return (
        <header>
            <h1>"This is the Way"</h1>
            {/*NavBar*/}
            <nav>
                <ul>
                    <li>
                        <a href="/#about">About</a>
                    </li>
                    <li>
                        <a href="/#projects">Projects</a>
                    </li>
                    <li>
                        <a href="/#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;