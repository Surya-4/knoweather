import './App.css';
import Home from './Components/Home';
import { DataContextProvider } from './Context';

function App() {
  const API_KEY=process.env.REACT_APP_API;
  return (
    <>
      <DataContextProvider>
      <Home API_KEY={API_KEY}/>
      </DataContextProvider>
    </>
  );
}

export default App;
