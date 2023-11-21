import React, { useState } from 'react';

const Mouse = () => {
    const [enterCount, setEnterCount] = useState(0);
    const [leaveCount, setLeaveCount] = useState(0);
    const [clickCount, setClickCount] = useState(0);

    const handleMouseEnter = () => {
        setEnterCount((prevEnterCount) => prevEnterCount + 1);
    };

    const handleMouseLeave = () => {
        setLeaveCount((prevLeaveCount) => prevLeaveCount + 1);
    };

    const handleClick = () => {
        setClickCount((prevClickCount) => prevClickCount + 1);
    };

    return (
        <section className='w-full h-auto py-10 flex justify-center'>
            <div className='w-64 h-74 py-3 px-3 text-center rounded-lg border-t border-gray-100 shadow-lg'>
                <h1 className='text-2xl py-2'>Mouse</h1>
                <p className='h-20 text-[#757474]'>
                    Buttonun üzerine gelince onMouseEnter ve ayrılınca onMouseLeave olayı çalışıyor.
                </p>
                <div className='flex justify-between p-3'>
                    <div>
                        <h3 className='text-amber-600'>Tələb</h3>
                        <p>{clickCount}</p>
                    </div>
                    <div>
                        <h3 className='text-red-600'>Ayrılınca</h3>
                        <p>{leaveCount}</p>
                    </div>
                    <div>
                        <h3 className='text-green-600'>Üzərinə</h3>
                        <p>{enterCount}</p>
                    </div>
                </div>
                <button
                    className='py-2 mt-3 px-10 bg-blue-500 rounded-lg text-white'
                    onClick={handleClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Click
                </button>
            </div>
        </section>
    );
};

export default Mouse;

