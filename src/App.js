
import './App.css';
import Navbar from './Component/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contect from './Component/Contect';
import Products from './Component/Products';
import Product from './Component/Product';

function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Product' element={<Products/>}/>
      <Route path='/Product/:id' element={<Product/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contect' element={<Contect/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
