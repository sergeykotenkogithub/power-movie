import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '@/assets/images/logo.svg'

export const Logo: FC = () => {
	return (
		<Link href="/" className="px-layout mb-10 flex items-center">
			<Image src={logoImage} alt="Online cinema" />
			<div className="color-white text-3xl text-white">Power Movie</div>
		</Link>
	)
}
