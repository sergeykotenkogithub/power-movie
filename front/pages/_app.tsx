import type { AppProps } from 'next/app'
import { TypeComponentAuthFields } from 'providers/AuthProvider/auth.types'
import { MainProvider } from 'providers/MainProvider'

import '@/assets/styles/globals.scss'

type TypeAppProps = AppProps & TypeComponentAuthFields

export default function App({ Component, pageProps }: TypeAppProps) {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}
