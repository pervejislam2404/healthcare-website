import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home/Home';
import AuthProvider from './Context/AuthProvider';
import Login from './pages/Login/Login';
import Details from './pages/Details/Details';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
       <Header/>  

        <Switch>
            <Route exact path="/">
               <Home/>
            </Route>

            <Route exact path="/home">
               <Home/>
            </Route>
            
            <Route exact path="/login">
               <Login/>
            </Route>

            <PrivateRoute exact path="/details/:title">
               <Details/>
            </PrivateRoute>


        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
