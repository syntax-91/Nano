import gsap from 'gsap'
import { useEffect, useRef } from 'react'

/* left -> right - animate */

export function LR_anim() {
	const ref = useRef(null)

	useEffect(() => {
		gsap.fromTo(
			ref.current, //
			{ opacity: 0, x: -30, alpha: 0 }, //
			{
				opacity: 1,
				x: 0,
				alpha: 1,
				ease: 'power2.out',
				clearProps: 'opacity, transform',
			}
		)
	}, [])

	return ref
}
