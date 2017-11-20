import React, { Component } from "react"
import { Transition } from "react-transition-group"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import anime from "animejs"
import Spacer from "../components/Spacer"
import { connect } from "react-redux"

const mapStateToProps = ({ showCart, cartItems }) => {
  return { showCart, cartItems }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleCart: () => dispatch({ type: "TOGGLE_CART" })
  }
}

const duration = 200

class Cart extends Component {
  handleEnter (el) {
    anime({
      targets: el,
      opacity: [0, 1],
      translateX: [20, 0],
      duration: duration,
      easing: "easeOutCubic"
    })
  }

  handleExit (el) {
    anime({
      targets: el,
      opacity: 0,
      translateX: 20,
      duration: duration,
      easing: "easeOutCubic"
    })
  }

  render () {
    return (
      <Transition
        in={this.props.showCart}
        timeout={duration}
        mountOnEnter={true}
        unmountOnExit={true}
        onEnter={this.handleEnter}
        onExit={this.handleExit}
      >
        <div className="fixed z-max right-0 vh-100 bg-dark-green w-100 w-third-l">
          <header className="pa3 cf absolute w-100 bb b--white-10 tr">
            <button
              className="dim white bg-transparent sans-serif bn pointer"
              onClick={this.props.toggleCart}
            >
              Close
            </button>
          </header>

          <div className="pa4 pa5-xl">
            <Spacer />

            {this.props.cartItems.length ? (
              <div>
                <h1 className="f2 mt0 mb3 b lh-title white">Your Bag</h1>

                <ul className="list">
                  {this.props.cartItems.map((item, i) => (
                    <li className="mb3" key={i}>
                      <span className="f4 f3-xl b lh-copy white">
                        {item.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div>
                <h1 className="f2 mt0 mb3 b lh-title white">
                  Your bag is still empty
                </h1>

                <p className="mb4 f4 f3-xl lh-copy white">
                  Browse our collection and see if there's something you like!
                  If you have questions, you can reach us around the clock via
                  e-mail or phone.
                </p>

                <p className="">
                  <Link
                    to="/collection/"
                    className="bn pa3 ph4 dim bg-white br3 b pointer dark-green dib"
                    onClick={this.props.toggleCartHandler}
                  >
                    Go to Collection
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </Transition>
    )
  }
}

Cart.propTypes = {
  showCart: PropTypes.bool,
  cartItems: PropTypes.arrayOf(PropTypes.object)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
