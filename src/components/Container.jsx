import React from 'react';

function Container({children, id}) {
    return (
        <div id={id} className="max-w-[1260px] h-[100vh] m-auto flex flex-wrap items-center">
            {children}
        </div>
    );
}

export default Container;
