import React from "react";
import { ExampleUseDebugValue } from "./hooks/Example-useDebugValue";
import { ExampleUseEffect } from "./hooks/Example-useEffect";
import { ExampleUseLayoutEffect } from "./hooks/Example-useLayoutEffect";
import { ExampleUseMemo } from "./hooks/Example-useMemo";
import { ExampleUseReducer } from "./hooks/Example-useReducer";
import { ExampleUseRef } from "./hooks/Example-useRef";
import { ExampleUseState } from "./hooks/Example-useState";
import { ExampleUseTransition } from "./hooks/Example-useTransition";
import { ExampleUseCallback } from "./hooks/useCallback/Example-useCallback";
import { ExampleUseContext } from "./hooks/useContext/Example-useContext";
import { ThemeProvider } from "./hooks/useContext/ThemeContext";
import { ExampleUseDeferredValue } from "./hooks/useDeferredValue/Example-useDeferredValue";
import { ExampleUseImperativeHandle } from "./hooks/useImperativeHandle/Example-useImperativeHandle";
import { ExampleUseLocalStorage } from "./hooks/useLocalStorage/Example-useLocalStorage";
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
              <a href="/useDeferredValueExample">useUseDeferredValue</a>
              <br />
              <a href="/useLayoutEffectExample">useLayoutExample</a>
              <br />
              <a href="/useDebugValueExample">useDebugValueExample</a>
              <br />
              <a href="/useImperativeHandleExample">
                useImperativeHandleExample
              </a>
              <a href="/useIdExample">useIdExample</a>
              <p>Custom Hooks</p>
              <a href="/useLocalStorage">useLocalStorage</a>
              <br />
              <a href="/useUpdateLogger">useUpdateLogger</a>
              <br />
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
          <Route path="/useDeferredValueExample">
            <ExampleUseDeferredValue />
          </Route>
          <Route path="/useLayoutEffectExample">
            <ExampleUseLayoutEffect />
          </Route>
          <Route path="/useDebugValueExample">
            <ExampleUseDebugValue />
          </Route>
          <Route path="/useImperativeHandleExample">
            <ExampleUseImperativeHandle />
          </Route>
          <Route path="/useIdExample">
            <ExampleUseImperativeHandle />
          </Route>
          <Route path="/useLocalStorage">
            <ExampleUseLocalStorage />
          </Route>
          <Route path="/useUpdateLogger">
            <div>
              <p>Please reference code</p>
            </div>
          </Route>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
