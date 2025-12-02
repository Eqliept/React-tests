import type { FC } from 'react';
import styles from './Card.module.css';
import type { CardProps } from '../types';
import { countDiscountPrice, onCardClick } from '../libs';

export const Card: FC<CardProps> = ({ title, price, discount }) => {
    return (
        <div className={styles["container"]} onClick={() => onCardClick(title)}>
            <h1 className={styles["container__title"]}>{title}</h1>
            <span className={styles["container__price"]}>{price}</span> <br />
            <span className={styles["container__new-price"]}>
                {countDiscountPrice(price, discount)}
            </span>
        </div>
    );
};