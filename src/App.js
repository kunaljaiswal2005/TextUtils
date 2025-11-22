import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, { useState, useEffect } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => setAlert(null), 900);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert("Dark mode has been applied", "success");
    } else {
      setMode('light');
      showAlert("Light mode has been applied", "success");
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = mode === 'dark' ? '#042743' : 'white';
  }, [mode]);

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />
        <About mode={mode} />
      </div>
    </>
  );
}

export default App;
