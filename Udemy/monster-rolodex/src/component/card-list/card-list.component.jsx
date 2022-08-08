import { Component } from 'react';
import Card from '../card/card.component'
import "./card-list.style.css"

// use function component
const CardList = ({monsters}) => (
    <div className="card-list">
        {monsters.map((monster) => {
            return <Card monster={monster} />
        })}
    </div>
)


// use class component
// class CardList extends Component {
//     render(){
//         const { monsters }= this.props;
//           /* get state ,mapping and add ID */
//           /* use key to make a data uniq */ 
//         return(
//             <div className="card-list">
//                 {monsters.map((monster) => {
//                     return(
//                         <Card monster={monster}/>
//                     )
//                 })}
//             </div>
//         );
//     }
// }

export default CardList;