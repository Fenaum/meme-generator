import logo from "../assets/images/Troll-Face.png"

export default function Navbar() {
  return (
    <nav>
      <div className="logo-title">
        <img className="logo" alt="logo" src={logo}></img>
        <h1 className="title">Meme Generator</h1>
      </div>
      <h3 className="course-title">React course - Project 3</h3>
    </nav>
  );
}
