import React, { useState, useEffect } from 'react';

export default function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(setData)
            .catch(console.error);
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
