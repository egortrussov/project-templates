import React, { Component } from 'react'

import './css/style.css';

export default class Heading extends Component {
    render() {

        const { text, type } = this.props;

        return (
            <div className={ `heading ${ type }` }>
                { text }
            </div>
        )
    }
}
