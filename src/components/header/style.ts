import styled, { css } from 'styled-components';

export const Header = styled.header`
	${({ theme }) => css`
		width: 100%;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: ${theme.colors.dark};
	`}
`;

export const Wrapper = styled.div`
	${({ theme }) => css`
		max-width: 1200px;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 0.5rem;

		h1 {
			color: white;
			font-size: 3rem;
			font-weight: 600;

			span {
				color: ${theme.colors.red};
			}
		}
	`}
`;
