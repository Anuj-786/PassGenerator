'use strict';
import  PropTypes from 'react';
import { requireNativeComponent } from 'react-native';

var iface = {
  name: 'ImageView',
  propTypes: {
    src: PropTypes.string,
    onLayout: true,
  },
};

module.exports = requireNativeComponent('Canvas', iface);
