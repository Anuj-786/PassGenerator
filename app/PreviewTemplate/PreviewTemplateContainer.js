import PreviewTemplateScreen from './PreviewTemplateScreen';

import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
      loggedIn: state.login,
    });

const mapDispatchToProps = (dispatch) => ({
    doLogin: () => {
      dispatch({ type: 'DO_LOGIN' });
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(PreviewTemplateScreen);
