import { createGlobalStyle } from 'styled-components';
import { baseTheme } from './theme';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	body {
	font-family: 'Roboto', sans-serif;
	font-style: normal;
	font-weight: 400;
  margin: 0;
  background-color: ${baseTheme.colors.white};
  color: ${baseTheme.colors.black};
	}

	code {
		font-family: 'Roboto', sans-serif;
	font-style: normal;
	font-weight: 400;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin-top: 0;
		margin-bottom: 0;
	}

	h1, h2 {
		text-align: center;
	}

	ul {
		margin-top: 0;
		margin-bottom: 0;
		padding-left: 0;
		text-decoration: none;
	}

	img {
		display: block;
		max-width: 100%;
		height: auto;
	}

	input,
	button,
	label {
		display: block;
	}
`;