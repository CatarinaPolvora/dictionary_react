
import './App.css';
import background from "./books.jpg";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})`, height: '100%'}} >
     <div className="container"> 
     <header className="App-header">
       <Dictionary/>
      </header>
    </div>
    </div>
  );
}


