// Write your code here
import './index.css'
const Destinationitem = props => {
  const {destinationDetails} = props
  const {id, name, imgUrl} = destinationDetails
  return (
    <li className="item-container">
      <img src={imgUrl} className="image" alt={name} />
      <p className="place">{name}</p>
    </li>
  )
}
export default Destinationitem
