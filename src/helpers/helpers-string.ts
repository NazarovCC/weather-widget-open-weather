export const stringCapitalized = (str: string): string => {
	const charList = str.split('');
	charList[0] = charList[0].toUpperCase();
	return charList.join('');
}