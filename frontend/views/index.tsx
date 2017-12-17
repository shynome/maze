import React from 'react'
import { Provider } from "mobx-react";
import { stores } from "../stores";
import { Router } from "./Router";

export const AppRoot = ()=>
<Provider {...stores}>
  <Router/>
</Provider>