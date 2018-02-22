import React, { Component } from "react"
import PropTypes from "prop-types"
import Image from "../components/Image"
import Spacer from "../components/Spacer"
import Purchaser from "../components/Purchaser"
import RelatedProducts from "../components/RelatedProducts"
import { getSizesString } from "../helpers"

class ProductPage extends Component {
  render () {
    const data = this.props.data
    const relatedProducts = data.allCollectionJson.edges

    return (
      <div>
        <main className="relative z-1 bg-black-10 cf" data-sticky-container>
          <div className="w-two-thirds-ns fl-ns">
            <Spacer />
            <ul className="list ma0 pa0 grid grid-2-columns">
              {data.allProductJson.edges.map(({ node }) => (
                <li
                  key={node.id}
                  data-size={node.size}
                  className={
                    node.size === 1
                      ? "relative"
                      : "grid-span-2-columns relative"
                  }
                  data-scroll
                >
                  <Image className="v-mid w-100" sizes={node.image.childImageSharp.sizes} sizesString={getSizesString(node.size)} alt={node.title} />
                </li>
              ))}
            </ul>
          </div>

          <div
            className="sidebar w-third-ns fl-ns fixed sticky"
          >
            <Purchaser lineItem={{ id: 5, title: "Low Top Ghost White" }} />
          </div>
        </main>

        <RelatedProducts data={relatedProducts} />
      </div>
    )
  }
}

ProductPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired
}

export default ProductPage

export const query = graphql`
  query ProductQuery {
    allProductJson {
      edges {
        node {
          id
          title
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
    allCollectionJson(limit: 3) {
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
