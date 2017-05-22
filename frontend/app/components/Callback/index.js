import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { observer } from 'mobx-react';
import connect from 'stores/connect';

/* component styles */
import s from './styles.css';

class Callback extends Component {
  static propTypes = {
    posts: PropTypes.object,
  };
  
  render() {
    console.log("this.props", this.props);

    return (
      <section className={s.root}>
        <Helmet
          title="posts"
        />
        <h1>Callback page</h1>

      </section>
    );
  }
}

export default Callback;
