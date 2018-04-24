import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from './components/App';

import './assets/styles/style.scss';

const ROOT = document.getElementById("root");

ReactDOM.render(<App name="Robinson Marquez" />, ROOT);