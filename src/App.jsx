import Blogpost from './components/blog/IndividualPostPage';
import BlogPostsPage from './components/blog/BlogPostsPage';
import ContactPage from './components/common/ContactPage';
import './style.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Comments from './components/blog/Comments';
import { ThemeProvider } from './components/common/ThemeContext'
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
    return (
    <ThemeProvider>
        <BrowserRouter>
        <div class='app'>
        <Header />
        <div class='content'>
            <Routes>
                <Route path='/' element={<BlogPostsPage />} />
                <Route path='/posts/:id' element={<Blogpost/>} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/comments' element={<Comments />} />
            </Routes>
        </div>
        <Footer />
        </div>
        </BrowserRouter>
    </ThemeProvider>
    );
}

export default App;

//Which I prefer? I like the system toggle for dark and light. The reason is I like the look of the rest of my computer icons being darker not just my browser. 