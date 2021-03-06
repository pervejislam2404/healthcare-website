import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home/Home';
import AuthProvider from './Context/AuthProvider';
import Login from './pages/Login/Login';
import Details from './pages/Details/Details';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import About from './pages/About/About';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Contact from './pages/Contact/Contact';
import Trainers from './pages/Trainers/Trainers';

function App() {
  return (
    <div className="App overflow-hidden">
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

            <Route exact path="/about">
               <About/>
            </Route>

            <Route exact path="/trainers">
               <Trainers/>
            </Route>

            <PrivateRoute exact path="/contact">
               <Contact/>
            </PrivateRoute>

            <PrivateRoute exact path="/details/:id">
               <Details/>
            </PrivateRoute>         

            <Route exact path="*">
               <NotFound/>
            </Route>
        </Switch>
        <Footer/>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
