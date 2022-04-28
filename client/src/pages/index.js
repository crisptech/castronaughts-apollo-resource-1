import React, { Fragment } from "react";
import { Router } from "@reach/router";
/** importing our pages */
import Tracks from "./tracks";
import { QueryResult } from "../components";

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <Tracks path="/" />
    </Router>
  );
}
