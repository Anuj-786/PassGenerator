/*
* Container Component for FillTemplate
*/
import FillTemplateScreen from './FillTemplateScreen';
import { connect } from 'react-redux';
import * as actions from './../actions';
import { getNav, getLogin } from './../reducers';

const mapStateToProps = (state) => ({
      loggedIn: state.login,
    });

const mapDispatchToProps = (dispatch) => ({
    addCounter: () => {
      dispatch({ type: 'DO_LOGIN' });
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(FillTemplateScreen);
