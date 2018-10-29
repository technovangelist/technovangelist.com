import React from 'react'

import profilePic from './mattaloha.jpg'
import { rhythm } from '../utils/typography'
import Bio from '../components/Bio'
class Footer extends React.Component {
  render() {
    return <div>
        <h2 style={{ marginBottom: rhythm(1 / 4) }}>Find Matt online:</h2>
        <br />

        <a style={{ fontFamily: 'Oxygen', fontWeight: 700, textDecoration: 'none', boxShadow: 'none' }} href="https://twitter.com/technovangelist">
          Twitter
        </a>

        <br />

        <a style={{ fontFamily: 'Oxygen', fontWeight: 700, textDecoration: 'none', boxShadow: 'none' }} href="https://instagram.com/technovangelist">
          Instagram
        </a>

        <br />

        <a style={{ fontFamily: 'Oxygen', fontWeight: 700, textDecoration: 'none', boxShadow: 'none' }} href="https://youtube.com/technovangelist">
          YouTube
        </a>
      </div>
  }
}

export default Footer
