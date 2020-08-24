import React from 'react';
import './withCart.scss';
import ConnectedCart from '../../Containers/Cart/Cart';

function withCart<P>(Component: React.ComponentType<P>) {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return (props: P) => {
    {
      return (
        <div className="withCart-container">
          <div className="withCart-main-content">
            <Component {...props} />
          </div>
          <div className="withCart-content">
            <ConnectedCart />
          </div>
        </div>
      );
    }
  };
}

export default withCart;
