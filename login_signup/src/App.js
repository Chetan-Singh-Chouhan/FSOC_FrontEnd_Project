import HomePage from './component/homepage/homepage'
import Login from './component/login/login'
import Register from './component/register/register'
import Blogs from './component/create_blogs/create_blogs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
       
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/create_blog" element={<Blogs />}/>
          </Routes>
      </Router>
      {/* <HomePage>
      </HomePage> */}
      {/* <Login></Login> */}
      {/* <Register></Register> */}
      {/* <Blogs></Blogs> */}
    </div>
  );
}

export default App;
