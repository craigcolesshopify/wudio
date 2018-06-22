/*

Build idea from here:
https://github.com/babel/example-node-server

*/

import Koa from 'koa';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Home from './components/Home';

const app = new Koa();

app.use(async (ctx) => {

  ctx.body = ReactDOMServer.renderToString(<Home />);
});

app.listen(3000, ()=> console.log('server started on port 3000'));
