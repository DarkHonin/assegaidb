

class Layout extends React.Component{
	constructor(props){
		super(props)
		this.owner=props.owner
		this.elem = document.querySelector(`#${this.owner}`)
		this.handleScroll = this.handleScroll.bind(this);
		this.nav = document.querySelector(`.nav[layout='${this.owner}']`)
	}

	handleScroll(e) {
		var dist = this.elem.offsetTop - window.pageYOffset
		if(this.elem && dist >= 0 && dist <= 100) {
			document.querySelectorAll(".nav").forEach(e=>e.classList.remove("active"))
			this.nav.classList.add("active")
			return true
		}else{

			return false
		}
	  }

	render(){
		return ""
	}

	componentDidMount() {
		this.handleScroll()
		window.addEventListener("scroll", this.handleScroll);
	}


}

document.querySelectorAll(".layout").forEach(e=>{
	var c = e.innerHTML
	var id = e.getAttribute("id")
	ReactDOM.render(<Layout owner={id} />, e)
	e.innerHTML += c
})