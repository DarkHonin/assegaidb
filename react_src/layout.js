

class Layout extends React.Component{
	constructor(props){
		super(props)
		console.log(props)
		this.owner=props.owner
		this.elem = document.querySelector(`#${this.owner}`)
		this.handleScroll = this.handleScroll.bind(this);
	}

	handleScroll(e) {
		if(this.elem && this.elem.offsetTop <= window.pageYOffset) {
			e.stopImmediatePropagation()
			if(history.pushState) {
				history.pushState(null, null, "#" + this.owner);
			}
			else {
				location.hash = "#" + this.owner;
			}
			return true
		}
		return false
	  }

	render(){
		return ""
	}

	componentDidMount() {
		var fn = this.handleScroll
		var timeout;
		window.addEventListener("scroll", (e)=>{

			if(!timeout){
				clearTimeout(timeout)
				timeout = setTimeout(()=>{clearTimeout(timeout); timeout = undefined; if(fn(e)) window.dispatchEvent(new Event("hashchange"));}, 500)
			}
		});
	}


}

document.querySelectorAll(".layout").forEach(e=>{
	var c = e.innerHTML
	var id = e.getAttribute("id")
	ReactDOM.render(<Layout owner={id} />, e)
	e.innerHTML += c
})