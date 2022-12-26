import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Blog from "./components/Blog/Blog";
import Solutions from "./components/Solutions/Solutions";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Companies from "./components/Companies/Companies";
import Footer from "./components/FooterJs/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <Blog />
      <hr />
      <Portfolio />
      <hr />
      <Solutions />
      <hr />
      <NewsLetter />
      <hr />
      <Companies />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
