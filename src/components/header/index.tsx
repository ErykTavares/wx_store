import Link from 'next/link';
import React from 'react';
import * as S from './style';

const Header = (): JSX.Element => (
	<S.Header>
		<S.Wrapper>
			<h1>
				<Link href='/'>
					<span>WX</span> Store
				</Link>
			</h1>
		</S.Wrapper>
	</S.Header>
);
export default Header;
