import React from 'react';
import './App.css';

import DisplayColumn from './Display/DisplayColumn.js';
import PlanningColumn from './Planner/PlanningColumn.js';

function App() {
  return (
    <div className="App">
      <PlanningColumn/>
      <DisplayColumn/>
    </div>
  );
}

export default App;
