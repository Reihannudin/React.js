import "./App.css";
// Component,
import React, { Component , useState, useEffect } from "react";
import CardList from "./component/card-list/card-list.component"
import SearchBox from "./component/search-box/search-box.component"


// use defaultFunction Component
const App = () =>{

  const [searchFields , setSearchFields] = useState('')
  const [ monsters, setMonster ] = useState([])
  const [title , setTitle] = useState('Monster Rolodex')
  const [filteredMonsters , setFilteredMonsters] = useState(monsters)
  
  useEffect(() =>{
      // get data from API
      fetch("https://jsonplaceholder.typicode.com/users")
      //     // make respionse to jsonn
            .then((response) => response.json())
            .then((monster => setMonster(monster)));      
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchFields) || monster.username.toLocaleLowerCase().includes(searchFields)
    });

    setFilteredMonsters(newFilteredMonsters)
  } , [monsters , searchFields])

  // console.log(searchFields);

  const onSearchChange = (event) => {
    const searchFieldsString = event.target.value.toLocaleLowerCase();
    setSearchFields(searchFieldsString)
  }

  const onTitleChange = (event) => {
    const searchFieldsString = event.target.value;
    setTitle(searchFieldsString)
  }

  return(
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox 
        className="search-box"
        onChangeHandler={onTitleChange}
        placeholder="Set title"
      />

      <br/>

      <SearchBox 
        className="search-box"
        onChangeHandler={onSearchChange}
        placeholder="Search Monster"
      />
      <CardList monsters = {filteredMonsters}/>
    </div>
  )
}


// Class Component
// class App extends Component {
//   // constructor
//   constructor() {
//     super();

//     // console.log("Constructor")

//     // define state
//     this.state = {
//       // make a empty array 
//       monster: [],
//       // make a searchFields object to define empty string
//       searchFields : ""

//     /* make array data
//       monster: [
//         {
//           id : "572547",
//           username : "kar_el3"
//         },
//         {
//           id: "527457",
//           username : "reihannudin"
//         }
//         {
//           id: "527467",
//           username : "el_thewise"
//         }
//       ]
//     */
      
//     };
//   }

//   //  component 
//   componentDidMount() {
//     // console.log("Component")

//     // get data from API
//     fetch("https://jsonplaceholder.typicode.com/users")
//     // make respionse to jsonn
//       .then((response) => response.json())
//       // define data from response
//       .then((monsters) =>
//         this.setState(
//           () => {
//             return { monster: monsters };
//           },
//           // () => {
//           //   console.log(this.state);
//           // }
//         )
//       )
//       //  catch if there some error
//       // .catch(console.log("Cannot get Data (>_<)"))
//   }

//   onSearchChange = (event) => {
//     // make all text to lowercase
//     const searchFields = event.target.value.toLocaleLowerCase();
//     // save to  state and retrurning what you filtered
//     this.setState(() => {
//       return { searchFields }
//     });
//   }

//   // rendering 
//   render(){
//           // console.log("Render");
//       // return render file html

//       // optimization
//       const { monster , searchFields } = this.state;
//       const { onSearchChange } = this;

//       //  set in outside : filetered data use filter function and add includes seacrhFields
//       const filteredMonsters = monster.filter((monster) => {
//         return monster.name.toLocaleLowerCase().includes(searchFields) || monster.username.toLocaleLowerCase().includes(searchFields)});

//       return (
//         <div className="App">
//         {/* make search input */}
//           <h1 classsName ="app-title">Monster Rodolex</h1>

//           <SearchBox 
//             className="search-box"
//             placeholder="Search monsters"
//             onChangeHandler={onSearchChange}
//           />       
//           <CardList monsters = {filteredMonsters}/>
//         </div>
//       );
//     }
// }


export default App;

