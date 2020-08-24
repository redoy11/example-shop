import React from 'react';
import './withHeader.scss';
import Header from '../../Components/Header/Header';

function withHeader<P>(Component: React.ComponentType<P>) {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return (props: P) => {
    {
      return (
        <div className="withHeader-container">
          <Header />
          <Component {...props} />
        </div>
      );
    }
  };
}

export default withHeader;
