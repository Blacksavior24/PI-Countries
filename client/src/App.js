import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './Components/landingpage.jsx/LandingPage';
import Countries from './Components/countries/Countries'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Route exact path='/' >
      <LandingPage />
    </Route>
    <Route exact path='/countries' component={Countries}/>
    </BrowserRouter>
    </div>
  );
}

export default App;
