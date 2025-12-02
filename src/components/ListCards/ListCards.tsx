import { Card, type CardProps } from '../Card';
import styles from './ListCards.module.css';

interface Product extends CardProps {
    id: number;
}

const products: Array<Product> = [{
    id: Date.now(),
    title: "Кола",
    price: 120,
    discount: 10,
}]

export const ListCards = () => {
    return (
        <ul className={styles["container"]}>
            {products.map(product => {
                return (
                <li key={product.id}>
                    <Card title={product.title} price={product.price} discount={product.discount}/>
                </li>)
            })}
        </ul>
    )
}