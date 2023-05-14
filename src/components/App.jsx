import { Fragment } from "react";
import { Counter } from "./Counter/Counter";
import { GlobalStyle } from "./GlobalStyle";


export const App = () => {
  return (
    <Fragment>
      <Counter initialValue={10}/>
      <GlobalStyle />
    </Fragment>
  );
};
