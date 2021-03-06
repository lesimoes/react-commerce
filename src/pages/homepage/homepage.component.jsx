import React from 'react';
import './homepage.styles.scss'
import { Route, Link } from "react-router-dom";

import Directory from '../../components/diretory/directory.component';

const HomePage = (props) => {
    return (
        <div className='homepage'>
            <Directory />
        </div>
    )
}

export default HomePage;