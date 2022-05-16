
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import ItemListContainer from './components/ItemListContainer';


const App = () => {
  return (
    <div className="App">
     <ResponsiveAppBar />
     <ItemListContainer saludo='Hola Mundo!!' />
    </div>
  );
}

export default App;
