

import React from 'react';

const Link = ({route}) => {
    const{path,name}=route;
    return (
        <li className='mr-10' >

        <a href={path}> {name}</a>
      </li>
    );
};

export default Link;