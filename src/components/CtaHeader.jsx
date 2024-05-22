import React from 'react';

function CtaHeader({text, color, link}) {
    return (
        <div className="relative">
            <a href={link} className={`${color} cursor-pointer font-bold py-2 px-4 rounded`}>{text}</a>
        </div>
    );
}

export default CtaHeader;
