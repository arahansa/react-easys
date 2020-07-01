import React, {Component} from 'react';
import {wrapMergePropsFunc} from "react-redux/lib/connect/mergeProps";


export default function withLoading(WrappedComponent, loadingMessage = '로딩 중'){
    const {displayName, name: componentName}  = WrappedComponent;
    const wrappedComponentName = displayName || componentName;

    function WithLoading({isLoading, ...otherProps}){
        if(isLoading){
            return loadingMessage;
        }
        return (
            <WrappedComponent {...otherProps} />
        )
    }

    WithLoading.displayName = `withLoading(${wrappedComponentName})`;
    return WithLoading;
}