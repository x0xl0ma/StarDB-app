import React from "react";
import { StarshipList } from "../sw-components";
import { withRouter } from "react-router-dom";

const StarshipsPage = ({ history }) => {
  return (
    <div className="col-md-6">
      <StarshipList onItemSelected={id => history.push(id)} />
    </div>
  );
};

export default withRouter(StarshipsPage);
