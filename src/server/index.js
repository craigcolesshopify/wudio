
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
import { StaticRouter } from 'react-router'



const app = new Koa();


app.use(helmet());


//def need this to render
app.use(mount('/assets/javascript', serve(__dirname + '/../public/assets/javascript')));

app.use(async (ctx) => {
  const context = {};
  const html = ReactDOMServer.renderToString(
    <Html>
      <StaticRouter location={ctx.req.url} context={context}>
        <App />
      </StaticRouter>  
    </Html>
  );
  ctx.body = `<!DOCTYPE html>${html}`;
});


app.listen(3000, ()=> console.log('server started on port 3000'));
