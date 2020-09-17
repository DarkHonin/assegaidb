const pads = document.querySelectorAll(".pad")

var bump_check = new Event("bump_check")
var section_activate = new Event("section_activate")
var section_deactivate = new Event("section_deactivate")

const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

// Pad edge detect hook
pads.forEach(element => {
	element.addEventListener("bump_check", pad_edge_detect)
	element.dispatchEvent(bump_check)
});




function pad_edge_detect(e){
	var name = this.getAttribute("__name")
	if(!name) return;

	var top = (window.pageYOffset + this.getBoundingClientRect().top) - e.last_scroll
	var height = ((vh + top) * (1/4))
	// console.log(name, top, height)
	var active = this.hasAttribute("active")
	if(top < height && (height > 50)){
		this.setAttribute("active", "")
		if(!active){
			this.dispatchEvent(section_activate, {sectionName : name})
		}
		// lock on and scroll too
	}else{
		if(active){
			this.dispatchEvent(section_deactivate, {sectionName : name})
		}
		this.removeAttribute("active")
	}
}

// ///////////////////////////////
// Window scroll event hook

let last_known_scroll_position = 0;
let ticking = false;

window.addEventListener("scroll", ()=>{
	bump_check.last_scroll = last_known_scroll_position = window.scrollY;
	if (!ticking) {
	  window.requestAnimationFrame(function() {
		pads.forEach(element => {
			element.dispatchEvent(bump_check)
		});
		ticking = false;
	  });
	  ticking = true;
	}
})


function section_activate_fn(e){
	console.log(this, "active")
}

function section_deactivate_fn(e){
	console.log(this, "inactive")
}

document.querySelectorAll(".section").forEach((e)=>{
	e.addEventListener("section_activate", section_activate_fn)
	e.addEventListener("section_deactivate", section_deactivate_fn)
})



///////////////
