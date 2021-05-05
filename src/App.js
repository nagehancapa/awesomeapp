import "./App.css";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";

const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
  },
];

function App() {
  return (
    <div className="App">
      <main className="container my-5">
        <Title title="Some example title" />
        <div className="row">
          {all_pokemon.map((pokemon, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <Pokemon
                name={pokemon.name}
                weight={pokemon.weight}
                awesome={pokemon.awesome}
                terrifying={pokemon.terrifying}
                abilities={pokemon.abilities}
              />
            </div>
          ))}
        </div>
      </main>
      <h1>Hello World!</h1>
      <p>I liked javascript and react</p>
      <p>My first react app</p>
      <Title title="Test" description="My desciption" />
      <Title title="Another test" />
      <a
        className="App-link"
        href="https://hungry-dubinsky-d541b2.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Welcome to my first website
      </a>
    </div>
  );
}

export default App;
