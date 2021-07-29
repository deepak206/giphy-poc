import { useState } from 'react';
import './App.css';
import Head from './components/header/Head';
import GiphyWrapper from './views/giphy-wrapper/GiphyWrapper';

function App() {
  const [theme, setTheme] = useState('light');

  const themeHandler = () => {
    setTheme(theme == 'light' ? 'dark' : 'light')
  }
  
  return (<div className={theme}>
    <Head themeHandler={themeHandler} />
    <main className="gwWrapper_content">
      <div className="gwSpaWrapper gwSpaWrapper--eve">
        <GiphyWrapper />
      </div>
    </main>
  </div>
  );
}

export default App;
