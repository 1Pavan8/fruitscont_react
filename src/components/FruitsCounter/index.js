// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  eatmango = () => {
    this.setState(prevstate => ({mango: prevstate.mango + 1}))
  }

  eatbanana = () => {
    this.setState(prevstate => ({banana: prevstate.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="main">
        <div className="sub">
          <h1>
            Bob ate <span className="yellow">{mango}</span> mangoes
            <span className="yellow"> {banana}</span> bananas
          </h1>
          <div className="piccont">
            <div className="fruitbtncont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <button className="btn" type="button" onClick={this.eatmango}>
                Eat Mango
              </button>
            </div>
            <div className="fruitbtncont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img"
              />
              <button className="btn" type="button" onClick={this.eatbanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
