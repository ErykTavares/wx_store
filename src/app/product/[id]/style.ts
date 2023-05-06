'use client';

import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	align-items: start;
	justify-content: center;
`;

export const Wrapper = styled.div`
	max-width: 1260px;
	width: 100%;
	height: max-content;
	display: flex;
	justify-content: space-between;

	.container-img {
		width: max-content;
		height: auto;
	}

	@media screen and (max-width: 835px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.container-img {
			width: 100%;
			display: flex;
			justify-content: center;
			margin-bottom: 1rem;
		}
	}
`;

export const Content = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: start;

	.title,
	.price {
		font-size: 1.375rem;
		font-height: 600;
	}

	h4 {
		font-size: 1.125rem;
	}

	@media screen and (max-width: 835px) {
		width: 100%;
		padding: 0 1.2rem;
		margin-bottom: 1rem;
	}
`;
