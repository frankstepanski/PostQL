import React, { FC } from 'react';
import { Playground, store } from 'graphql-playground-react';
import { Provider } from 'react-redux';

const playgroundSettings = {
  'editor.cursorShape': 'line',
  'editor.fontFamily': "'Source Code Pro', 'Consolas', 'Inconsolata', 'Droid Sans Mono', 'Monaco', monospace",
  'editor.fontSize': 14,
  'editor.reuseHeaders': true,
  'editor.theme': 'dark',
  'general.betaUpdates': false,
  'prettier.printWidth': 80,
  'prettier.tabWidth': 2,
  'prettier.useTabs': true,
  'request.credentials': 'same-origin',
  'schema.polling.enable': true,
  'schema.polling.endpointFilter': '*localhost*',
  'schema.polling.interval': 2000,
  'schema.disableComments': false,
  'tracing.hideTracingResponse': true,
  'tracing.tracingSupported': true,
};

// const EditorColours = {
//   property: 'purple',
//   comment: 'green',
//   punctuation: 'red',
//   keyword: 'blue',
//   def: 'orange',
//   number: 'purple',
//   string: 'blue',
//   variable: 'white',
//   editorBackground: 'grey',
//   resultBackground: 'lightgrey'
// }

const PlaygroundDisplay: FC = () => (
  <Provider store={store}>

    <img className="logo" src="/image/title.png" />

    <Playground
      endpoint="https://rickandmortyapi.com/graphql"
      subscriptionEndpoint="https://rickandmortyapi.com/graphql"
        // config=""
        // schema=""
      settings={playgroundSettings}
    />
  </Provider>
);
export default PlaygroundDisplay;
