import React from 'react';
import Card from '../Card';
import s from './Card.module.css';

const CardList = ({ item = [] }) => {
    return (
        <div className={s.wrap}>
            {
                item.map(({test, answer}, index) => (
                    <Card key={index} test={test} answer={answer} />
                ))
            }
        </div>
    );
};

export default CardList;