import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Switch, Route} from 'react-router-dom';
import Product from "./component/Product";
import ProductDetail from './component/ProductDetail';

function App() {
  return (
    <>
   
      <Navbar/>
       <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/products" component={Product}/>
        <Route exact path="/products/:id" component={ProductDetail}/>
      </Switch>
    </>
  );
}

export default App;
