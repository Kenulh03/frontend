import logo from "./logo.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "./App.css";
import Users from "./Users";
import List from "./List";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Orders from "./Orders";
import EditOrder from "./EditOrder";

function App() {

 

  return (
    <div className="App">
    <List></List>
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />

        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id/editOrder" element={<EditOrder />} />
        
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

function ListItem({ itemName, itemId }) {
  return (
    <div>
      {itemName}
      <ChildComponent />
    </div>
  );
}

function ChildComponent() {
  return <div>ChildComponent</div>;
}

export default App;
