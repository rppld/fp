import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import SizePicker from "../components/SizePicker"

const Purchaser = props => (
  <Link to="/product/" className="hide-child dim-sibling cf">
    <div className="child absolute z-1 absolute--fill bg-white-60 flex flex flex-column items-center align-center justify-center pa4 tc">
      {props.size === 3 && (
        <div className="mb3">
          <h3 className="f3 f1-l b lh-title mb1">{props.title}</h3>
          <span className="f3 f1-l">{props.price}&nbsp;€</span>
        </div>
      )}

      {props.size !== 3 && (
        <div className="mb2">
          <h3 className="f3 f2-xl b lh-title mb1">{props.title}</h3>
          <span className="f3 f2-xl">{props.price}&nbsp;€</span>
        </div>
      )}

      <SizePicker />
    </div>

    <img
      className="v-mid w-100 sibling"
      sizes={props.image.sizes}
      srcSet={props.image.srcSet}
      alt={props.title}
      data-scroll
    />
  </Link>
)

Purchaser.propTypes = {
  size: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired
}

export default Purchaser
