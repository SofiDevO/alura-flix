import NavBar from "./NavBar";
import styled from "styled-components";

const Header = () => {
	const HeaderContainer = styled.header`
		width: 100%;
		height: 94px;
		flex-shrink: 0;
		border: 1px solid #000;
		background: var(----color-black-dark, rgba(0, 0, 0, 0.9));
		box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	`;
	return (
		<HeaderContainer className="header">
			<NavBar />
		</HeaderContainer>
	);
};

export default Header;
