import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { DateTime } from 'luxon'
import Layout from '../components/layout'
import { rhythm } from '../utils/typography'
import indexStyles from '../styles/homepage.module.css'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    const posts = get(this, 'props.data.posts.edges')
    const firstpost = posts.slice(0, 1);
    const otherposts = posts.slice(1);
    const shortpostlength = 1000;

    
    const talks = get(this, 'props.data.talks.edges')
    // talks.map(({ node }) => {
    //   const talktime = DateTime.fromISO(node.frontmatter.date)
    // })

    const futuretalks = talks.filter(({ node }) => {
      const talktime = DateTime.fromISO(node.frontmatter.date)
      if (talktime >= today) {
        return node
      }
    })
    
    function comparedates(a, b) {
      const adate = DateTime.fromISO(a.node.frontmatter.date)
      const bdate = DateTime.fromISO(b.node.frontmatter.date)
      if (adate < bdate)
      return -1;
      if (adate>bdate)
      return 1;
      return 0;
    }
    
    futuretalks.sort(comparedates)
    
    const pasttalks = talks.filter(({ node }) => {
      if (DateTime.fromISO(node.frontmatter.date) < today) return node
    })

    return <Layout location={this.props.location}>
        <Helmet htmlAttributes={{ lang: 'en' }} meta={[{ name: 'description', content: siteDescription }]} title={siteTitle} />


        {firstpost.map(({ node }) => {
          let blogpost = get(node, 'html')
          if (blogpost.length>shortpostlength) {
            const stopchar = blogpost.indexOf('</p>', shortpostlength) 
            blogpost = blogpost.substring(0, stopchar + 4)
          }
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return <div key={node.fields.slug}>
              <h2>Latest post on the blog:</h2>
              <div className={indexStyles.latestblog}>
                <h1 className={indexStyles.blogtitle} style={{ marginBottom: rhythm(1 / 4), marginTop: rhythm(1 / 2) }}>
                  <Link to={node.fields.slug}>{title}</Link>
                </h1>
                <small>{node.frontmatter.date}</small>
                <div dangerouslySetInnerHTML={{ __html: blogpost }} style={{ marginBottom: rhythm(1) }} />
                <strong>
                  <Link to={node.fields.slug}>Read more..</Link>
                </strong>
                <br /><br/>
                <h2>Other Posts:</h2>
                {
                  otherposts.map(({node}) => {
                    const title = get(node, 'frontmatter.title') || node.fields.slug
                    const excerpt = get(node, 'excerpt')
                    return <div className={indexStyles.otherposts} key={node.fields.slug}>
                        <h3 className={indexStyles.blogtitle}>
                          {node.frontmatter.shortdate} - <strong>
                            <Link to={node.fields.slug}>
                              {title}
                            </Link>
                          </strong>
                        </h3>
                        {excerpt}
                      </div>
                  })
                }
                <Link to={'/blog'}>Review the rest of the blog</Link>
              </div>
            </div>
        })}

        
        <table>
          <tbody>
          <tr><td colSpan='3'><h2>Upcoming talks:</h2></td></tr>
            {futuretalks.map(({ node }) => {
              let talkhtml = get(node, 'html')
              const title = get(node, 'frontmatter.title') || node.fields.slug
              return <tr key={node.fields.slug}>
                  <td>{node.frontmatter.formatted}</td>
                  <td>
                    <Link to={node.fields.slug}>{title}</Link>
                  </td>
                  <td>{get(node, `frontmatter.conference`)}</td>
                </tr>
            })}

            <tr><td colSpan='3'><h2>Past talks:</h2></td></tr>
          {/* </tbody>
        </table>
        <h2>Past talks:</h2>
        <table>
          <tbody> */}

            {pasttalks.map(({ node }) => {
              let talkhtml = get(node, 'html')
              const title = get(node, 'frontmatter.title') || node.fields.slug
            return <tr key={node.fields.slug}>
              <td>{node.frontmatter.formatted}</td>
              <td>
                <Link to={node.fields.slug}>{title}</Link>
              </td>
              <td>{get(node, `frontmatter.conference`)}</td>
            </tr>
            })}
          </tbody>
        </table>
      </Layout>
  }
}

export default BlogIndex

export const pageQuery = graphql`
         query {
           site {
             siteMetadata {
               title
               description
             }
           }
           posts: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 10, filter: {fileAbsolutePath: {regex: "/(posts)/.*\\.md$/"}}) {
             totalCount
             edges {
               node {
                 
                 excerpt
                 html
                 fields {
                   slug
                 }
                 frontmatter {
                   title
                   date: date(formatString: "DD MMMM, YYYY")
                   shortdate: date(formatString: "MM/DD/YY")
                 }
               }
             }
           }

    talks: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(talks)/.*\\.md$/"}} 	sort: {fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          conference
          date
          formatted: date(formatString: "MM/DD/YY")
        }
        html
      }
    }
  }

         }
       `

// talks: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC },
//   filter: { sourceInstanceName: { eq: "talks" } }
// ) {
//   totalCount
//   edges {
//     node {
//       excerpt
//       html
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//         date(formatString: "DD MMMM, YYYY")
//       }
//     }
//   }
// }
