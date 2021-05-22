import React from 'react';
const sayHello =() => {
	console.log("Hello");
};
function App(){
  
  return(
<div>
  <h1>Vîrlan Roxana-Denisa</h1>
  <button onClick={sayHello}> Hello   </button>
</div>
  );

}
export default App;