import './App.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom'

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home'
import NotFound from './pages/NotFound';
import Category from './pages/Category';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>category
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/category">
            <Category/>
          </Route>
          <Route path="/detail">
            <DetailPage/>
          </Route>
          <Route component={NotFound} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
