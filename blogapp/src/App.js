import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Post from './pages/Post';
import About from './pages/About';
import Contact from './pages/Contact';
import NavbarHome from './component/NavbarHome';
import Footer from './Footer';
import emailjs from '@emailjs/browser';

import PostDetail from './pages/PostDetail';
emailjs.init('Kvvg10sNrLGAXqe-A');
function App() {
  return (
    <BrowserRouter>
      <NavbarHome/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<PostDetail />} />
        <Route path="/post" element={<Post />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
