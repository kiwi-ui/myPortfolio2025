import { useEffect, useState } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs'

const ThemeButton = () => {
  const [theme, setTheme] = useState('light');  

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(theme === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div 
      className="position-absolute top-0 start-50 translate-middle-x d-flex justify-content-center align-items-center"
      style={{
        width: '120px',
        height: '60px',
        borderBottomLeftRadius: '60px',
        borderBottomRightRadius: '60px',
        backgroundColor: theme === 'light' ? '#feff9e' : '#343a40',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        zIndex: 1000,
        cursor: 'pointer',
        transition: 'transform 0.5s ease, opacity 0.5s ease',
        transform: theme === 'light' ? 'translateY(0px)' : 'translateY(20px)',
        opacity: theme === 'light' ? 1 : 0.85,
      }}
      onClick={handleToggleTheme}
    >
      {
        theme === 'light' 
          ? <BsSunFill className="text-warning" style={{ fontSize: '2rem' }} />
          : <BsMoonFill className="text-white" style={{ fontSize: '2rem' }} />
      }
    </div>
  );
};

export default ThemeButton;
