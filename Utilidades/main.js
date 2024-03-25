export const formatDateShort = (value) => {
	return new Intl.DateTimeFormat('es-ES', {
		year: 'numeric',
		month: 'numeric',
	}).format(new Date(value));
}

export const accountFormat = (value) => {
	return value.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');
}