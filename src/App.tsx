import { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';

function App() {
	const [active, setActive] = useState(true);

	useEffect(() => {
		if (!active) return;
		const timeoutId = setTimeout(() => {
			setActive(false);
		}, 5000);
		return () => clearTimeout(timeoutId);
	}, [active]);

	const props = useSpring({
		transform: active ? 'scale(1)' : 'scale(0)',
		opacity: active ? 1 : 0,
	});

	function handleClose() {
		setActive(false);
	}

	return (
		<PageContent>
			<NotificationWrapper style={props}>
				<NotificationTitle>Try this notification</NotificationTitle>
				<NotificationContent>
					Use this notification in your everyday apps. And give nice clean UI for your
					users.
				</NotificationContent>
				<NotificationFooter>
					<ActionButton onClick={handleClose}>Close</ActionButton>
				</NotificationFooter>
			</NotificationWrapper>
			<button onClick={() => setActive(true)}>Show notification</button>
		</PageContent>
	);
}

const PageContent = styled.main`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100vw;
	background: #dfdfdf;
`;

const NotificationWrapper = styled(animated.div)`
	background: #dfdfdf;
	padding: 1rem;
	min-width: 15rem;
	border-radius: 8px;
	box-shadow: 2px 5px 8px rgba(0, 0, 0, 0.2), -2px -5px 8px rgba(255, 255, 255, 0.883);
	font-size: 0.8rem;
	position: fixed;
	bottom: 10vh;
	right: 5vw;
	max-width: 25rem;
	border: 1px solid rgba(255, 255, 255, 0.472);
`;

const NotificationTitle = styled.h3`
	margin: 0;
	font-size: 1.35em;
`;

const NotificationContent = styled.p`
	margin: 0;
	font-size: 1em;
`;

const NotificationFooter = styled.footer`
	display: flex;
	align-items: center;
	padding-top: 0.5rem;
	flex-direction: row-reverse;
`;

const ActionButton = styled.button`
	outline: none;
	border: none;
	background: #dfdfdf;
	padding: 0.35rem 0.75rem;
	border-radius: 4px;
	font-size: 0.85em;
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2), -2px -2px 8px rgba(255, 255, 255, 0.883);
	transition: box-shadow 0.15s linear;
	&:active {
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2) inset,
			-2px -2px 8px rgba(255, 255, 255, 0.883) inset;
	}
`;

export default App;
