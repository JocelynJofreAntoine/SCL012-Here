import React, { Fragment } from 'react'
import firebase from "./firebase";
import { withRouter } from 'react-router-dom';
import AppMap from "../components/AppMap";



function Dashboard(props) {
  if (!firebase.getCurrentUsername()) {
    // not logged in
    alert("Please login first");
    props.history.replace("/login");
    return null;
  }

  return (
    <Fragment>
      <p>Hello {firebase.getCurrentUsername()}</p>
     
      <div>
        <button type="submit" className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      </div>
      <AppMap/>
      {/* <div id="map"></div> */}
    </Fragment>
  );

  async function logout() {
    await firebase.logout();
    props.history.push("/");
  }
}

export default withRouter((Dashboard))
