import React, { useState, useEffect } from 'react';

export default function App() {
    const [status, setStatus] = useState('loading');

    useEffect(() => {
        fetch('/api/status')
            .then(r => r.json())
            .then(data => setStatus(data.status))
            .catch(() => setStatus('error'));
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow">
                <h1 className="text-2xl font-bold text-blue-600">Dashboard</h1>
                <p className="text-gray-600 mt-2">Status: {status}</p>
            </div>
        </div>
    );
}
