// import { Component } from "react";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    //only calls when there is a change in state(ie the second attribute)
    fetch("https://jsonplaceholder.typicode.com/users") //fetchh return a promise so u can stack .then on it
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);

  },[monsters,searchField]);

  return (
    //whenever u return every html should under one parent component like div
    <div className="App">
      <h1 className="app-title">Monsters Rolodexw</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};
// class App extends Component {
//   constructor() {
//     //this is run first when running this react code
//     super();

//     this.state = {
//       //initialisation
//       monsters: [],
//       searchField: "",
//     };
//   }
//   componentDidMount() {
//     //after render() this is run
//     fetch("https://jsonplaceholder.typicode.com/users") //fetchh return a promise so u can stack .then on it
//       .then((response) => response.json())
//       .then((users) => {
//         this.setState(() => {
//           return { monsters: users }; // changes the state and rerenders
//         });
//       });
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     //this is run after constructor() // after changin the state(after setState()) this is rerun
//     // console.log("render")
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       //whenever u return every html should under one parent component like div
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodexw</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="search monsters"
//           className="search-box"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
