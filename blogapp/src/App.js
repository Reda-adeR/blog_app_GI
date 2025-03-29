import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Post from './pages/Post';
import About from './pages/About';
import Contact from './pages/Contact';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import NavbarHome from './component/NavbarHome';
import { useEffect, useState } from 'react';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
useEffect(() => {
  fetch("http://localhost:3001/auth", { credentials: "include" }) // Include credentials if using sessions
    .then((response) => response.json())
    .then((data) => {
      if (data.authenticated) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    })
    .catch((error) => {
      console.error("Error fetching auth:", error);
      setIsAuthenticated(false); // Default to unauthenticated if error occurs
    });
}, []);

  return (
    <BrowserRouter>
      <NavbarHome/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post" element={<Post />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
