import React from 'react';
import { useHistory, Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom'
import { PublicRoute, PrivateRoute } from './components/Router'
import { Auth, Dashboard, DashboardMobile } from './layouts';
import { Login, Register } from './pages'
import {
  // Desktop
  Main,
  Transfer,
  History,
  TransferProcess,
  TransferConfirmation,
  TransferStatus,
  Topup,
  Profile,
  ProfileInfo,
  ProfileChangePass,
  ProfileManagePhone,
  ProfileAddPhone,
  ProfileChangePin,
  AddPin,
  Success,
  Logout,

  // Mobile
  MainMobile,
  TransferMobile,
  HistoryMobile,
  TransferProcessMobile,
  TransferConfirmationMobile,
  TransferStatusMobile,
  TopupMobile,
  ProfileMobile,
  ProfileInfoMobile,
  ProfileChangePassMobile,
  ProfileManagePhoneMobile,
  ProfileAddPhoneMobile,
  ProfileChangePinMobile,
  NotificationMobile,
  TransferPinConfirmationMobile,
  TransactionMobile,
} from "./pages"

import Admin from './pages/Desktop/Dashboard/Admin';

function App() {
  return (
    <Router>
      <Switch>
        {/* Desktop */}
        <Route exact path="/" render={props => <Redirect to="/auth" {...props} />} />
        <PublicRoute restricted={true} exact path="/auth/signup" component={Auth} child={Register} />
        <PublicRoute restricted={true} exact path="/auth" component={Auth} child={Login} />
        <PrivateRoute exact path="/auth/create-pin" component={Auth} child={AddPin} />
        <PrivateRoute exact path="/auth/success" component={Auth} child={Success} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} child={Main} />
        <PrivateRoute exact path="/dashboard/transfer" component={Dashboard} child={Transfer} />
        <PrivateRoute exact path="/dashboard/transfer/:id" component={Dashboard} child={TransferProcess} />
        <PrivateRoute exact path="/dashboard/transfer/status/:id?" component={Dashboard} child={TransferStatus} />
        <PrivateRoute exact path="/dashboard/transfer/:id?/confirm" component={Dashboard} child={TransferConfirmation} />
        <PrivateRoute exact path="/dashboard/history" component={Dashboard} child={History} />
        <PrivateRoute exact path="/dashboard/topup" component={Dashboard} child={Topup} />
        <PrivateRoute exact path="/dashboard/profile" component={Dashboard} child={Profile} />
        <PrivateRoute exact path="/dashboard/profile/info" component={Dashboard} child={ProfileInfo} />
        <PrivateRoute exact path="/dashboard/profile/change_password" component={Dashboard} child={ProfileChangePass} />
        <PrivateRoute exact path="/dashboard/profile/manage_phone" component={Dashboard} child={ProfileManagePhone} />
        <PrivateRoute exact path="/dashboard/profile/add_phone" component={Dashboard} child={ProfileAddPhone} />
        <PrivateRoute exact path="/dashboard/profile/change_pin" component={Dashboard} child={ProfileChangePin} />
        <PrivateRoute exact path="/logout" component={Logout} />
        <PrivateRoute exact path="/admin" component={Admin} />

        {/* Mobile. */}
        <PrivateRoute exact path="/m/dashboard" component={DashboardMobile} child={MainMobile} />
        <PrivateRoute exact path="/m/dashboard/notification" component={DashboardMobile} child={NotificationMobile} />
        <PrivateRoute exact path="/m/dashboard/transaction" component={DashboardMobile} child={TransactionMobile} />
        <PrivateRoute exact path="/m/dashboard/transfer" component={DashboardMobile} child={TransferMobile} />
        <PrivateRoute exact path="/m/dashboard/transfer/:id" component={DashboardMobile} child={TransferProcessMobile} />
        <PrivateRoute exact path="/m/dashboard/transfer/status/:id?" component={DashboardMobile} child={TransferStatusMobile} />
        <PrivateRoute exact path="/m/dashboard/transfer/:id?/confirm" component={DashboardMobile} child={TransferConfirmationMobile} />
        <PrivateRoute exact path="/m/dashboard/transfer/:id?/confirm-pin" component={DashboardMobile} child={TransferPinConfirmationMobile} />
        <PrivateRoute exact path="/m/dashboard/history" component={DashboardMobile} child={HistoryMobile} />
        <PrivateRoute exact path="/m/dashboard/topup" component={DashboardMobile} child={TopupMobile} />
        <PrivateRoute exact path="/m/dashboard/profile" component={DashboardMobile} child={ProfileMobile} />
        <PrivateRoute exact path="/m/dashboard/profile/info" component={DashboardMobile} child={ProfileInfoMobile} />
        <PrivateRoute exact path="/m/dashboard/profile/change_password" component={DashboardMobile} child={ProfileChangePassMobile} />
        <PrivateRoute exact path="/m/dashboard/profile/manage_phone" component={DashboardMobile} child={ProfileManagePhoneMobile} />
        <PrivateRoute exact path="/m/dashboard/profile/add_phone" component={DashboardMobile} child={ProfileAddPhoneMobile} />
        <PrivateRoute exact path="/m/dashboard/profile/change_pin" component={DashboardMobile} child={ProfileChangePinMobile} />
        <PrivateRoute path="/*" component={NotFound} />
      </Switch>
    </Router>
  );
}

function NotFound() {
  const history = useHistory()

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column vh-100">
        <h4 className="text-primary font-weight-bold">ZWallet</h4>
        <h1 className="font-weight-bold d-block text-black-50">404 Not Found</h1>

        <div className="d-flex align-items-center">
          Your page request may temporary moved or not available
          <button
            className="btn shadow-none p-0 text-primary ml-1 font-weight-bold pointer-event"
            onClick={() => history.replace("/dashboard")}
          >
            Go Back
            </button>
        </div>
      </div>
    </>
  )
}

export default App;