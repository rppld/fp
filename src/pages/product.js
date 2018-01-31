import React, { Component } from "react"
import PropTypes from "prop-types"
import Spacer from "../components/Spacer"
import Purchaser from "../components/Purchaser"
import RelatedProducts from "../components/RelatedProducts"
import ImagesLoaded from "react-images-loaded"
import Sticky from "sticky-js"

class ProductPage extends Component {
  handleDone = () => {
    /* eslint-disable no-new */
    new Sticky("[data-sticky]")
    /* eslint-enable */
  }

  render () {
    const data = this.props.data
    const relatedProducts = data.allCollectionJson.edges

    return (
      <div>
        <main className="relative z-1 bg-black-10 cf" data-sticky-container>
          <div className="w-two-thirds-ns fl-ns">
            <Spacer />
            <ImagesLoaded
              elementType={"ul"} // defaults to 'div'
              className={"list ma0 pa0 grid grid-2-columns"} // defaults to 'images-loaded-container'
              done={this.handleDone}
            >
              {data.allProductJson.edges.map(({ node }) => (
                <li
                  key={node.id}
                  className={
                    node.size === 1
                      ? "relative"
                      : "grid-span-2-columns relative"
                  }
                >
                  <img
                    className="v-mid w-100"
                    sizes={node.image.childImageSharp.responsiveSizes.sizes}
                    srcSet={node.image.childImageSharp.responsiveSizes.srcSet}
                    alt={node.title}
                    data-scroll
                  />
                </li>
              ))}
            </ImagesLoaded>
          </div>

          <div
            className="sidebar w-third-ns fl-ns fixed"
            data-sticky
            data-sticky-class="fixed"
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
              responsiveSizes {
                base64
                aspectRatio
                src
                srcSet
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
              responsiveSizes {
                base64
                aspectRatio
                src
                srcSet
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
