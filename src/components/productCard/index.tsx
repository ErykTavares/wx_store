import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import * as S from './style';

interface IProductCardProps {
	product: DProduct.IProduct;
}

const ProductCard = ({ product }: IProductCardProps): JSX.Element => (
	<Link href={`product/${product.id}`}>
		<S.Wrapper>
			<S.ContainerImg className='flex justify-center'>
				<Image src={product.image} alt={product.title} width={150} height={100} />
			</S.ContainerImg>
			<S.Content>
				<h4 className='title'>{product.title}</h4>
				<h5 className='price'>$ {product.price}</h5>
			</S.Content>
		</S.Wrapper>
	</Link>
);
export default ProductCard;
