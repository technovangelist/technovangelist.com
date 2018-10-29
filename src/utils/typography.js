import Typography from 'typography'
import gray from 'gray-percentage'
import Wordpress2016 from 'typography-theme-wordpress-2016'
import Stardust from 'typography-theme-stardust'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

const typography = new Typography({
  baseFontSize: '18',
  baseLineHeight: 1.666, 
  googleFonts: [
    {
      name: 'Oxygen',
      styles: ['300'], 
    }, 
    {
      name: 'Noto Serif',
      styles: ['400', '700'], 
    }, 
  ], 
  scaleRatio: 2.85, 
  headerFontFamily: ['Oxygen', 'sans-serif'],
  bodyFontFamily: ['Noto Serif', 'serif'], 
  headerGray: 20,
  bodyGray: 0,
  headerWeight: 300,
  bodyWeight: 400,
  boldWeight: 700, 
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    a: {
      color: '#d65947',
    },
    'a:hover,a:active': {
      color: options.bodyColor
    },
    'h1, h2, h3, h4, h5, h6': {
      marginTop: rhythm(2)
    }, 
    blockquote: {
      ...scale(1 / 5),
      color: gray(41),
      paddingLeft: rhythm(13 / 16),
      marginLeft: 0,
      borderLeft: `${rhythm(3 / 16)} solid #fca206`,
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    'blockquote cite:before': {
      content: '"— "',
    },
    [MOBILE_MEDIA_QUERY]: {
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16),
      },
    },
  })
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
