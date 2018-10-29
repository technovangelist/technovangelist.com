import React from 'react'

import profilePic from './mattaloha.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return <div style={{ display: 'flex', marginBottom: rhythm(2.5) }}>
          <h2>Find the technovangelist online:</h2><br/>
          <a href="https://twitter.com/technovangelist">Twitter</a>
          <br /> <a href="https://instagram.com/technovangelist">
            Instagram
          </a>
      </div>
  }
}

export default Bio
