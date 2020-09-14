import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1> Welcome to our site<br /> Book cab and have fun</h1>
        <p>We offer you a seicure service that you cant get anywhere  in bournemouth.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">click here to login</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
