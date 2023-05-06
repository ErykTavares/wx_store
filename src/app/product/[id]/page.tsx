'use client';

import useLoading from '@/hooks/useLoading';
import DefaultLayout from '@/layout/defaultLayout';
import api from '@/services/api';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import * as S from './style';

interface IViewProps {
	params: { id: string };
}

const View = ({ params }: IViewProps): JSX.Element => {
	const [product, setProduct] = useState<DProduct.IProduct>();

	const { showLoading, hiddenLoading } = useLoading();

	const productGet = useCallback(async (): Promise<void> => {
		showLoading();
		await api(`/products/${params.id}`)
			.then(({ data }) => {
				setProduct(data);
			})
			.catch((err) => {
				void Swal.fire(err?.response?.data?.message || 'Something went wrong', '', 'error');
			});
		hiddenLoading();
	}, [params]);

	useEffect(() => {
		void productGet();
	}, [productGet]);

	if (!product) return <div />;

	return (
		<DefaultLayout>
			<S.Container>
				<S.Wrapper className='pt-8'>
					<div className='container-img '>
						<Image src={product.image} alt={product.title} width={400} height={100} />
					</div>
					<S.Content>
						<h3 className='title'>{product.title}</h3>
						<h3 className='price'>${product.price}</h3>
						<div className='mt-2'>
							<h4>Category</h4>
							<p>{product.category}</p>
						</div>
						<div className='mt-2'>
							<h4>Description</h4>
							<p>{product.description}</p>
						</div>
					</S.Content>
				</S.Wrapper>
			</S.Container>
		</DefaultLayout>
	);
};
export default View;
