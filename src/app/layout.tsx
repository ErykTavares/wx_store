'use client';

import '../style/tailwind.css';
import { Roboto } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import { store } from '@/store';
import theme from '@/style/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../style/global';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export const metadata = {
	title: 'test',
	description: 'Generated by create next app'
};

const persistor = persistStore(store);

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<html lang='pt-BR'>
			<body className={roboto.className}>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<StyledComponentsRegistry>
							<ThemeProvider theme={theme}>
								<GlobalStyle />
								{children}
							</ThemeProvider>
						</StyledComponentsRegistry>
					</PersistGate>
				</Provider>
			</body>
		</html>
	);
}
