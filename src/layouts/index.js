import React, { Component } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import Cart from "../components/Cart"
import Header from "../components/Header"
import Footer from "../components/Footer"
import scrollReveal from "../scrollreveal"
import parallax from "../parallax"
import "../stylesheets/style.scss"

class TemplateWrapper extends Component {
  componentDidMount () {
    parallax()
    scrollReveal()
  }

  componentDidUpdate () {
    parallax()
    scrollReveal()
  }

  render () {
    const { children } = this.props

    return (
      <div>
        <Helmet
          title="FP"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        />
        <Cart />
        <Header />
        <div>{children()}</div>
        <Footer />
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
