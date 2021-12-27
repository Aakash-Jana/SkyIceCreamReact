import React ,{Fragment} from 'react';
import Home from './screen/home/home';
import Contacts from './screen/contacts/contacts';
import Menu from './screen/orderOnline/menu';
import SignUp from './screen/signUp/SignUp';
import NavBar from './navbar';
import Footer from './footer';
import './App.css';
import {BrowserRouter , Route , Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Fragment>
      <NavBar className="stay"/>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/menu" component={Menu} />
      </Switch>
      <Footer/>
    </Fragment>
    </BrowserRouter>
  );
}

export default App;