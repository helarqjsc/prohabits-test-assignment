import React, { Component } from 'react';
import { posts, app } from '../';
import Auth from '../../Auth/Auth';


function connect(DecoratedComponent) {
  class Connect extends Component {
    render() {
      return (
        <DecoratedComponent
          auth={Auth}
          app={app}
          {...this.props}
        />
      );
    }
  }

  return Connect;
}

export default connect;
