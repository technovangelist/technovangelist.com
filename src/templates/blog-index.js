import React, { Component } from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import Footer from '../components/footer'
import { rhythm, scale } from '../utils/typography'

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

const IndexPage = ({ data, pageContext }) => {
  const { group, index, first, last, pageCount, other } = pageContext
  const previousUrl = index - 1 == 1 ? '' : '/blog/' + (index - 1).toString()
  const nextUrl = '/blog/'+(index + 1).toString()
  const footer = <Footer/>
  const header = <Header/>

  return <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: rhythm(30), padding: `${rhythm(1.5)} ${rhythm(3 / 4)}` }}>
      {header}

      <span />
      <h1>blog</h1>
      {first}
      <h4>{pageCount} pages of posts</h4>

      {group.map(({ node }) => <div key={node.id} className="blogListing">
      <div className="date" style={{ ...scale(-.3), marginTop: rhythm(1), marginBottom: rhythm(-1/4) }}>
            {node.frontmatter.date}
          </div>
          <Link className="blogUrl" to={node.fields.slug}>
            {node.frontmatter.title}
          </Link>
          <div style={{...scale(-.1)}}>{node.excerpt}</div>
        </div>)}
      <div className="navLinks" style={{marginTop: rhythm(1), paddingBottom: rhythm(1)}}>
      <span className="previousLink" style={{display: 'block',  float: 'left'}}>
        <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
      </span>
      <span className="nextLink" style={{ display: 'block', float: 'right' }}>
        <NavLink test={last} url={nextUrl} text="Go to Next Page" />
      </span>

      </div>
      {footer}
    </div>
}
export default IndexPage
