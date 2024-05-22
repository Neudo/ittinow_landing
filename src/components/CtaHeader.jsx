import React from 'react';

function CtaHeader({text, color, link}) {
    return (
        <a href={link} className={`${color} font-bold py-2 px-4 rounded`}>{text}</a>
    );
}

export default CtaHeader;
