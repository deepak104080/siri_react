import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Root from './theme/Root';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// ReactDOM.render(<Root/>, document.getElementById('root'));


// ./ - same location
// ../ - one folder back
// <folder name>/ - one folder ahead