import { Component } from "react";
import "./search-box.styles.css";

const SearchBox = ({ onChangeHandler, placeholder, className }) => {
  
  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};
//imported css applies globally not only on this component
// class SearchBox extends Component {
//   render() {
//     const { onChangeHandler, placeholder, className } = this.props;
//     return (
//       <input
//         className={className}
//         type="search"
//         placeholder={placeholder}
//         onChange={onChangeHandler}
//       />
//     );
//   }
// }

export default SearchBox;
