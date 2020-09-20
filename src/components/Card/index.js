import React, { Component } from 'react';
import cl from 'classnames';
import s from './Card.module.css';

class Card extends React.Component {

    state = {
        done: false,
    }

    handlerCardClick = () => {
        this.setState({ 
            done: !this.state.done
        });
    }

    render() {
        const { test, answer } = this.props;
        const { done } = this.state;

        return (
            <div 
                className={ cl(s.card, { [s.done]: done }) }
                onClick={( this.handlerCardClick )}
            >
                <div className={s.cardInner}>
                    <div className={s.cardFront}>
                        { test }
                    </div>
                    <div className={s.cardBack}>
                        { answer }
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;