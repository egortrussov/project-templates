import React, { Component } from 'react'

import Spinner from './Spinner'

export default class Button extends Component {
    render() {

        const { text, type, isLoading } = this.props;

        let clickFunction = () => false;

        if (this.props.onClick) 
            clickFunction = this.props.onClick;

        return (
            <button className={ `button ${ type } ${ isLoading ? 'disabled' : '' }` } onClick={ !isLoading ?  () => clickFunction : false }>
                {
                    isLoading ? (
                        <Spinner 
                            size="xsm"
                            isWhite={ type == "cta" }
                        />
                    ) : (
                        <span>
                            { text }
                        </span>
                    )
                }
            </button>
        )
    }
}
