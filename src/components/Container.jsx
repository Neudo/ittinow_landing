import React from 'react';

function Container({children, id}) {
    return (
        <div id={id} className="w-[100vw] min-w-[100vw] h-[100vh] flex">
            <div className="w-full m-auto max-w-[1280px]  flex items-center">
                {children}
            </div>
        </div>
    );
}

export default Container;
