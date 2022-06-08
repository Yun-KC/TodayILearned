import React from 'react';
import ReactDOM from 'react-dom/client';

import Board from './react-dnd/Board';
import { observe } from './react-dnd/game';
const root = ReactDOM.createRoot(document.getElementById('root'));
observe((knightPosition) => {
  root.render(<Board knightPosition={knightPosition} />);
});
