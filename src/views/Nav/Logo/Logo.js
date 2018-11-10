import React from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'

const Logo = () => {
    return (
        <div id="logo">
            <Link to="/"><img src="https://goteborgspianofestival.com/wp-content/uploads/2018/07/Logo-GPF.png" alt="Göteborgs Pianofestival"/></Link>
        </div>
    );
};

export default Logo;
