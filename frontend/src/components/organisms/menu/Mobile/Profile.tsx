interface props {
	h: number
}

export function ProfileData({ h }: props) {
	return <div style={{ height: h }} className='w-[100%]'></div>
}
