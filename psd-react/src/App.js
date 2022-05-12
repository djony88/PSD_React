import React from 'react';

import {
  BrowserRouter as Router;
  Switch,
  Route,
  Link
} from 'react-router-dom';

import About from './Components/About';
import Conceptial from './Components/Conceptual';
import Contact from './Components/Contact';
import Educational from './Components/Educational';
import Public from './Components/Public';
import Residential from './Components/Residential';


function App() {
  return (
   <div>
     < Router>
       <div>
         <nav>
           <li>
             <link to="/">About</link>
           </li>
           <li>
             <link to="/conceptual">Conceptial</link>
           </li>
           <li>
             <link to="/contact">Contact</link>
           </li>
           <li>
             <link to="/educational">Educational</link>
           </li>
           <li>
             <link to="/public">Public</link>
           </li>
           <li>
             <link to="/residential">Residential</link>
           </li>
         </nav>
         <Switch>
           <Route path = '/' component= {About}/>
           <Route path = '/conceptual' component= {Conceptial}/>
           <Route path = '/contact' component= {Contact}/>
           <Route path = '/educational' component= {Educational}/>
           <Route path = '/public' component= {Public}/>
           <Route path = '/residential' component= {Residential}/>
         </Switch>
       </div>
     </Router>
   </div>
  );
}

export default App;
