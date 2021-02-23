import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import FAQ from "./Components/FAQ";
import Store from "./Components/Store";
import NavigationBar from "./Components/NavigationBar";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/about" component={About}>
          <About />
        </Route>
        <Route path="/faq" component={FAQ}>
          <FAQ />
        </Route>
        <Route path="/store" component={Store}>
          <Store />
        </Route>
        <Route path="/" component={Home}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
