'use client';

import ProductCard from '@/components/productCard';
import DefaultLayout from '@/layout/defaultLayout';
import api from '@/services/api';
import React, { useCallback, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import * as S from './style';

const Home = (): JSX.Element => {
	const [products, setProducts] = useState<DProduct.IProduct[]>([]);

	const productsGet = useCallback(async (): Promise<void> => {
		await api('/products')
			.then(({ data }) => {
				setProducts(data);
			})
			.catch((err) => {
				void Swal.fire(err?.response?.data?.message || 'Something went wrong', '', 'error');
			});
	}, []);

	useEffect(() => {
		void productsGet();
	}, []);

	return (
		<DefaultLayout>
			<S.Container>
				<S.Wrapper className='pt-8'>
					{products?.map((item) => (
						<ProductCard key={item.id} product={item} />
					))}
				</S.Wrapper>
			</S.Container>
		</DefaultLayout>
	);
};
export default Home;
