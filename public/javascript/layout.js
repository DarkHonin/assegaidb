var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_React$Component) {
	_inherits(Layout, _React$Component);

	function Layout(props) {
		_classCallCheck(this, Layout);

		var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));

		console.log(props);
		_this.owner = props.owner;
		_this.elem = document.querySelector("#" + _this.owner);
		_this.handleScroll = _this.handleScroll.bind(_this);
		return _this;
	}

	_createClass(Layout, [{
		key: "handleScroll",
		value: function handleScroll(e) {
			if (this.elem && this.elem.offsetTop <= window.pageYOffset) {
				e.stopImmediatePropagation();
				if (history.pushState) {
					history.pushState(null, null, "#" + this.owner);
				} else {
					location.hash = "#" + this.owner;
				}
				return true;
			}
			return false;
		}
	}, {
		key: "render",
		value: function render() {
			return "";
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var fn = this.handleScroll;
			var timeout;
			window.addEventListener("scroll", function (e) {

				if (!timeout) {
					clearTimeout(timeout);
					timeout = setTimeout(function () {
						clearTimeout(timeout);timeout = undefined;if (fn(e)) window.dispatchEvent(new Event("hashchange"));
					}, 500);
				}
			});
		}
	}]);

	return Layout;
}(React.Component);

document.querySelectorAll(".layout").forEach(function (e) {
	var c = e.innerHTML;
	var id = e.getAttribute("id");
	ReactDOM.render(React.createElement(Layout, { owner: id }), e);
	e.innerHTML += c;
});