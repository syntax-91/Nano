import type { UseFormRegisterReturn } from 'react-hook-form'

type TBtn = 'button' | 'submit' | 'reset'|'danger'

export interface IBtnProps {
	label?: string,
	type?: TBtn,
	style?: 'default'|'danger'|'disabled'|'mini',
	location?: string,
	theme?: string,
	isBlock?: boolean,
	max_w?: number,
	w?: number,
	disabled?: boolean,
	onClick?: () => void,
}

//userDataSubmit
export interface IUserDataSubmit {
	username: string,
	password: string
}

/* Input */ 
type InpType = 'text' | 'password' | 'email' | ''

export interface InputProps {
	required?: boolean
	type?: InpType
	placeholder?: string
	value?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	style?: 'укажите свои кастомные типы, и опишите в css' | 'default'|'full'
	theme?: 'dark' | 'light',
	
	rhf: boolean // react-hook-form
	register?: UseFormRegisterReturn
}

export interface IModalProps {
	msg: string,
	success: boolean,
} 

// IChatsProps
export interface IChatProps {
	ava: string,
	username: string,
	roomID: string
} 

export interface IMsgProps {
	msgID: string, 
	text: string,
	ava: string,
	who: string
}

//
export interface ICreateChatProps {
	userA: string,
	userB: string,
	firstMsg: string
}