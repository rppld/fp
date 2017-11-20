const parallax = () => {
  // Check if window is defined, otherwise Gatsby won't compile
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", function (event) {
      let depth, i, layer, layers, len, movement, topDistance, translate3d
      topDistance = this.pageYOffset
      layers = document.querySelectorAll("[data-parallax]")

      for (i = 0, len = layers.length; i < len; i++) {
        layer = layers[i]
        depth = layer.getAttribute("data-depth")
        movement = -(topDistance * depth)
        translate3d = "translate3d(0, " + movement + "px, 0)"
        layer.style.transform = translate3d
      }
    })
  }
}

export default parallax
