import React from 'react';

const Header = () => {
    return (
        <div id="header">
            <div className="inner">
                <h1 className="logo"></h1>
                <ul className="gnb">
                    <li>About</li>
                    <li>Project</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;