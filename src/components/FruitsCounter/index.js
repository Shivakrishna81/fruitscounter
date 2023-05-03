// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onEatMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onEatBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="container">
        <div className="container2">
          <h1>
            Bob ate <span>{mango}</span> mangoes<span>{banana}</span> bananas
          </h1>
          <div className="below-container">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mango"
              />
              <button>Eat Mango</button>
            </div>
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
              />
              <button>Eat Mango</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
