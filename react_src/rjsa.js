// use strict
var scrollEventLock = false

class App extends React.Component{
	constructor(props){
		super(props)
		window.addEventListener("hashchange", this.hashChange.bind())
	}

	hashChange(e){
		var c = document.createElement("a")
		c.href = window.location.hash

		document.querySelector(".pageLabel").setAttribute( "_activetab", c.hash)
		document.querySelectorAll(`.nav.active`).forEach((e)=>{e.classList.remove("active")})
		document.querySelector(`[href='${c.hash}']`).classList.add("active")
	}

	render(){
		return <div className="app"></div>
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
  );