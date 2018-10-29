import React from 'react'
import Helmet from 'react-helmet'
import { Link,graphql } from 'gatsby'
import get from 'lodash/get'

import Bio from '../components/Bio'
import Layout from '../components/layout'
import { rhythm, scale } from '../utils/typography'
import {DateTime} from 'luxon'
import About from '../components/about'
import SpeakerDeck from '../components/speakerdeck'

class ConfTalkTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext
    const talkdate = DateTime.fromISO(post.frontmatter.date);
    let talkdatephrase = "Talk delivered on ";
    let speakerdeckcode = "";
    if (talkdate > new Date()) {
      talkdatephrase = "Talk to be delivered on ";
    }
    const about = <About style={{...scale(1/5)}} />
    if (post.frontmatter.speakerdeckid) {
      speakerdeckcode = <SpeakerDeck speakerdeckid={post.frontmatter.speakerdeckid}/>
    }
    
    return <Layout location={this.props.location}>
        <Helmet htmlAttributes={{ lang: 'en' }} meta={[{ name: 'description', content: siteDescription }]} title={`${post.frontmatter.title} | ${siteTitle}`} />
 
        <h1>{post.frontmatter.title}</h1>
        <h3>
          <a href={post.frontmatter.conferenceurl}>
            {post.frontmatter.conference}
          </a>
        </h3>
        <p style={{ ...scale(-1 / 5), display: 'block', marginBottom: rhythm(1), marginTop: rhythm(1) }}>
          {talkdatephrase}
          {post.frontmatter.formatted}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />

          {speakerdeckcode}

           {/* width="710" height="399" style="border:0; padding:0; margin:0; background:transparent;" frameborder="0" allowtransparency="true" allowfullscreen="allowfullscreen" mozallowfullscreen="true" webkitallowfullscreen="true" */}

        <h4>About Matt</h4>
        <div style={{...scale(-1/4)}}>
        {about}
        </div>
        <hr style={{ marginBottom: rhythm(1) }} />

        <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', listStyle: 'none', padding: 0, marginLeft: 0 }}>
          {previous && <li>
              <Link to={previous.fields.slug} rel="prev">
            ← {previous.frontmatter.title} <br />at {previous.frontmatter.conference}
              </Link>
            </li>}

          {next && <li>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} <br/>at {next.frontmatter.conference} →
              </Link>
            </li>}
        </ul>
      </Layout>
  }
}

export default ConfTalkTemplate

export const pageQuery = graphql`
  query ConfTalkBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(
      fields: { slug: { eq: $slug } } ) {
      id
      html
      frontmatter {
        title
        date
        conference
        conferenceurl
        location
        url
        tags
        formatted: date(formatString: "MM/DD/YY")
        speakerdeckid
      }
    }
  }
  `
