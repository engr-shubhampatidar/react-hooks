import React from "react";
import { ExampleUseEffect } from "./hooks/Example-useEffect";
import { ExampleUseMemo } from "./hooks/Example-useMemo";
import { ExampleUseReducer } from "./hooks/Example-useReducer";
import { ExampleUseRef } from "./hooks/Example-useRef";
import { ExampleUseState } from "./hooks/Example-useState";
import { ExampleUseTransition } from "./hooks/Example-useTransition";
import { ExampleUseCallback } from "./hooks/useCallback/Example-useCallback";
import { ExampleUseContext } from "./hooks/useContext/Example-useContext";
import { ThemeProvider } from "./hooks/useContext/ThemeContext";
import { ExampleUseDeferredValue } from "./hooks/useDeferredValue/Example-useDeferredValue";
import Route from "./Route";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="App">
          <Route path="/">
            <>
              <p>Important</p>
              <a href="/useStateExample">useState</a>
              <br />
              <a href="/useEffectExample">useEffect</a>
              <br />
              <a href="/useContextExample">useContext</a>
              <br />
              <p>Lesser Used</p>
              <a href="/useRefExample">useRef</a>
              <br />
              <a href="/useMemoExample">useMemo</a>
              <br />
              <a href="/useCallbackExample">useCallback</a>
              <br />
              <a href="/useReducerExample">useReducer</a>
              <br />
              <a href="/useTransitionExample">useTransition</a>
              <br />
              <a href="/useUseDeferredValueExample">useUseDeferredValue</a>
            </>
          </Route>
          <br />
          <a href="/">
            <button>Back</button>
          </a>
          <Route path="/useStateExample">
            <ExampleUseState />
          </Route>
          <Route path="/useEffectExample">
            <ExampleUseEffect />
          </Route>
          <Route path="/useContextExample">
            <ExampleUseContext />
          </Route>
          <Route path="/useRefExample">
            <ExampleUseRef />
          </Route>
          <Route path="/useMemoExample">
            <ExampleUseMemo />
          </Route>
          <Route path="/useCallbackExample">
            <ExampleUseCallback />
          </Route>
          <Route path="/useReducerExample">
            <ExampleUseReducer />
          </Route>
          <Route path="/useTransitionExample">
            <ExampleUseTransition />
          </Route>
          <Route path="/useUseDeferredValueExample">
            <ExampleUseDeferredValue />
          </Route>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
