import React from "react"
import "./src/css/base.css"
import "./src/css/style.scss"
import Layout from "./src/components/Layout"

export const wrapPageElement = ({ element, props }) => {
  return <Layout> {element}</Layout>
}
