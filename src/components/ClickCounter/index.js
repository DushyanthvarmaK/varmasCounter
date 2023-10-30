// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prev => ({count: prev.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1>The Button has been clicked {count} times</h1>
        <p>click the button to increase the count</p>
        <button className="button" onClick={this.onIncrement} type="button">
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
