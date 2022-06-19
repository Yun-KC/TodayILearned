import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';

import Board from './react-dnd/chessboard/Board';
import { observe } from './react-dnd/chessboard/game';
const root = ReactDOM.createRoot(document.getElementById('root'));
observe((knightPosition) => {
  root.render(<Board knightPosition={knightPosition} />);
});

// root.render(<App></App>);
