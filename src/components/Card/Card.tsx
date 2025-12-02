import "./card.css";

interface CardProps {
    title: string;
    price: number;
    discount?: number;
}

export const Card = ({ title, price, discount }: CardProps) => {

    function discountPrice(price: number, discount?: number):number {
        if (discount) {
            const discountNumber: number = price * (discount / 100);
            return price - discountNumber;
        } else {
            return price
        }
    }

    return (
        <div className="card">
            <h1 className="card__title">{title}</h1>
            <span className="card__price">{price}</span> <br />
            <span className="card__new-price">{discountPrice(price, discount)}
            </span>
        </div>
    );
};