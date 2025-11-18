import Blogpost from './components/blog/IndividualPostPage';
import BlogPostsPage from './components/blog/BlogPostsPage';
import ContactPage from './components/common/ContactPage';
import './style.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Comments from './components/blog/Comments';
import { ThemeProvider } from './components/common/ThemeContext'
import { BrowserRouter, Routes, Route } from 'react-router';
import { AuthProvider } from './components/login/Auth';
import HomePage from './components/blog/Home';
import LoginRoutes from './components/login/LoginRoutes';
import Login from './components/login/Login';

function App() {
    return (
        
    <ThemeProvider>
        <AuthProvider>
        <BrowserRouter>
        <div class='app'>
        <Header />
        <div class='content'>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/posts/:id' element={<Blogpost/>} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/comments' element={<Comments />} />
                <Route path='/login' element={<Login />} />
                <Route path='/posts' element={<LoginRoutes><BlogPostsPage /></LoginRoutes>} />
            </Routes>
        </div>
        <Footer />
        </div>
        </BrowserRouter>
        </AuthProvider>
    </ThemeProvider>
    );
}

export default App;

//Which I prefer? I like the system toggle for dark and light. The reason is I like the look of the rest of my computer icons being darker not just my browser. 