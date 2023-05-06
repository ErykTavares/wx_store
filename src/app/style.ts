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
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	place-items: center;
	gap: 1rem;

	@media screen and (max-width: 1276px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media screen and (max-width: 965px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (max-width: 640px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
