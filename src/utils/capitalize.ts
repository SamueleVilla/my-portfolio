/**
 * Capitalize the first letter of a string
 * @param str - The string to capitalize
 * @returns - The string with the first letter capitalized
 */
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export default capitalize;
