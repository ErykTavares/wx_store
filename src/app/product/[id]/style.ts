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
`;
