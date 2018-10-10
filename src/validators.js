export const required = value => value ? undefined : 'Required';
export const nonEmpty = value => value.trim() !== '' ? undefined : 'Cannot be empty';
export const fiveCharacters = value => value.length === 5 ? undefined : 'Must be 5 characters';
export const allNumbers = value => (value.split('').find(char => !Number.isInteger(parseInt(char))) ? 'Must contain only numbers' : undefined);