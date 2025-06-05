export const usernameSchema = {
	required: 'поля является обязательной',
}

export const passwordSchema = {
	required: 'поля является обязательной',
	minLength: { value: 6, message: 'Минимум 6' },
	maxLength: { value: 90, message: 'Минимум 90' },
}
 