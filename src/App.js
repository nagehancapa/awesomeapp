import logo from './logo.svg';
import './App.css';
import Title from "./components/Title"

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>I liked javascript and react</p>
      <p>My first react app</p>
      <Title title="Test" description="My desciption"/>
      <Title title="Another test"/>      
    </div>
  );
}

export default App;
