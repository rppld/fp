export const getSizesString = size => {
  switch (size) {
    case 3:
      return "(min-width: 60em) 67vw, 100vw"
    case 2:
    case 1:
    default:
      return "(min-width: 60em) 34vw, 100vw"
  }
}
