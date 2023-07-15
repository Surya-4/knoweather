import './App.css';
import Home from './Components/Home';
import { DataContextProvider } from './Context';

function App() {
  return (
    <>
      <DataContextProvider>
      <Home />
      </DataContextProvider>
    </>
  );
}

export default App;
