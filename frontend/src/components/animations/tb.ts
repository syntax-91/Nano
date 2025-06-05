import gsap from 'gsap'
import { useEffect, useRef } from 'react'

/* top -> bottom */
export function TB_anim() {
	const ref = useRef(null)

	useEffect(() => {
		gsap.fromTo(
			ref.current,
			{ opacity: 0, y: -50 }, //
			{ opacity: 1, y: 0, ease: 'power2.out' }
		)
	}, [])

	return ref
}
