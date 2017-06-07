import React from 'react'
import { prefixLink } from 'gatsby-helpers'

const BUILD_TIME = new Date().getTime()

class Html extends React.Component {
  render () {
    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        </head>
        <body>
          <div
            id='react-mount'
            dangerouslySetInnerHTML={{ __html: this.props.body }}
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
