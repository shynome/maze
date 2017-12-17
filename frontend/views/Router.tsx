import React,{ Component } from "react";
import { Route, Router, Switch } from "react-router";

import { Stores } from "../stores";

import { observer, inject } from "mobx-react";

export type Props = {
  routing?:Stores['routing']
  history?:Stores['history']
}

import { NotFound } from "./NotFound";
import { AppHome } from "./AppHome";

@inject('routing','history') @observer
export class RouterContainer extends Component <Props,{}> {
  
  render(){
    return (
      <Router history={this.props.history}>
        <Switch>
          <Route path="/" component={AppHome} exact></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    )
  }
  
}

export { RouterContainer as Router }