import React, { useEffect } from "react";
import { Route, Switch, useRouteMatch, useHistory } from "react-router-dom";
import AdminNavBar from "../../components/AdminNavBar/AdminNavBar";
import AdminEditProfile from "../../components/AdminEditProfile/AdminEditProfile";
import CreateAccount from "../../components/CreareAccount/CreateAccount";
import ViewAccounts from "../../components/ManageAccounts/ViewAccounts/ViewAccounts";
import EditAccount from "../../components/ManageAccounts/EditAccount/EditAccount";

const AdminDashboard = (props) => {
  // let { path } = useRouteMatch();

  const history = useHistory();
  let path = "/admindashboard";

  useEffect(() => {}, []);

  return (
    <div>
      <AdminNavBar />
      <Switch>
        <Route path={`/editprofile`}>
          <AdminEditProfile />
        </Route>
        <Route path={`/createaccount`}>
          <CreateAccount />
        </Route>
        <Route path={`/manageaccounts`}>
          <ViewAccounts />
        </Route>
        <Route path={`/editaccount/:id`}>
          <EditAccount />
        </Route>
      </Switch>
    </div>
  );
};

export default AdminDashboard;
