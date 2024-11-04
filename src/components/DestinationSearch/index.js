// Write your code here
import './index.css'
import Destinationitem from '../DestinationItem'
import {Component} from 'react'
class DestinationSearch extends Component {
  state = {
    searchinput: '',
  }
  onChangeInput = event => {
    this.setState({searchinput: event.target.value.toLowerCase()})
  }
  render() {
    const {destinationsList} = this.props
    const {searchinput} = this.state
    const searchResults = destinationsList.filter(eachitem =>
      eachitem.name.toLowerCase().includes(searchinput),
    )
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <input type="search" onChange={this.onChangeInput} />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
        />
        <ul className="items-container">
          {searchResults.map(eachitem => (
            <Destinationitem destinationDetails={eachitem} key={eachitem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
