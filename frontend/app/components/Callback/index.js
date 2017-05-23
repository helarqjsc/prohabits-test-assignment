import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { observer } from 'mobx-react';
import connect from 'stores/connect';
import { handleAuthentication } from 'utils/rules';

/* component styles */
import s from './styles.css';

@handleAuthentication
class Callback extends Component {
  static propTypes = {
    posts: PropTypes.object,
  };
  
  render() {

    return (
      <section className={s.root}>
        <Helmet
          title="Loading..."
        />
        <h1>Please wait...</h1>

      </section>
    );
  }
}

export default Callback;
