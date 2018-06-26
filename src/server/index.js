
import "babel-polyfill";
import serve from 'koa-static';
import Koa from 'koa';
import helmet from 'koa-helmet';
import mount from 'koa-mount';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Html from '../components/Html/Html';
import App from '../components/App/App';



const app = new Koa();
app.use(helmet());


app.use(mount('/assets/javascript', serve(__dirname + '/../public/assets/javascript')));

app.use(async (ctx) => {
  const html = ReactDOMServer.renderToString(<Html><App /></Html>);
  ctx.body = `<!DOCTYPE html>${html}`;
});



app.listen(3000, ()=> console.log('server started on port 3000'));
