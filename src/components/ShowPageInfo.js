import React from 'react';
import { withRouter } from 'react-router-dom';

const ShowPageInfo = withRouter(({ match, location }) => {
  return <div>íì¬ ìì¹: {location.pathname}</div>;
});

export default ShowPageInfo;