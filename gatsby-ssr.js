import React from "react"
import { ServerStyleSheet, StyleSheetManager } from "styled-components"
import { Provider } from "react-redux"
import { renderToString } from "react-dom/server"
import configureStore from "./src/state/configureStore"

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents
}) => {
  const sheet = new ServerStyleSheet()
  const store = configureStore()

  replaceBodyHTMLString(
    renderToString(
      <Provider store={store}>
        <StyleSheetManager sheet={sheet.instance}>
          {bodyComponent}
        </StyleSheetManager>
      </Provider>
    )
  )

  setHeadComponents([sheet.getStyleElement()])
}
