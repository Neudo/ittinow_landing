import React from 'react';

function Cta({text}) {
    return (
        <div className="p-5 mt-[22px] relative max-w-[315px] secondary text-center rounded-lg">
        <a className="font-bold " href="#">{text}</a>
        </div>
    );
}

export default Cta;
