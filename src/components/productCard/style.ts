import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	${({ theme }) => css`
		width: 300px;
		height: 400px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		padding: 1.2rem;
		box-shadow: ${theme.boxShadow};
		border-radius: 0.5rem;
		cursor: pointer;
	`}
`;

export const ContainerImg = styled.div`
	width: 100%;
	height: 200px;

	img {
		object-fit: contain;
	}
`;

export const Content = styled.div`
	${({ theme }) => css`
		width: 100%;
		height: 100px;

		.title {
			width: 100%;
			height: 48px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;

			@supports (-webkit-line-clamp: 2) {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: initial;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
		}

		.price {
			color: ${theme.colors.red};
		}
	`}
`;
