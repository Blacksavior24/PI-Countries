import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './Components/landingpage.jsx/LandingPage';
import Countries from './Components/countries/Countries'
import CardDetail from './Components/cardsdetails/CardDetail';


function App() {
  return (
    <div className="App">
    <Route exact path='/' >
      <LandingPage />
    </Route>
    <Route exact path='/countries' component={Countries}/>
    <Route exact path='/countries/:id' component={CardDetail}/>
    </div>
  );
}

export default App;
