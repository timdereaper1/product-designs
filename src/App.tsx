import Tilt from 'react-parallax-tilt';
import styled from 'styled-components';

function App() {
	return (
		<MainPage>
			<StyledTilt>
				<Card>
					<WorldMap src="/assets/images/svgs/world-map.svg" alt="world-map" />
					<VisaFigure>
						<Visa src="/assets/images/visa.png" alt="visa" />
					</VisaFigure>
					<ChipFigure>
						<Chip src="/assets/images/chip.png" alt="chip" />
					</ChipFigure>
					<AccountNumber>
						<span>0123</span>
						<span>4567</span>
						<span>8901</span>
						<span>2345</span>
					</AccountNumber>
					<AccountInfo>
						<MonthYear>month/year</MonthYear>
						<DateWrapper>
							<DateText>good thru</DateText>
							<i className="fas fa-caret-right"></i>
							<ExpiryDate>06/16</ExpiryDate>
						</DateWrapper>
					</AccountInfo>
					<AccountName>David Morrison</AccountName>
				</Card>
			</StyledTilt>
		</MainPage>
	);
}

const MainPage = styled.main`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background: #0c0c1f;
	background-image: url('/assets/images/background.jpg');
	background-repeat: no-repeat;
	background-size: cover;
`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 1rem;
	border-radius: 16px;
	padding: 1.5rem 1.75rem;
	gap: 0.5rem;
	background: rgba(255, 255, 255, 0.1);
	border-top: 1px solid rgba(255, 255, 255, 0.5);
	border-left: 1px solid rgba(255, 255, 255, 0.5);
	position: relative;
	backdrop-filter: blur(10px);
	box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.2);
`;

const WorldMap = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	z-index: -1;
	transform: translate(-50%, -50%);
	width: 100%;
	opacity: 0.1;
`;

const VisaFigure = styled.figure`
	text-align: end;
	margin: 0;
	margin-bottom: 1.2rem;
`;

const Visa = styled.img`
	width: 5rem;
	height: auto;
`;

const ChipFigure = styled(VisaFigure)`
	text-align: left;
	margin-bottom: 0;
`;

const Chip = styled.img`
	width: 4rem;
	height: 2.5rem;
`;

const AccountNumber = styled.h1`
	margin: 0;
	font-family: 'Orbitron', sans-serif;
	display: flex;
	gap: 1rem;
	font-size: 2em;
	font-weight: bold;
`;

const AccountInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const MonthYear = styled.h4`
	margin: 0;
	text-transform: uppercase;
	font-size: 0.6rem;
`;

const DateWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

const DateText = styled(MonthYear)`
	max-width: 3em;
`;

const ExpiryDate = styled.h2`
	margin: 0;
	font-family: 'Orbitron', sans-serif;
	font-size: 1.7em;
`;

const AccountName = styled.h2`
	margin: 0;
	text-transform: uppercase;
	font-size: 1.5em;
	font-family: 'Orbitron', sans-serif;
`;

const StyledTilt = styled(Tilt)`
	backdrop-filter: blur(10px);
`;

export default App;
