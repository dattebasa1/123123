import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navibar from './Components/Navibar'
import { home } from './home';
import { messages } from './messages';
import { personalspace } from './personal-space'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


export default function App() {
  return (
      <Router>
        <Navibar />
        <Switch>
          <Route exact path='/' component={home} />
          <Route path='/messages' component={messages} />
          <Route path='/personalspace' component={personalspace} />
        </Switch>
      </Router>
  );
}




















































































































// import Header from './Components/Header';

// function App() {
//   return (
//     <div>   
//       <Header></Header>
//     </div>
//   );
// }

// export default App;









// кнопка какая то (как ее передвинуть то блин)
// function App () {
//   return(
//     <Button variant='primary' style='gavno'>123</Button>
//   );
// }