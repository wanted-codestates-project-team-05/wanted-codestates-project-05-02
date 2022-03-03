import React, { useState } from 'react';
import styled from 'styled-components';
import { SearchInput } from './SearchInput';
import { useNavigate } from 'react-router-dom';

export const Header = () => {

	const [currentNav, setCurrentNav] = useState('home' | 'rank' | 'kart' | 'track');
	const navigate = useNavigate();

	const handleActive = (nav) => {
		setCurrentNav(nav)
		navigate("/"+nav)
	}

	return (
		<Container>
			<InnerContainer>
				<Contents className={currentNav === 'home' ? 'active' : ''} onClick={() => handleActive('home')}>
					<span>홈</span>
					<div className='line'/>
					<div className='line-right'/>
				</Contents>
				<Contents className={currentNav === 'rank' ? 'active' : ''}  onClick={() => handleActive('rank')}>
					<span>랭킹</span>
					<div className='line'/>
					<div className='line-right'/>
				</Contents>
				<Contents className={currentNav === 'kart' ? 'active' : ''}  onClick={() => handleActive('kart')}>
					<span>카트</span>
					<div className='line'/>
					<div className='line-right'/>
				</Contents>
				<Contents className={currentNav === 'track' ? 'active' : ''} onClick={() => handleActive('track')}>
					<span>트랙</span>
					<div className='line'/>
					<div className='line-right'/>
				</Contents>
				<div style={{marginLeft: 'auto'}}>
					<SearchInput/>
				</div>
			</InnerContainer>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	height: 3.4375rem;
	background-color: #005fcc;
`

const InnerContainer = styled.div`
	width: 62.5rem;
	height: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;

	.active {
		opacity: 1 !important;

		.line {
			width: 100%;
		}
	}
`

const Contents = styled.div`
	width: 80px;
	color: #fff;
	line-height: 55px;
	display: inline-block;
	text-align: center;
	font-size: 14px;
	opacity: 0.5;
	margin-right: 40px;
	position: relative;
	animation-fill-mode: forwards;


	&:hover {
		opacity: 1;
		transition: opacity 0.25s ease-in-out;
		
		.line {
			width: 100%;
			transition: width 0.25s linear;
		}
		.line-right {
			width: 0%;
			transition: width 0.25s linear;
		}
	}

	.line {
		width: 0%;
		height: 6px;
		background-color: #fff;
		position: absolute;
		bottom: 0;
		left: 0;
	}

	.line-right {
		width: 100%;
		height: 6px;
		background-color: transparent;
		position: absolute;
		border: 0;
		left: 0;
	}
`

