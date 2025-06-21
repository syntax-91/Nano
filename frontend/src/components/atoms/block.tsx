import clsx from 'clsx'

interface props {
	w?: number
	h?: number
	bg?: 'white/5' | 'white/10' | 'white/20' | 'black/80'
	mw?: number
	mx?: boolean
	ch?: React.ReactNode
	cls?: string
}

export function Block({
	w = 300, //
	h = 35,
	bg = 'white/5',
	mw = 90,
	mx = false,
	ch,
	cls = '',
}: props) {
	return (
	<div
	    style={{ width: w, height: h }}
	    className={clsx(`bg-${bg} max-w-[${mw}%]`, mx == true && 'mx-auto', cls)}
        >
	    {ch}
	</div>
	)
}
