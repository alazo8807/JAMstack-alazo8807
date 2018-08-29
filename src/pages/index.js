import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people, my name is Alejandro from Canada</h1>
    <br />
    <p>
      I'm a passionate software developer always trying to learn something new!
    </p>
    <p>
      I have never been to a Hackathon before but super excited and crossing
      fingers to be part of 2018 FCC JAMstack!
    </p>

    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
