import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

type Props = {
	children?: React.ReactNode
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

export const MainProvider: FC<Props> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}
