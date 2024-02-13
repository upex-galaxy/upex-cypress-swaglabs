export function parseCurrencyNum(priceString: string) {
	return parseFloat(priceString.replace('$', '').replace(',', ''));
}
export function randomNumber (max:number, min:number=0) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};