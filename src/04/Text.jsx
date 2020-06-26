import React, {Component} from 'react';
import PropTypes from 'prop-types';

import withStyles, {css} from './withStyles'

class Text extends Component {

    render() {
        const {children} = this.props;

        return (
            <span>
                {children}
            </span>
        );
    }
}

Text.propTypes = {
    children : PropTypes.node.isRequired
}

export default withStyles( ({color, size}) => ({
    default:{
        color: color.default,
        fontSize: size.md,
    }
}))(Text);