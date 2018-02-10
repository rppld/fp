import React from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import Cover from "../components/Cover"
import Logo from "../components/Logo"

const getBlock = block => {
  const blocks = {
    image: () => {
      return (
        <Image className="v-mid w-100 sibling" sizes={block.image.childImageSharp.sizes} alt={block.title} />
      )
    },
    link: () => {
      return (
        <Link to="/collection/" className="db ba bw4 b--black tc pa5 bg-white">
          <p className="f1 black b lh-title">{block.title}</p>
        </Link>
      )
    },
    newsletter: () => {
      return (
        <div className="db pa5 bg-near-white tc">
          <h2 className="f2 f1-xl b lh-title mb4">{block.title}</h2>
          <form action="" className="cf mb4 br3 overflow-hidden">
            <input
              className="bn pv3 ph3 bg-white w-75 fl"
              type="email"
              placeholder="mail@example.com"
            />
            <button className="br0 bn pa3 bg-dark-green b pointer white w-25 fl">
              Go
            </button>
          </form>
          <p className="silver">
            <small className="f6">We won't ever spam you ✌️</small>
          </p>
        </div>
      )
    }
  }
  return blocks[block.type]()
}

const IndexPage = ({ data }) => (
  <div>
    <Cover />
    <Logo />

    <main className="relative z-1">
      <ul className="list cf m0">
        {data.allHomepageJson.edges.map(({ node }) => (
          <li
            key={node.id}
            data-scroll
            className="fl w-third-ns"
            data-parallax
            data-depth={node.depth}
          >
            {getBlock(node)}
          </li>
        ))}
      </ul>
    </main>
  </div>
)

IndexPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allHomepageJson {
      edges {
        node {
          id
          type
          depth
          title
          image {
            childImageSharp {
              sizes(maxWidth: 1080, quality: 90) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
`
