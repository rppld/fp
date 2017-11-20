import React, { Component } from "react"
import soundFile from "./button-4.m4a"

const sizes = [38, 39, 40, 41, 42, 43, 44, 45]

class SizePicker extends Component {
  constructor (props) {
    super(props)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  handleMouseEnter () {
    this.audioEl.play()
  }

  handleMouseLeave () {
    this.audioEl.pause()
    this.audioEl.currentTime = 0
  }

  render () {
    return (
      <ul className="list available-sizes cf">
        <audio
          ref={audio => {
            this.audioEl = audio
          }}
          src={soundFile}
          preload="metadata"
          type="audio/mp4"
        />

        {sizes.map(size => (
          <li className="fl mr2" key={size}>
            <button
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
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
