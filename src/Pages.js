// /src/pages.js

import React from 'react';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import routes from './routes';
import Breadcrumb from './Breadcrumb';

/**
 * These are root pages
 */
const Home = ({ location }) => {
  return (
    <div>
      <h1 className="py-3">Home</h1>
      <Breadcrumb locationPath={location.pathname}/>
    </div>
  );
};

const Books = ({ location }) => {
  const onMatchedRoutes = (matchedRoutes) => {
    return [
      {
        route: {
          path: '/',
          breadcrumbName: 'Home'
        }
      },
      ...matchedRoutes
    ];
  };

  return (
    <div>
      <h1 className="py-3">Books</h1>
      <Breadcrumb
        locationPath={location.pathname}
        onMatchedRoutes={onMatchedRoutes}
      />
    </div>
  );
};

const Electronics = ({ route, location }) => {
  let onMatchedRoutes = (matchedRoutes) => {
    return [
      {
        route: {
          path: '/',
          breadcrumbName: 'Home'
        }
      },
      ...matchedRoutes
    ];
  }
  return (
    <div>
      <h1 className="py-3">Electronics</h1>

      {/* Breadcrumb */}
      <Breadcrumb 
        locationPath={location.pathname}
        onMatchedRoutes={onMatchedRoutes}/>
    
      {renderRoutes(route.routes)}
    </div>
  );
};

/**
 * These are pages nested in Electronics
 */
const Mobile = (props) => {
  console.log('props in Mobile', props);
  return <h3>Mobile Phone</h3>;
};

const Desktop = () => {
  return <h3>Desktop PC</h3>;
};

const Laptop = () => {
  return <h3>Laptop</h3>;
};

export { Home, Books, Electronics, Mobile, Desktop, Laptop };