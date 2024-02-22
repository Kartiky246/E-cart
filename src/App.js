import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import ContactUs from "./components/ContactUs";
import AboutPage from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/checkout">
          <Cart />
        </Route>
        <Route path="/contactUs">
          <ContactUs/>
        </Route>
        <Route path="/about">
          <AboutPage/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
