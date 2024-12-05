import React from 'react';
import '../../styles/components/layout/Header.css';

const Header = (props) =>{
    return(
        <>
            <header>
                <div class="holder">
                    <img src="img/logo.svg" width="100" alt="InsumosIT"/>
                    <h1>Insumos IT</h1>
                </div>
            </header>
        </>
    );
}

export default Header;