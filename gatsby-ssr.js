import Aos from "aos"
import React, { useEffect } from "react"
import Provider from "./src/layouts/provider"
import Cursor from "./src/services/Cursor"
import MDXComponents from "./src/helpers/MDXComponents"
import FixedLayout from "./src/layouts/FixedLayout/FixedLayout"

export const wrapRootElement = ({ element }) => {
  return <Provider>{element}</Provider>
}
