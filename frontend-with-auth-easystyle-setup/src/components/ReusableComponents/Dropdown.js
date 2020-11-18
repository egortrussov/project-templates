import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default class Dropdown extends Component {

    state = {
        isOpen: false,
    }

    toggleOpenState() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {

        const { options, onSelect, currentOption, placeholder } = this.props;
        const { isOpen } = this.state;


        return (
            <div className="dropdown" onClick={ () => this.toggleOpenState() }>
                <div className={ `selected ${ isOpen ? "open" : "closed" }` }>
                    { currentOption ? currentOption : placeholder }
                    <div className="arrow">
                        <FontAwesomeIcon 
                            icon={ faArrowDown }
                            className="icon"
                        />
                    </div>
                </div>
                <div className={ `collapse ${ isOpen ? "open" : "closed" }` }>
                    {
                        options.map((option, index) => (
                            <div className="item" onClick={ () => onSelect(index) }>
                                { option }
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
