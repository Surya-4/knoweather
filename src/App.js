import './App.css';
import Home from './Components/Home';
import { DataContextProvider } from './Context';

function App() {
  const apiKey=process.env.REACT_APP_API;
  return (
    <>
      <DataContextProvider>
      <Home apiKey={apiKey}/>
      </DataContextProvider>
    </>
  );
}

export default App;
