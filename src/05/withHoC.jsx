import React from 'react';

export default function WithHoC(WrappedComponent) {
    return class WithHox extends React.Component{
        static displayName = `withHoc(${WrappedComponent.name})`
        render(){
            return <WrappedComponent{...this.props} />
        }
    };
}
