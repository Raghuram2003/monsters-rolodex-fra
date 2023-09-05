// import { Component } from "react";
import "./card-list.component.styles.css";

const Card = ({ monster}) => {
    const {email,name,id} = monster
  return (
    <div className="card-container" key={id}>
      <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

// class Card extends Component {
//   render() {
//     const { id , name, email } = this.props.monster;
//     const {alt , src } = this.props;
//     return (
//       <div className="card-container" key={id}>
//         <img
//           alt={alt}
//           src={src}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default Card;
