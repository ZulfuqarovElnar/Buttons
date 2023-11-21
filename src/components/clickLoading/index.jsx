import React, { useEffect, useState } from 'react'

export default function ClickLoading() {
    
    const [clickCount, setClickCount] = useState(0);
    const [errorCount, setErrorCount] = useState(0);
    const [apiRequestCount, setApiRequestCount] = useState(0);
    const [loading, setLoading] = useState(false);


    const handleClick = () => {
        setClickCount((prevClickCount) => prevClickCount + 1);
    };

    useEffect(() => {
        if (clickCount > 0) {
        setLoading(true);
        simulateApiRequest();
        }
    }, [clickCount]);

    const simulateApiRequest = () => {
    const randomError = Math.random() < 0.3;

    setTimeout(() => {
        setLoading(false);

        if (randomError) {
            setErrorCount((prevErrorCount) => prevErrorCount + 1);
        } else {
            setApiRequestCount((prevApiRequestCount) => prevApiRequestCount + 1);
        }
    }, 1000); 
};

    return (
        <section className='w-full h-auto py-10 flex justify-center'>
            <div className='w-64 h-74 py-3 px-3 text-center rounded-lg border-t border-gray-100 shadow-lg'>
                <h1 className='text-2xl py-2'>Click Loading</h1>
                <p className='h-20 text-[#757474]'>Tıkladıqdan sonra Api'dən veri gəlməsini gözləyin.</p>
                <div className='flex justify-between p-3'>
                    <div>
                        <h3 className='text-amber-600'>Tələb</h3>
                        <p>{clickCount}</p>
                    </div>
                    <div>
                        <h3 className='text-red-600'>Error</h3>
                        <p>{errorCount}</p>
                    </div>
                    <div>
                        <h3 className='text-green-600'>Tamam</h3>
                        <p>{apiRequestCount}</p>
                    </div>
                </div>
                <button
                    className='py-2 px-10 mt-3 bg-blue-500 rounded-lg text-white'
                    onClick={handleClick}
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Click'}
                </button>
            </div>
        </section>
    );
};