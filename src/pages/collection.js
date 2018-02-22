import React from "react"
import PropTypes from "prop-types"
import Spacer from "../components/Spacer"
import ProductCard from "../components/ProductCard"

const CollectionPage = ({ data }) => (
  <main className="relative z-1 cf bg-black-10">
    <Spacer />

    <ul className="list ma0 pa0 grid-ns grid-2-columns-ns grid-3-columns-l">
      {data.allCollectionJson.edges.map(({ node }) => (
        <li
          key={node.id}
          className={
            node.size === 1
              ? "relative"
              : node.size === 2
                ? "grid-span-2-rows relative"
                : "grid-span-2-rows grid-span-2-columns relative"
          }
          data-scroll
        >
          <ProductCard
            size={node.size}
            title={node.title}
            price={node.price}
            image={node.image.childImageSharp}
          />
        </li>
      ))}
    </ul>
  </main>
)

CollectionPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired
}

export default CollectionPage

export const query = graphql`
  query CollectionQuery {
    allCollectionJson {
      edges {
        node {
          id
          title
          price
          image {
            childImageSharp {
              sizes(quality: 90) {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                originalImg
                originalName
              }
            }
          }
          size
        }
      }
    }
  }
`
