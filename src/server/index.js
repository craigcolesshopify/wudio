import "babel-polyfill";
import Koa from 'koa';
import helmet from 'koa-helmet';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Html from '../components/Html/Html';
import App from '../components/App/App';


const app = new Koa();

app.use(helmet());

app.use(async (ctx) => {
  const html = ReactDOMServer.renderToString(<Html><App /></Html>);
  ctx.body = `<!DOCTYPE html>${html}`;
});

app.listen(3000, ()=> console.log('server started on port 3000'));
