import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { SunShine } from './SunShine';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <Router>
      <SunShine />
    </Router>
);
