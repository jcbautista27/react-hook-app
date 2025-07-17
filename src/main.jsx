import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import { MemoHook } from "./06-memos/MemoHook";
//import { CallbackHook } from "./06-memos/CallbackHook";
//import {Padre} from "./07-tarea-memo/Padre"
//import HooksApp from './HooksApp.jsx'
//import { CounterApp } from './01-useState/CounterApp.jsx'
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx'
//import { SimpleForm } from './02-useEffect/SimpleForm.jsx'
//import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook.jsx";
//import { MultipleCustomHook } from "./03-examples/MultipleCustomHook.jsx";
//import { FocusScreen } from "./04-useRef/FocusScreen.jsx";
//import { Layout } from "./05-useLayoutEffect/Layout.jsx";
//import { Memorize } from "./06-memos/Memorize.jsx";

import "./08-useReducer/intro-reducer";
import { TodoApp } from "./08-useReducer/TodoApp";

createRoot(document.getElementById("root")).render(
  /*<StrictMode>*/
  <TodoApp />
  /*</StrictMode>,*/
);
