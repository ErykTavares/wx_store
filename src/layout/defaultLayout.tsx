import React from 'react';
import Header from '@/components/header';
import { useSelector } from 'react-redux';
import Loading from '@/components/loading';
import Footer from '@/components/footer';
// import Footer from '@/components/footer';

interface IDefaultProps {
	children: JSX.Element;
}

const DefaultLayout = ({ children }: IDefaultProps): JSX.Element => {
	const loading = useSelector((state: any) => state.loadingReducer.loading as boolean);

	return (
		<main>
			<Header />
			{children}
			<Footer />
			{loading ? <Loading /> : null}
		</main>
	);
};
export default DefaultLayout;
