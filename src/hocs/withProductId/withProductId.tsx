import React from 'react';
import './withProductId.scss';
import { useParams } from 'react-router-dom';

function withProductId<P>(Component: React.ComponentType<P>) {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return (props: P) => {
    {
      const { id } = useParams();
      return <Component {...{ ...props, id }} />;
    }
  };
}

export default withProductId;
