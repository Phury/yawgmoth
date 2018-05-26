import React from 'react';

class NavigationComponent extends React.Component {

    render() {
        return (
            <header id="navigation" className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper purple">
                        <a href="#" className="brand-logo">{'\u00A0'}Yawgmoth</a>
                    </div>
                </nav>
            </header>
        );
    }
}

export default NavigationComponent;