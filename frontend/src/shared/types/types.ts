import type React from 'react'
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
	ref?: React.Ref<HTMLInputElement>
	required?: boolean
	type?: InpType
	placeholder?: string
	value?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	style?: 'укажите свои кастомные типы, и опишите в css' | 'default'|'full'
	theme?: 'dark' | 'light',
	
	rhf: boolean // react-hook-form
	register?: UseFormRegisterReturn

	bg?: string
	rounded?: string
	className?: string
}

export interface IModalProps {
	msg: string,
	success: boolean,
} 


// IChatsProps
export interface IChatProps {
	ava: string,
	username: string,
	roomID: string,

	isFound?: boolean,
	latestMsg?: string,

} 

export type TMembers = {
	userA: string,
	userB: string
}

// INewChatProps
export interface INewChatProps {
	ava: string,
	username: string,
	roomID: string,

	members: TMembers
} 

export interface IMsgProps {
	msgID: string, 
	text: string,
	ava: string,
	who: string,

	roomID?: string,

	hours?: number,
	minutes?: number,

	createAt: string
}

//
export interface ICreateChatProps {
	userA: string,
	userB: string,
	firstMsg: string
}

//theme

export type TTheme = [
	type: 'light'|'dark'
]

export interface IUserData {
	username: string,
	ava: string,
	description: string,
	age: number
}