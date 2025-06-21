interface props {
	h: number
}

export function BackgroundProfile({ h }: props) {
	return <div style={{ height: h }} className='w-[100%] bg-white/10'></div>
}
