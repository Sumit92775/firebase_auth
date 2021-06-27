import './App.css';
import LogIn from './pages/Login/index';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Route path="/" component={LogIn}/>
      <Route path="/homepage" component={HomePage}/>
    </div>
  );
}

export default App;
