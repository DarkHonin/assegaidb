// use strict
class Burger extends React.Component{
	constructor(props){
		super(props)
		document.querySelectorAll(".navbar a").forEach(e=>{
			e.addEventListener("click", this.deactivateDropdown.bind())
		})
	}

	deactivateDropdown(){
		document.querySelector(".subnav").classList.remove("open")
	}

	toggleDropdown(){
		document.querySelector(".subnav").classList.toggle("open")
	}

	render(){
		return <div className="burger" onClick={this.toggleDropdown.bind()}>
			<img src="https://via.placeholder.com/50" />
		</div>
	}
}

ReactDOM.render(
	<Burger />,
	document.getElementById('burger')
  );