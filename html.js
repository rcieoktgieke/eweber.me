import React from 'react'
import Helmet from 'react-helmet'
import {prefixLink} from 'gatsby-helpers'

const BUILD_TIME = new Date().getTime()

class Html extends React.Component {
  render () {
    const head = Helmet.rewind()

    let css
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: require('!raw!./public/styles.css')
          }}
        />
      )
    }

    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {css}
        </head>
        <body>
          <div
            id='react-mount'
            dangerouslySetInnerHTML={{__html: this.props.body}}
          />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    )
  }
}

Html.propTypes = {
  body: React.PropTypes.string
}

export default Html
