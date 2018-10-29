import React from 'react'
import { Link } from 'gatsby'
import About from './about'
import Header from './header'
import Footer from './footer'


import { rhythm, scale } from '../utils/typography'


class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header, footer, about, nav

    if (location.pathname === rootPath) {
      header = <h1 style={{ ...scale(1.2), marginBottom: rhythm(1.5), marginTop: 0 }}>
          <Link style={{ boxShadow: 'none', textDecoration: 'none', color: 'inherit' }} to={'/'}>
            matt williams is a technovangelist
          </Link>
        </h1>
      
      about = <About />
    } else {
      header = <Header/>
    }
    footer = <Footer />
    return (
      
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(30),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
      
        {header}
        {about}
        {children}
        {footer}
      </div>
    )
  }
}

export default Template
