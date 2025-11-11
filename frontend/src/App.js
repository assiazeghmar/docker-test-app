import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');
  const [visitors, setVisitors] = useState(0);
  const [inputText, setInputText] = useState('');
  const [echoResponse, setEchoResponse] = useState(null);

  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

  useEffect(() => {
    fetchMessage();
    fetchVisitors();
  }, []);

  const fetchMessage = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/hello`);
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Failed to connect to backend');
    }
  };

  const fetchVisitors = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/visitors`);
      const data = await response.json();
      setVisitors(data.visitors);
    } catch (error) {
      console.error('Failed to fetch visitors');
    }
  };

  const sendEcho = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/echo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText, sentAt: new Date().toISOString() }),
      });
      const data = await response.json();
      setEchoResponse(data);
    } catch (error) {
      console.error('Failed to send echo');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Docker  ASIIIIIIIIE IS HERE TOO  Test App 🐳</h1>
      
      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
        <h2>Backend Connection:</h2>
        <p>{message}</p>
      </div>

      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#e0f7fa', borderRadius: '5px' }}>
        <h2>Visitor Counter:</h2>
        <p>Total visitors: <strong>{visitors}</strong></p>
        <button onClick={fetchVisitors} style={{ padding: '8px 16px', marginTop: '10px' }}>
          Refresh Counter
        </button>
      </div>

      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#e8f5e8', borderRadius: '5px' }}>
        <h2>Echo Test:</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type something to echo..."
          style={{ padding: '8px', width: '300px', marginRight: '10px' }}
        />
        <button onClick={sendEcho} style={{ padding: '8px 16px' }}>
          Send to Backend
        </button>
        
        {echoResponse && (
          <div style={{ marginTop: '10px', padding: '10px', backgroundColor: 'white', borderRadius: '3px' }}>
            <strong>Backend responded:</strong>
            <pre>{JSON.stringify(echoResponse, null, 2)}</pre>
          </div>
        )}
      </div>

      <div style={{ marginTop: '30px', fontSize: '14px', color: '#666' }}>
        <p>This is a simple full-stack app running in Docker containers!</p>
      </div>
    </div>
  );
}

export default App;