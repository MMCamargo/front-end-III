import styled from 'styled-components'
import { grey } from '@mui/material/colors'

const TextAreaStyled = styled.textarea`
	background-color: #252525;
	border: none;
	caret-color: ${grey[300]};
	color: ${grey[500]};
	font-size: 16px;
	font-weight: 400;
	height: calc(150px - var(--small-spacing));
	resize: none;
	width: 100%;

	:focus {
		outline: none;
	}

	::placeholder {
		color: ${grey[600]};
	}
`

export default TextAreaStyled
