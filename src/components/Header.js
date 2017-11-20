import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import { connect } from "react-redux"

const mapStateToProps = ({ showCart }) => {
  return { showCart }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleCart: () => dispatch({ type: "TOGGLE_CART" })
  }
}

const Header = props => (
  <header className="pa3 cf z-2 fixed w-100 bg-white bb b--near-white">
    <nav className="fl-ns">
      <ul className="list cf">
        <li className="fl mr3">
          <Link to="/" className="dim">
            Home
          </Link>
        </li>

        <li className="fl mr3">
          <Link to="/collection/" className="dim">
            Collection
          </Link>
        </li>

        <li className="fl">
          <Link to="/product/" className="dim">
            Product
          </Link>
        </li>
      </ul>
    </nav>

    <nav className="fr-ns">
      <ul className="list cf">
        <li className="fl">
          <span className="dim">Search</span>
        </li>

        <li className="fl ml3">
          <span className="dim">Account</span>
        </li>

        <li className="fl ml3">
          <span className="dim">Help</span>
        </li>

        <li className="fl ml3">
          <button
            className="dim bg-transparent sans-serif bn pointer"
            onClick={props.toggleCart}
          >
            Bag
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  showCart: PropTypes.bool,
  toggleCart: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
