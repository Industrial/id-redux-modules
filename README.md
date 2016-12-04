# redux-id-modules
Module composition for [Redux](https://github.com/rackt/redux) that let's you structure your app the way you want.

[![Build Status](https://travis-ci.org/Industrial/redux-id-modules.svg?branch=master)](https://travis-ci.org/Industrial/redux-id-modules)

## Installation
```
npm install --save redux-streams
```

## Usage
### Store
```js
import { createStore, applyMiddleware } from 'redux';
import reduxStreams from 'redux-streams';

// Somewhere
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(reduxStreams)
);
```

### Node Streams
```js
import { Readable } from 'stream';

var stream = new Readable({ objectMode: true });

stream.push({ type: 'thing' });
stream.push({ type: 'thing' });
stream.push({ type: 'thing' });
stream.push({ type: 'thing' });
stream.push({ type: 'thing' });
stream.push(null);

store.dispatch(stream); // or store.dispatch({ type: 'some:thing', payload: stream });
```

### [Highland.js](http://highlandjs.org) Streams
```js
import _ from 'highland';

var stream = _([
  { type: 'thing' },
  { type: 'thing' },
  { type: 'thing' },
  { type: 'thing' },
  { type: 'thing' }
]);

store.dispatch(stream); // or store.dispatch({ type: 'some:thing', payload: stream });
```

### Untested
One idea is for streams to be able to emit streams that emit streams etc that
emit actions. I'm not sure what the correct terminology for this is;
```js
import _ from 'highland';

var stream = _([
  _([
    { type: '0.1' },
    { type: '0.2' },
    { type: '0.3' },
    { type: '0.4' },
    { type: '0.5' }
  ]),
  _([
    { type: '1.1' },
    { type: '1.2' },
    { type: '1.3' },
    { type: '1.4' },
    { type: '1.5' }
  }),
  _([
    _([
      { type: '2.1.1' },
      { type: '2.1.2' },
      { type: '2.1.3' },
      { type: '2.1.4' },
      { type: '2.1.5' }
    ]),
    _([
      { type: '2.2.1' },
      { type: '2.2.2' },
      { type: '2.2.3' },
      { type: '2.2.4' },
      { type: '2.2.5' }
    ]),
  ),
);

store.dispatch(stream); // or store.dispatch({ type: 'some:thing', payload: stream });
```
