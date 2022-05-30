
import './App.css';

import ResponsiveAppBar from './components/ResponsiveAppBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
/* import ItemListContainer from './containers/ItemListContainer'; */



const App = () => {
  return (
    <div className="App">
     <ResponsiveAppBar />
     <ItemDetailContainer />
    {/*  <ItemListContainer saludo='Hola Mundo!!' /> */}
     
    </div>
  );
}

export default App;
