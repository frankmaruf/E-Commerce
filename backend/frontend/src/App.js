import { Container } from "react-bootstrap";
import {HashRouter as Router,Route} from "react-router-dom"
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UsersList from "./screens/UsersListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductList from "./screens/ProductListScreen";
import ProductEditeScreen from "./screens/ProductEditeScreen";
import OrderListScreen from "./screens/OrderListScreen";



function App() {
  return (
    <Router>
    <Header/>
    <main className="py-3">
    <Container>
    <Route path="/" exact component={HomeScreen}/>
    <Route path="/login" component={LoginScreen}/>
    <Route path="/register" component={RegisterScreen}/>
    <Route path="/profile" component={ProfileScreen}/>
    <Route path="/shipping" component={ShippingScreen}/>
    <Route path="/placeorder" component={PlaceOrderScreen}/>
    <Route path="/order/:id" component={OrderScreen}/>
    <Route path="/payment" component={PaymentScreen}/>
    <Route path="/product/:id" component={ProductScreen}/>
    <Route path="/cart/:id?" component={CartScreen}/>

    <Route path="/admin/userslist" component={UsersList}/>
    <Route path="/admin/user/:id/edit" component={UserEditScreen}/>

    <Route path="/admin/productslist" component={ProductList}/>
    <Route path="/admin/product/:id/edit" component={ProductEditeScreen}/>

    <Route path="/admin/orderslist" component={OrderListScreen}/>
    </Container>
    </main>
    <Footer/>
    </Router>
    
  );
}

export default App;
