import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';


export default function AppRoutes() {
    return (
      <Switch>
        <Route path="/results/:place">
          <ResultsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    );
};