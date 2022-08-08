import { Component } from 'react'
import './card.style.css'

// use function component 
const Card = ({monster : {name , username , id }}) => {
    // const { name , username , id } = monster

    return(
        <div className="card-container" key={id}>
            <img
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
                alt={name}
            />
            <h2>{name}</h2>
            <h3 className = "userName">{username}</h3>
        </div>
    )
}

// use class component 
// class Card extends Component {
//     render() {

//         const { name , username , id } = this.props.monster

//         return(
//             <div className="card-container" key={id}>
//                 <img
//                     src={`https://robohash.org/${id}?set=set2&size=180x180`}
//                     alt={name}
//                 />
//                 <h2>{name}</h2>
//                 <h3 className = "userName">{username}</h3>
//             </div>
//         )
//     }
// }

export default Card