import React, { useState } from 'react';


const Example=()=> {
    const [change, setChange] = useState(true);
return(
	
	
		
		<div>
		<button onClick = {() => setChange(!change)}>
			Click Here!
		</button>
		{change?
			<Example data="Welcome to GeeksforGeeks"/>:
			<Example data="A Computer Science Portal for Geeks"/>}
		</div>
		);
	}

export default Example;
