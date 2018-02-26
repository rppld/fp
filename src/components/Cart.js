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
                <ul className="list">
                  {this.props.cartItems.map((item, i) => (
                    <li className="mb3" key={i}>
                      <h3 className="f3 f2-xl b lh-title mb1 white">
                        {item.title}
                      </h3>
                      <span className="f3 f2-xl white">250&nbsp;€</span>
                    </li>
                  ))}
                </ul>

                <div className="fixed bottom-2 bottom-3-xl">
                  <Link
                    to="/collection/"
                    className="bn pa3 ph4 dim bg-white br3 b pointer dark-green dib mr3"
                    onClick={this.props.toggleCartHandler}
                  >
                    Checkout
                  </Link>

                  <span
                    className="bn pa3 ph4 dim bg-white br3 b pointer dark-green dib"
                    style={{ backgroundColor: "#ffc439" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="89"
                      height="20"
                      viewBox="0 0 89 25"
                      className="v-mid"
                    >
                      <g fill="none">
                        <path
                          fill="#253B80"
                          d="M11.21.75H4.373c-.468 0-.866.34-.94.8L.668 19.09c-.055.346.213.658.564.658h3.266c.468 0 .866-.34.94-.803l.745-4.73c.073-.463.472-.803.94-.803h2.164c4.505 0 7.105-2.18 7.784-6.5.306-1.89.013-3.375-.872-4.415C15.224 1.353 13.5.75 11.21.75zM12 7.153c-.374 2.454-2.25 2.454-4.062 2.454H6.906l.724-4.583c.043-.277.283-.48.563-.48h.473c1.235 0 2.4 0 3.002.703.36.42.47 1.044.332 1.906zm19.654-.08H28.38c-.28 0-.52.205-.564.482l-.145.916-.228-.332c-.71-1.03-2.29-1.373-3.868-1.373-3.62 0-6.71 2.74-7.312 6.586-.313 1.918.132 3.752 1.22 5.03.998 1.177 2.426 1.667 4.125 1.667 2.916 0 4.533-1.875 4.533-1.875l-.146.91c-.055.348.213.66.562.66h2.95c.47 0 .865-.34.94-.803l1.77-11.21c.055-.344-.212-.657-.562-.657zM27.09 13.45c-.317 1.87-1.802 3.126-3.696 3.126-.95 0-1.71-.305-2.2-.883-.483-.574-.667-1.39-.513-2.3.296-1.856 1.806-3.153 3.67-3.153.93 0 1.687.31 2.185.892.5.59.697 1.41.554 2.317zm22.006-6.375h-3.29c-.315 0-.61.156-.788.417l-4.54 6.686-1.923-6.425c-.12-.402-.492-.678-.912-.678H34.41c-.394 0-.667.384-.542.754l3.625 10.637-3.408 4.81c-.268.38.002.9.465.9h3.287c.312 0 .604-.15.78-.407l10.947-15.8c.262-.378-.007-.895-.468-.895z"
                        />
                        <path
                          fill="#179BD7"
                          d="M59.992.75h-6.84c-.467 0-.865.34-.938.8L49.448 19.09c-.055.346.213.658.562.658h3.51c.326 0 .605-.238.656-.562l.785-4.97c.073-.464.472-.804.94-.804h2.163c4.506 0 7.105-2.18 7.785-6.5.307-1.89.012-3.375-.873-4.415C64.005 1.353 62.28.75 59.992.75zm.79 6.404c-.374 2.454-2.25 2.454-4.063 2.454h-1.032l.725-4.583c.043-.277.28-.48.562-.48h.473c1.234 0 2.4 0 3.002.703.36.42.468 1.044.33 1.906zm19.652-.08H77.16c-.28 0-.52.205-.56.482l-.146.916-.23-.332c-.71-1.03-2.29-1.373-3.867-1.373-3.62 0-6.71 2.74-7.31 6.586-.313 1.918.13 3.752 1.218 5.03 1 1.177 2.426 1.667 4.125 1.667 2.916 0 4.533-1.875 4.533-1.875l-.146.91c-.055.348.213.66.564.66h2.95c.467 0 .865-.34.938-.803l1.77-11.21c.055-.344-.213-.657-.564-.657zM75.87 13.45c-.315 1.87-1.802 3.126-3.696 3.126-.95 0-1.71-.305-2.2-.883-.483-.574-.665-1.39-.513-2.3.298-1.856 1.806-3.153 3.67-3.153.93 0 1.687.31 2.185.892.5.59.7 1.41.554 2.317zm8.425-12.22l-2.807 17.858c-.055.346.213.658.562.658h2.822c.47 0 .867-.34.94-.803l2.767-17.536c.054-.346-.214-.66-.563-.66h-3.16c-.28.002-.52.206-.562.483z"
                        />
                      </g>
                    </svg>
                  </span>

                  <p className="mt4 f5 f4-xl lh-copy white">
                    Shipping costs will be calculated during checkout.
                  </p>
                </div>
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
