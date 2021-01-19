import React from 'react'

import profilePic from './mattaloha.jpg'
import { rhythm } from '../utils/typography'

class About extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', marginBottom: rhythm(2.5) }}>
        <p>
          Matt is one of the Evangelists at{' '}
          <a href="https://www.datadoghq.com">Datadog</a> and a former organizer
          of{' '}
          <a href="https://www.devopsdays.org/events/2018-boston/welcome/">
            DevOps Days Boston
          </a>{' '}
          and <a href="https://serverlessdays.io/">Serverless Days Boston</a>.
          He is passionate about the power of monitoring and metrics to make
          large-scale systems stable and manageable. So he tours the country
          speaking and writing about monitoring with Datadog. When he's not on
          the road, he's coding. You can find Matt (technovangelist) on{' '}
          <a href="http://twitter.com/technovangelist">Twitter</a>,{' '}
          <a href="http://tvl.st/i">Instagram</a>, and{' '}
          <a href="http://tvl.st/y">YouTube</a>. <a href="/notes">*</a>
        </p>
      </div>
    )
  }
}

export default About
