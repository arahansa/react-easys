import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';
import withStyles, {css} from './withStyles'

class Checkbox extends PureComponent {

    constructor(props){
        super(props);
        this.setRef = this.setRef.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if(this.props.autoFocus){
            this.ref.focus();
        }
    }

    handleClick(e){
        const { name, onChange } = this.props;
        onChange(name, e.target.checked);
    }

    setRef(ref){
        this.ref = ref;
    }


    render() {
        const {
            errorMessage,
            label,
            children,
            styles,
            checked,
        } = this.props;

        return (
            <label>
                {label}
                <div>
                    <input ref={this.setRef} type="checkbox" checked={checked && 'checked'} onClick={this.handleClick}/>
                    {children}
                    {errorMessage && (<div><span {...css(styles.errorText)}>{errorMessage}</span></div>)}
                </div>
            </label>
        );
    }
}

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    autoFocus: PropTypes.bool,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
};

Checkbox.defaultProps = {
    autoFocus : false,
    checked: false,
    onChange: () => {}
}

export default withStyles( ({color, size}) => ({
    errorText : {
        fontSize: size.sm,
        color: color.error,
    }
}))(Checkbox);
