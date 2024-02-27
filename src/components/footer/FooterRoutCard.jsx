import React from 'react'

export const FooterRoutCard = ({ link, text }) => {
    return (
        <li style={{ listStyle: 'none', marginTop: '15px'}}>
            <a href={link} style={{ 'textDecoration': 'none' }}>
                <span style={{ 'color': '#ffff' }}>{text}</span>
            </a>
        </li>
    )
}

export default FooterRoutCard;