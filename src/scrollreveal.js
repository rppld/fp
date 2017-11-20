import ScrollTrigger from "scrolltrigger-classes"

const scrollReveal = () => {
  // Check if document is defined, otherwise Gatsby won't compile
  if (typeof document !== "undefined") {
    /* eslint-disable no-new */
    new ScrollTrigger({
      once: true
    })
  }
}

export default scrollReveal
