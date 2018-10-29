import React from 'react'

import profilePic from './mattaloha.jpg'
import { rhythm } from '../utils/typography'
import Bio from '../components/Bio'
import { Link } from 'gatsby'

class Header extends React.Component {
  render() {
    return <h3 style={{ marginTop: 0, marginBottom: rhythm(0.5) }}>
      <Link style={{ boxShadow: 'none', textDecoration: 'none', color: 'inherit' }} to={'/'}>
        technovangelist
          </Link>
    </h3>
  }
}

export default Header
