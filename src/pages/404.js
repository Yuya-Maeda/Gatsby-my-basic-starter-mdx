import React from "react"
import { Link } from "gatsby"
const NotFoundPage = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <h2>お探しのページは見つかりません</h2>
      <Link to="/">ホームにもどる</Link>
    </div>
  )
}

export default NotFoundPage
