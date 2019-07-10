import React, { Component } from 'react';
import { matchRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import routes from './routes';

// const Breadcrumb = ({ locationPath, onMatchedRoutes }) => {
//   let matchedRoutes = matchRoutes(routes, locationPath);

//   if (typeof onMatchedRoutes === 'function') {
//     matchedRoutes = onMatchedRoutes(matchedRoutes);
//   }
//   return (
//     <nav>
//       <ol className="breadcrumb">
//         {matchedRoutes.map((matchRoute, i) => {
//           const { path, breadcrumbName } = matchRoute.route;
//           const isActive = path === locationPath;
//           return isActive ? (
//             <li key={i} className="breadcrumb-item active">
//               {breadcrumbName}
//             </li>
//           ) : (
//               <li key={i} className="breadcrumb-item">
//                 <Link to={path}>{breadcrumbName} </Link>
//               </li>
//             );
//         })}
//       </ol>
//     </nav>
//   );
// };

class Breadcrumb extends Component {
  constructor(props) {
    super(props);
    console.log('是這邊',props)
  }
  render() {
    let matchedRoutes = matchRoutes(routes, this.props.locationPath);

    if (typeof this.props.onMatchedRoutes === 'function') {
      matchedRoutes = this.props.onMatchedRoutes(matchedRoutes);
    }
    return (
      <nav>
        <ol className="breadcrumb">
          {matchedRoutes.map((matchRoute, i) => {
            const { path, breadcrumbName } = matchRoute.route;
            const isActive = path === this.props.locationPath;
            return isActive ? (
              <li key={i} className="breadcrumb-item active">
                {breadcrumbName}
              </li>
            ) : (
                <li key={i} className="breadcrumb-item">
                  <Link to={path}>{breadcrumbName} </Link>
                </li>
              );
          })}
        </ol>
      </nav>
    );
  }
}

export default Breadcrumb;