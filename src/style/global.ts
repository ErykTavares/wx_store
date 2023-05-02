/* eslint-disable @typescript-eslint/no-unused-vars */
import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
     ${({ theme }) => css`
				* {
					margin: 0;
					padding: 0;
					box-sizing: border-box;
					list-style-type: none;
					text-decoration: none;
				}

				a,
				a:hover,
				ul,
				li,
				button {
					all: unset;
				}

				main {
					width: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				section {
					width: 100%;
					min-height: 100vh;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				img {
					max-width: 100%;
					height: auto;
				}
			`}
`;
