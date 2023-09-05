// import { Component } from "react";
import Card from "./card.component";
import './card-list.component.styles.css'
const CardList = ({ monsters }) => {
  return(
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>);
};

// class CardList extends Component {
//   render() {
//     //this is rendered twice once for empty state of monsters and once after setState for filteredMonsters
//     // it is re rendered for setState , componentDidMount and props change
//     const { monsters } = this.props;
//     console.log("comp");
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           const { name, id } = monster;
//           return (
//             <Card
//               src={`https://robohash.org/${id}?set=set2&size=180x180`}
//               alt={`monster ${name}`}
//               monster={monster}
//               id={id}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
