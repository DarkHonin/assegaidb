var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// use strict
var Burger = function (_React$Component) {
	_inherits(Burger, _React$Component);

	function Burger(props) {
		_classCallCheck(this, Burger);

		var _this = _possibleConstructorReturn(this, (Burger.__proto__ || Object.getPrototypeOf(Burger)).call(this, props));

		document.querySelectorAll(".navbar a").forEach(function (e) {
			e.addEventListener("click", _this.deactivateDropdown.bind());
		});
		return _this;
	}

	_createClass(Burger, [{
		key: "deactivateDropdown",
		value: function deactivateDropdown() {
			document.querySelector(".subnav").classList.remove("open");
		}
	}, {
		key: "toggleDropdown",
		value: function toggleDropdown() {
			document.querySelector(".subnav").classList.toggle("open");
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "burger", onClick: this.toggleDropdown.bind() },
				React.createElement("img", { src: "https://via.placeholder.com/50" })
			);
		}
	}]);

	return Burger;
}(React.Component);

ReactDOM.render(React.createElement(Burger, null), document.getElementById('burger'));