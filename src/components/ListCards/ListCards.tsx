import "./listCards.css";
import { Card } from "../Card/Card";

interface Product {
    id: number;
    title: string;
    price: number;
    discount?: number;
}

const products: Array<Product> = [{
    id: Date.now(),
    title: "Кола",
    price: 120,
    discount: 10,
}]

export const ListCards = () => {
    return (
        <ul className = "list-cards">
            {products.map(product => {
                return (
                <li key={product.id}>
                    <Card title={product.title} price={product.price} discount={product.discount}/>
                </li>)
            })}
        </ul>
    )
}