import './App.css';
import Navbar from './Routing/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Routing/Home';
import About from './Routing/About';
import Context from './Routing/Context';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />

            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/context' component={Context} />
    </div>
  );
}

export default App;
