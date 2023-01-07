// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';
// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
  
// // );

// // ReactDOM.render(<h1>Helloo world</h1>,document.getElementById("root"));
// ReactDOM.render(<App/>,document.getElementById("root"));


import { createRoot } from 'react-dom/client';
import App from "./components/App";
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);





