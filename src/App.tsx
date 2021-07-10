import styled from 'styled-components';
function App() {
	return (
		<StyledMain>
			<div className="grid">
				<div className="gridItem">
					<div className="content">
						<h2>Designing a notification In react</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel doloremque
							deleniti laborum quibusdam beatae!
						</p>
					</div>
					<img src="/assets/images/1.jpg" alt="" />
					<div className="overlay"></div>
				</div>
				<div className="gridItem">
					<div className="content">
						<h2>Build a mosaic layout in React</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magni
							perferendis a ipsa.
						</p>
					</div>
					<img src="/assets/images/2.jpg" alt="" />
					<div className="overlay"></div>
				</div>
				<div className="gridItem">
					<div className="content">
						<h2>Lorem ipsum dolor sit amet.</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
							praesentium veniam sunt.
						</p>
					</div>
					<img src="/assets/images/3.jpg" alt="" />
					<div className="overlay"></div>
				</div>
				<div className="gridItem">
					<div className="content">
						<h2>Lorem ipsum dolor sit.</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit
							debitis dicta!
						</p>
					</div>
					<img src="/assets/images/4.jpg" alt="" />
					<div className="overlay"></div>
				</div>
				<div className="gridItem">
					<div className="content">
						<h2>Lorem ipsum dolor sit amet.</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error
							nisi iste!
						</p>
					</div>
					<img src="/assets/images/5.jpg" alt="" />
					<div className="overlay"></div>
				</div>
			</div>
		</StyledMain>
	);
}

const StyledMain = styled.main`
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #141414;
	div.grid {
		display: grid;
		grid-template-areas:
			'box1 box1 box2'
			'box1 box1 box3'
			'box4 box5 box3';
		gap: 1rem;
		width: 80%;
		height: 80%;
	}
	div.gridItem {
		position: relative;
		background-color: black;
		overflow: hidden;
		&:hover img {
			transform: scale(1.2);
		}
		&:hover {
			box-shadow: 0px 3px 22px rgba(0, 0, 0, 0.6);
		}
	}
	div.gridItem:nth-child(1) {
		grid-area: box1;
	}
	div.gridItem:nth-child(2) {
		grid-area: box2;
	}
	div.gridItem:nth-child(3) {
		grid-area: box3;
	}
	div.gridItem:nth-child(4) {
		grid-area: box4;
	}
	div.gridItem:nth-child(5) {
		grid-area: box5;
	}
	img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 0;
		transition: transform 0.3s linear;
	}
	div.content {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 2;
		width: 100%;
		padding: 0 2rem 3rem;
		box-sizing: border-box;
	}
	div.content h2 {
		margin: 0;
		color: white;
		font-size: 1.55rem;
	}
	div.content p {
		color: white;
		margin: 0;
	}
	div.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
	}
	div.gridItem:nth-child(1) div.content h2 {
		font-size: 2.5rem;
	}
`;

export default App;
