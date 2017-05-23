import React, { Component, PropTypes } from 'react';
import { isAdmin, isCat, isAuthor, isUser } from '../utils/rules';

export const authorizedOnly = (DecoratedComponent) =>
  class AuthOnlyPage extends Component {
    static propTypes = {
      auth: PropTypes.object,
    };

    componentDidMount() {
      const { auth } = this.props;

      if (!auth.isAuthenticated()) {
        auth.login();
      }
    }

    render() {
      return (
        <DecoratedComponent {...this.props} />
      );
    }
  };

export const handleAuthentication = (DecoratedComponent) =>
  class HandleAuthenticationPage extends Component {
    static propTypes = {
      auth: PropTypes.object,
    };

    componentDidMount() {
      const { auth } = this.props;

      if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
      }
    }

    render() {
      return (
        <DecoratedComponent {...this.props} />
      );
    }
  };


//
// export const catRules = (DecoratedComponent) =>
//   class CatPage extends Component { // eslint-disable-line
//     static propTypes = {
//       user: PropTypes.object,
//     };
//
//     componentDidMount() {
//       const { user } = this.props;
//
//       if (!user || !isCat(user.userGroup)) {
//         navigate('/posts');
//       }
//     }
//
//     render() {
//       return (
//         <DecoratedComponent {...this.props} />
//       );
//     }
//   };
//
//
// export const loginRules = (DecoratedComponent) =>
//   class UserPage extends Component { // eslint-disable-line
//     static propTypes = {
//       user: PropTypes.object,
//       showSocialPopup: PropTypes.func,
//     };
//
//     componentDidMount() {
//       const { user, showSocialPopup } = this.props;
//
//       if (!user || !isUser(user.userGroup)) {
//         navigate('/posts');
//         showSocialPopup({ redirectAfterLogin: '/add-post' });
//       }
//     }
//
//     render() {
//       return (
//         <DecoratedComponent {...this.props} />
//       );
//     }
//   };
//
// export const authorRules = (DecoratedComponent) =>
//   class AuthorPage extends Component { // eslint-disable-line
//     static propTypes = {
//       user: PropTypes.object,
//       showSocialPopup: PropTypes.func,
//     };
//
//     componentDidMount() {
//       const { user, showSocialPopup } = this.props;
//
//       if (!user || !isAuthor(user.userGroup)) {
//         if (location.href.indexOf('edit-post') === -1) {
//           navigate('/posts');
//           showSocialPopup({ redirectAfterLogin: '/add-post' });
//         } else {
//           navigate(location.href.replace('edit-post/', 'posts/'));
//         }
//       }
//     }
//
//     render() {
//       return (
//         <DecoratedComponent {...this.props} />
//       );
//     }
//   };

