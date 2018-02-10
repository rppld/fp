import React from "react"
import PropTypes from "prop-types"
import ProductCard from "../components/ProductCard"

const RelatedProducts = ({ data }) => (
  <div className="related bg-black-10 w-100">
    <ul className="list cf">
      {data.map(({ node }) => (
        <li
          key={node.id}
          className="w-100 w-50-ns w-third-l fl-ns relative grid-item"
          data-scroll
        >
          <ProductCard
            size={1}
            title={node.title}
            price={node.price}
            image={node.image.childImageSharp}
          />
        </li>
      ))}
    </ul>
  </div>
)

RelatedProducts.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default RelatedProducts
