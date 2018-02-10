import React, { Component } from "react"

const sizes = [38, 39, 40, 41, 42, 43, 44, 45]

class SizePicker extends Component {
  render () {
    return (
      <ul className="list available-sizes cf">
        {sizes.map(size => (
          <li className="fl mr2" key={size}>
            <button
              className="f6 outline-0 bg-transparent hover-bg-dark-green hover-white hover-b--dark-green light-silver ba b--light-silver pa1 br2 pointer"
            >
              {size}
            </button>
          </li>
        ))}
      </ul>
    )
  }
}

export default SizePicker
