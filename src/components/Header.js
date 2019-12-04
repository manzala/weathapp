import React from 'react';
import '../styles/Header.css';


export default function Header(props) {
    return (
        <div className='h2 title-text'>
            {props.title}
        </div>
    )
}
