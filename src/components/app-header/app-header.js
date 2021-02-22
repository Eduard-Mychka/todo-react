import React from 'react';

import './app-header.css';

const AppHeader = ({toDo, done}) => {
  return (
    <div className="app-header d-flex shadow-lg p-3 mb-1 rounded">
      <h1><i className="fab fa-react"></i> Todo List</h1>
      <h2>{toDo} more to do, {done} done</h2>
    </div>
  );
};

export default AppHeader;
