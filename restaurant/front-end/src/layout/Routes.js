import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import NotFound from "./NotFound";
import { today } from "../utils/date-time";
import CreateTable from "../tables/CreateNewTables";
import SearchReservation from "../reservations/SearchReservation";
import CreateReservation from "../reservations/CreateReservations";
import SeatReservation from "../reservations/SeatReservation";
import EditReservation from "../reservations/EditReservation";

/**
 * Defines all the routes for the application.
 *
 * You will need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={"/dashboard"} />
      </Route>
      <Route path="/search">
        <SearchReservation />
      </Route>
      <Route exact={true} path={`/reservations/new`}>
        <CreateReservation />
      </Route>
      <Route exact={true} path={`/reservations/:reservation_id/seat`}>
        <SeatReservation />
      </Route>
      <Route exact={true} path={`/reservations/:reservation_id/edit`}>
        <EditReservation />
      </Route>
      <Route path="/dashboard">
        <Dashboard date={today()} />
      </Route>
      <Route exact={true} path={`/tables/new`}>
        <CreateTable />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;