export const onCardClick = (title: string) => {
	alert(`You clicked on the card: ${title}`);
}

export const countDiscountPrice = (price: number, discount?: number) => {
	return (100 - Number(discount)) / 100 * price;
}