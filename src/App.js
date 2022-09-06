import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Search from './components/Search';
import BlogItemList from './components/BlogItemList';
import Footer from './components/Footer';

function App() {
  return (
    <div>

      <NavBar />

      <Search />

      <BlogItemList />

      <Footer />

    </div>
  );
}

export default App;
