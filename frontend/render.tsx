import React from "react";
import { AppContainer } from "react-hot-loader";
import ReactDOM from "react-dom";
import { AppRoot } from "./views";

export const render = ()=>{
  ReactDOM.render(
    <AppContainer warnings={false}>
      <AppRoot/>
    </AppContainer>,
    document.getElementById('app')
  )
}

render()

declare var module:any
if(module.hot){
  module.hot.accept('./views',render)
}
