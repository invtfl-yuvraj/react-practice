import logo from './logo.svg';
import './App.css';
import Products from './components/Products';

function App() {

  const products = [

    {
      id : "p1",
      title : "Smart Phone",
      price : "20000",
      date : new Date(2020, 5, 24)
    }, 
    {
      id : "p2",
      title : "Monitor",
      price : "15000",
      date : new Date(2021, 7, 12)
    }, 
    {
      id : "p3",
      title : "Laptop",
      price : "65000",
      date : new Date(2019, 8, 14)
    }, 
    {
      id : "p4",
      title : "Tablet",
      price : "30000",
      date : new Date(2024, 2, 27)
    }, 

    {
      id : "p5",
      title : "Ipad",
      price : "70000",
      date : new Date(2023, 8, 25)
    },

  ]

  return (
    <Products items = {products}> </Products>
  );
}

export default App;
