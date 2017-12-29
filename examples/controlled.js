webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(39);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcEditorMention = __webpack_require__(186);
	
	var _rcEditorMention2 = _interopRequireDefault(_rcEditorMention);
	
	var _draftJs = __webpack_require__(188);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } // use jsx to render html, do not modify simple.html
	
	var originSuggestions = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];
	
	var MentionEditor = function (_React$Component) {
	  _inherits(MentionEditor, _React$Component);
	
	  function MentionEditor() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, MentionEditor);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      suggestions: originSuggestions,
	      defaultValue: null,
	      editorState: (0, _rcEditorMention.toEditorState)('')
	    }, _this.onSearchChange = function (value) {
	      var searchValue = value.toLowerCase();
	      var filtered = originSuggestions.filter(function (suggestion) {
	        return suggestion.toLowerCase().indexOf(searchValue) !== -1;
	      });
	      _this.setState({
	        suggestions: filtered
	      });
	    }, _this.onChange = function (editorState) {
	      _this.setState({
	        editorState: editorState
	      });
	    }, _this.reset = function () {
	      _this.setState({
	        editorState: _this.state.defaultValue
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  MentionEditor.prototype.render = function render() {
	    var _state = this.state,
	        suggestions = _state.suggestions,
	        editorState = _state.editorState;
	
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'button',
	        { onClick: this.reset },
	        ' reset '
	      ),
	      _react2.default.createElement(_rcEditorMention2.default, {
	        style: { width: 300, height: 200 },
	        ref: 'mention',
	        onSearchChange: this.onSearchChange,
	        defaultValue: this.state.defaultValue,
	        value: editorState,
	        onChange: this.onChange,
	        suggestions: suggestions, prefix: '@'
	      })
	    );
	  };
	
	  return MentionEditor;
	}(_react2.default.Component);
	
	_reactDom2.default.render(_react2.default.createElement(
	  'div',
	  null,
	  _react2.default.createElement(
	    'p',
	    null,
	    ' you can @ one of afc163, benjycui, yiminghe, jljsj33, simaQ, YuhangGe, dqaria, RaoHai'
	  ),
	  _react2.default.createElement(MentionEditor, null)
	), document.getElementById('__react-content'));

/***/ })
]);
//# sourceMappingURL=controlled.js.map