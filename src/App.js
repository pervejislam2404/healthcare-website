import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
       <Header/>  

        <Switch>
            <Route path="/">
               <Home/>
            </Route>

            <Route path="/home">
               <Home/>
            </Route>
            
        </Switch>
      </Router>
    </div>
  );
}

export default App;
