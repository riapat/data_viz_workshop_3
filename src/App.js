import logo from './logo.svg';
import './App.css';
import Form from './Screens/Form';
import Records from './Screens/Records';
import UpdateRecord from './Screens/UpdateRecord';

// BrowserRouter is renamed to Router and it is used to wrap the entire app
// Link is used to create links to other pages
// Routes is used to define the routes and their corresponding components
// Route is used to define a single route and its corresponding component
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <Form/>
    // </div>
    <Router className="App">
      <nav>
        <Link to="/"> Form </Link>
        <Link to="records"> Records </Link>
      </nav>

      {/* Routes define the paths which the Link can use to go to the path. */}
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="records" element={<Records />} />
        <Route path="records/:record" element={<UpdateRecord />} />
      </Routes>
    </Router>
    
  );
}

export default App;
