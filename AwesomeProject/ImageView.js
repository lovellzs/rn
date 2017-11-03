

// import { PropTypes } from 'react';
import PropTypes from 'prop-types';
import {
    requireNativeComponent,
    View
} from 'react-native';

var iface = {
    name: 'ImageView',
    propTypes: {
        src: PropTypes.array,
        borderRadius: PropTypes.number,
        resizeMode: PropTypes.oneOf(['cover', 'contain', 'stretch']),
        ...View.propTypes // 包含默认的View的属性
    },
};

module.exports = requireNativeComponent('RCTImageView', iface);

// import PropTypes from 'prop-types';
//
// class Greeting extends React.Component {
//     render() {
//         return (
//             <h1>Hello, {this.props.name}</h1>
//         );
//     }
// }
//
// Greeting.propTypes = {
//     name: PropTypes.string
// };