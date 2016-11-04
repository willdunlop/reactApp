import React from 'react';

class App extends React.Component {
	render() {

		var someStyle = {
			border: 'solid',	
			width:'200px',
			height: 'auto'
		}

		return (
				<div>
					<h1>The Heading</h1>
					<h2>The Content</h2>
					<p>This is content that comes after headings</p>
					<p> JSX allows you to use javascript logic when it is wrapped in curly braces. For example 1 + 1 = {1+1}</p>
					<p>Although you cant us if/else statements, ternary/conditional expressions are available {i == 1 ? 'true' : 'false'}</p>

					<div style = {someStyle}>Styling is achieved by setting a variable before the return() section under render and naming using interpolation in the divs style tag</div>

					
				</div>
			   );
	}
}

export default App;
