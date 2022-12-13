import Sidebar from './Components/Sidebar';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button'

function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light'){
      setTheme('dark')
    }
    else{
      setTheme('light');
    }
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme])

  return (
    <div className = {`App ${theme}`}>
      <Sidebar />
      <div className = 'Button'>
        <Button variant = "contained" onClick = { toggleTheme }>
          {theme === 'light' ? 'Toggle Dark Mode' : 'Toggle Light Mode'}
        </Button>
      </div>
    </div>
  );
}

export default App;
