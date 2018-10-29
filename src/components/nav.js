import React from 'react'

import profilePic from './mattaloha.jpg'
import { rhythm } from '../utils/typography'
import Bio from './Bio'
class Footer extends React.Component {
  render() {
    return <div>
        <h2>Find Matt online:</h2>
        <br />
        <div>
          <h4>
            <a href="https://twitter.com/technovangelist">Twitter</a>
          </h4>
          <br />
          <h4>
            <a href="https://instagram.com/technovangelist">Instagram</a>
          </h4>
        </div>
      </div>
  }
}

export default Footer
