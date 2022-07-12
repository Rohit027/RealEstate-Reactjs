import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import SignIn from "./components/SignIn";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
            <Switch>
              <Route path = "/" component = {HomePage} exact/> 
              <Route path = "/agilestays" component = {HomePage}/>
              <Route path = "/signin" component = {SignIn} />
              <Route><Redirect path = "/"></Redirect></Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
