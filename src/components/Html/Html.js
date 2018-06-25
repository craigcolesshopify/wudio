import React from 'react';
import PropTypes from 'prop-types';

function Html(props) {
  const {lang, title, description} = props;
  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </head>
      <body>
        <div id="app">
          {props.children}
        </div>
      </body>
    </html>
  )
}

Html.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}

Html.defaultProps = {
  lang:"EN",
  title:"Synthetic Audio",
  description: "Lorem Ipsum dolor sit amet"

}

export default Html;