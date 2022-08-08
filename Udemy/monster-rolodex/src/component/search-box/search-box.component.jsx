import { Component } from 'react';
import "./search-box.style.css"

// use function component
const SearchBox = ({ className , placeholder , onChangeHandler }) =>(
    <input
      className={`search-box ${className}`}
      type='search'
      placeholder={placeholder}
      // use onChange for make search function
      onChange = {onChangeHandler}
    />
);

// use class component
// class SearchBox extends Component {
//     render(){
//         return(
//             <input
//             className={`search-box ${this.props.className}`}
//             type='search'
//             placeholder={this.props.placeholder}
//             // use onChange for make search function
//             onChange = {this.props.onChangeHandler}
//           />
//         )
//     }
// }

export default SearchBox;