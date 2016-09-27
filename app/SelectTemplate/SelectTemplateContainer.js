/*
* Container Component for Login Screen
*/
import SelectTemplateScreen from './SelectTemplateScreen';
import { connect } from 'react-redux';
import * as actions from './../actions';

const mapStateToProps = (state) => {
  console.log('this is the point', state);
  return { loggedIn: state.templateSelection.counter };
};

const mapDispatchToProps = (dispatch) => ({
    doLogin: () => {
      dispatch({ type: 'DO_LOGIN' });
    },

    selectTemplate: (templateId) => {
      dispatch({ type: 'SELECT_TEMPLATE', index: templateId });
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(SelectTemplateScreen);
