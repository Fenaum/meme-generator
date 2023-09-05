import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Meme from "./components/Meme.jsx"


export default function App() {
  return (
      <div className="container">
        <Navbar />
        <div>
          <Meme />
        </div>
        <Footer />
      </div>
  );
};
