import React, { Component } from 'react';
import { app, commitments } from '../';
import Auth from '../../Auth/Auth';


function connect(DecoratedComponent) {
  class Connect extends Component {
    render() {
      return (
        <DecoratedComponent
          auth={Auth}
          app={app}
          commitments={commitments}
          {...this.props}
        />
      );
    }
  }

  return Connect;
}

export default connect;
