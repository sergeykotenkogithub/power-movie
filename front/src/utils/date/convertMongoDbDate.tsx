export const convertMongoDbDate = (date: string) =>
	new Date(date).toLocaleDateString('ru')
