import React from 'react';

const FooterContactCard = ({ link, icon, text }) => {
  return (
    <li style={{ listStyle: 'none', marginTop: '15px'}}>
      <a href={link} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img src={icon} style={{ marginRight: '8px' }} />
        <span style={{ color: '#ffff' }}>{text}</span>
      </a>
    </li>
  );
};

export default FooterContactCard;
