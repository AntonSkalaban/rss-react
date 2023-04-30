import React from 'react';
import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { Location } from 'react-router-dom';

export function render(
  url: string | Partial<Location>,
  opts: RenderToPipeableStreamOptions | undefined
) {
  const stream = renderToPipeableStream(
    // <StaticRouter location={url}>
    <App />,
    // {/* </StaticRouter>, */}
    opts
  );
  return stream;
}
