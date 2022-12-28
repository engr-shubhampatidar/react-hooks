import React from "react";
import { ExampleUseToggle } from "./hooks/Custom Hooks/1-UseToggle/Example-useToggle";
import { ExampleUseTimeout } from "./hooks/Custom Hooks/2-UseTimeout/Example-useTimeout";
import { ExampleUseDebounce } from "./hooks/Custom Hooks/3-UseDebounce/Example-useDebounce";
import { ExampleUseUpdateEffect } from "./hooks/Custom Hooks/4-UseUpdateEffect/Example-useUpdateEffect";
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

const Title = ({ children }) => {
  return (
    <p
      style={{
        padding: "10px",
        margin: "20",
        border: " 1px solid #eaeaea",
        borderRadius: "3px",
        fontFamily: "cursive",
        fontSize: "20px",
      }}
    >
      {children}
    </p>
  );
};

const Link = ({ children, href }) => {
  return (
    <a
      style={{
        fontFamily: "cursive",
        fontSize: "15px",
        textDecoration: "none",
      }}
      href={href}
    >
      {children}
    </a>
  );
};

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="App">
          <Route path="/">
            <>
              <Title>Important Hooks</Title>
              <Link href="/useStateExample">useState</Link>
              <br />
              <Link href="/useEffectExample">useEffect</Link>
              <br />
              <Link href="/useContextExample">useContext</Link>
              <br />
              <Title>Lesser Used</Title>
              <Link href="/useRefExample">useRef</Link>
              <br />
              <Link href="/useMemoExample">useMemo</Link>
              <br />
              <Link href="/useCallbackExample">useCallback</Link>
              <br />
              <Link href="/useReducerExample">useReducer</Link>
              <br />
              <Link href="/useTransitionExample">useTransition</Link>
              <br />
              <Link href="/useDeferredValueExample">useUseDeferredValue</Link>
              <br />
              <Link href="/useLayoutEffectExample">useLayoutExample</Link>
              <br />
              <Link href="/useDebugValueExample">useDebugValueExample</Link>
              <br />
              <Link href="/useImperativeHandleExample">
                useImperativeHandleExample
              </Link>
              <br />
              <Link href="/useIdExample">useIdExample</Link>
              <Title>Custom Hooks</Title>
              <Link href="/useLocalStorage">useLocalStorage</Link>
              <br />
              <Link href="/useUpdateLogger">useUpdateLogger</Link>
              <br />
              <Link href="/useToggle">useToggle</Link>
              <br />
              <Link href="/useTimeout">useTimeout</Link>
              <br />
              <Link href="/useDebounce">useDebounce</Link>
              <br />
              <Link href="/useUpdateEffect">useUpdateEffect</Link>
              <br />
            </>
          </Route>
          <br />
          <Link href="/">
            <button
              style={{
                background: "red",
                border: "none",
                borderRadius: "3px",
                color: "#fff",
                fontSize: "12px",
                padding: "7px 15px",
              }}
            >
              Back
            </button>
          </Link>
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
          <Route path="/useToggle">
            <ExampleUseToggle />
          </Route>
          <Route path="/useTimeout">
            <ExampleUseTimeout />
          </Route>
          <Route path="/useDebounce">
            <ExampleUseDebounce />
          </Route>
          <Route path="/useUpdateEffect">
            <ExampleUseUpdateEffect />
          </Route>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
