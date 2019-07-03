import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app';
import template from './template';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

const server = express();

const store = configureStore();

server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
  const isMobile = true;
  const initialState = {device: { isMobile }};
  const appString = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
    );

  res.send(template({
    body: appString,
    title: 'Hello World from the server',
    initialState: JSON.stringify(initialState)
  }));
});

server.listen(8080);
console.log('listening');
