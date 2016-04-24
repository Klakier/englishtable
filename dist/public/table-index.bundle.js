/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _Root = __webpack_require__(3);
	
	var _Root2 = _interopRequireDefault(_Root);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _reactDom.render)(_react2.default.createElement(_Root2.default, null), document.getElementById('root')); /// <reference path="../../../typings/main.d.ts" />
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvdGFibGUtaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQSxzQkFDSSxtREFESixFQUVJLFNBQVMsY0FBVCxDQUF3QixNQUF4QixDQUZKIiwiZmlsZSI6InRhYmxlLWluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21hbmllay9wcm9qZWN0L29wZW5zaGlmdC9lbmdsaXNodGFibGUiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9tYWluLmQudHNcIiAvPlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSb290IGZyb20gJy4vY29udGFpbmVycy9Sb290JztcblxucmVuZGVyKFxuICAgIDxSb290IC8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7XG4iXX0=

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(4);
	
	var _configureStore = __webpack_require__(29);
	
	var _configureStore2 = _interopRequireDefault(_configureStore);
	
	var _TableApp = __webpack_require__(51);
	
	var _TableApp2 = _interopRequireDefault(_TableApp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /// <reference path="./../../../../typings/main.d.ts" />
	
	var store = (0, _configureStore2.default)();
	
	var Root = function (_Component) {
	    _inherits(Root, _Component);
	
	    function Root() {
	        _classCallCheck(this, Root);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Root).apply(this, arguments));
	    }
	
	    _createClass(Root, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _reactRedux.Provider,
	                { store: store },
	                _react2.default.createElement(_TableApp2.default, null)
	            );
	        }
	    }]);
	
	    return Root;
	}(_react.Component);

	exports.default = Root;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvY29udGFpbmVycy9Sb290LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFFBQVEsK0JBQVI7O0lBRWU7Ozs7Ozs7Ozs7O2lDQUNSO0FBQ0wsbUJBQ0k7O2tCQUFVLE9BQU8sS0FBUCxFQUFWO2dCQUNJLHVEQURKO2FBREosQ0FESzs7OztXQURRIiwiZmlsZSI6IlJvb3QuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbWFuaWVrL3Byb2plY3Qvb3BlbnNoaWZ0L2VuZ2xpc2h0YWJsZSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLy4uLy4uLy4uLy4uL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4uL2NvbmZpZ3VyZVN0b3JlJztcbmltcG9ydCBUYWJsZUFwcCBmcm9tICcuL1RhYmxlQXBwJztcblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb290IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgICAgICA8VGFibGVBcHAgLz5cbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;
	
	var _Provider = __webpack_require__(5);
	
	var _Provider2 = _interopRequireDefault(_Provider);
	
	var _connect = __webpack_require__(9);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports["default"] = undefined;
	
	var _react = __webpack_require__(1);
	
	var _storeShape = __webpack_require__(7);
	
	var _storeShape2 = _interopRequireDefault(_storeShape);
	
	var _warning = __webpack_require__(8);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;
	
	  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}
	
	var Provider = function (_Component) {
	  _inherits(Provider, _Component);
	
	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };
	
	  function Provider(props, context) {
	    _classCallCheck(this, Provider);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	    _this.store = props.store;
	    return _this;
	  }
	
	  Provider.prototype.render = function render() {
	    var children = this.props.children;
	
	    return _react.Children.only(children);
	  };
	
	  return Provider;
	}(_react.Component);
	
	exports["default"] = Provider;
	
	if (process.env.NODE_ENV !== 'production') {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;
	
	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}
	
	Provider.propTypes = {
	  store: _storeShape2["default"].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2["default"].isRequired
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	exports["default"] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that you can use this stack
	    // to find the callsite that caused this warning to fire.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	exports["default"] = connect;
	
	var _react = __webpack_require__(1);
	
	var _storeShape = __webpack_require__(7);
	
	var _storeShape2 = _interopRequireDefault(_storeShape);
	
	var _shallowEqual = __webpack_require__(10);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _wrapActionCreators = __webpack_require__(11);
	
	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);
	
	var _warning = __webpack_require__(8);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _isPlainObject = __webpack_require__(23);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _hoistNonReactStatics = __webpack_require__(27);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	var _invariant = __webpack_require__(28);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};
	
	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}
	
	var errorObject = { value: null };
	function tryCatch(fn, ctx) {
	  try {
	    return fn.apply(ctx);
	  } catch (e) {
	    errorObject.value = e;
	    return errorObject;
	  }
	}
	
	// Helps track hot reloading.
	var nextVersion = 0;
	
	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	  var shouldSubscribe = Boolean(mapStateToProps);
	  var mapState = mapStateToProps || defaultMapStateToProps;
	
	  var mapDispatch = undefined;
	  if (typeof mapDispatchToProps === 'function') {
	    mapDispatch = mapDispatchToProps;
	  } else if (!mapDispatchToProps) {
	    mapDispatch = defaultMapDispatchToProps;
	  } else {
	    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
	  }
	
	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var _options$pure = options.pure;
	  var pure = _options$pure === undefined ? true : _options$pure;
	  var _options$withRef = options.withRef;
	  var withRef = _options$withRef === undefined ? false : _options$withRef;
	
	  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;
	
	  // Helps track hot reloading.
	  var version = nextVersion++;
	
	  return function wrapWithConnect(WrappedComponent) {
	    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';
	
	    function checkStateShape(props, methodName) {
	      if (!(0, _isPlainObject2["default"])(props)) {
	        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
	      }
	    }
	
	    function computeMergedProps(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      if (process.env.NODE_ENV !== 'production') {
	        checkStateShape(mergedProps, 'mergeProps');
	      }
	      return mergedProps;
	    }
	
	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);
	
	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };
	
	      function Connect(props, context) {
	        _classCallCheck(this, Connect);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	        _this.version = version;
	        _this.store = props.store || context.store;
	
	        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));
	
	        var storeState = _this.store.getState();
	        _this.state = { storeState: storeState };
	        _this.clearCache();
	        return _this;
	      }
	
	      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
	        if (!this.finalMapStateToProps) {
	          return this.configureFinalMapState(store, props);
	        }
	
	        var state = store.getState();
	        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);
	
	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(stateProps, 'mapStateToProps');
	        }
	        return stateProps;
	      };
	
	      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
	        var mappedState = mapState(store.getState(), props);
	        var isFactory = typeof mappedState === 'function';
	
	        this.finalMapStateToProps = isFactory ? mappedState : mapState;
	        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;
	
	        if (isFactory) {
	          return this.computeStateProps(store, props);
	        }
	
	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedState, 'mapStateToProps');
	        }
	        return mappedState;
	      };
	
	      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
	        if (!this.finalMapDispatchToProps) {
	          return this.configureFinalMapDispatch(store, props);
	        }
	
	        var dispatch = store.dispatch;
	
	        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);
	
	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(dispatchProps, 'mapDispatchToProps');
	        }
	        return dispatchProps;
	      };
	
	      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
	        var mappedDispatch = mapDispatch(store.dispatch, props);
	        var isFactory = typeof mappedDispatch === 'function';
	
	        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;
	
	        if (isFactory) {
	          return this.computeDispatchProps(store, props);
	        }
	
	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedDispatch, 'mapDispatchToProps');
	        }
	        return mappedDispatch;
	      };
	
	      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	        var nextStateProps = this.computeStateProps(this.store, this.props);
	        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
	          return false;
	        }
	
	        this.stateProps = nextStateProps;
	        return true;
	      };
	
	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }
	
	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };
	
	      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
	          return false;
	        }
	
	        this.mergedProps = nextMergedProps;
	        return true;
	      };
	
	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };
	
	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };
	
	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };
	
	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };
	
	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
	          this.haveOwnPropsChanged = true;
	        }
	      };
	
	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	        this.clearCache();
	      };
	
	      Connect.prototype.clearCache = function clearCache() {
	        this.dispatchProps = null;
	        this.stateProps = null;
	        this.mergedProps = null;
	        this.haveOwnPropsChanged = true;
	        this.hasStoreStateChanged = true;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	        this.renderedElement = null;
	        this.finalMapDispatchToProps = null;
	        this.finalMapStateToProps = null;
	      };
	
	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }
	
	        var storeState = this.store.getState();
	        var prevStoreState = this.state.storeState;
	        if (pure && prevStoreState === storeState) {
	          return;
	        }
	
	        if (pure && !this.doStatePropsDependOnOwnProps) {
	          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
	          if (!haveStatePropsChanged) {
	            return;
	          }
	          if (haveStatePropsChanged === errorObject) {
	            this.statePropsPrecalculationError = errorObject.value;
	          }
	          this.haveStatePropsBeenPrecalculated = true;
	        }
	
	        this.hasStoreStateChanged = true;
	        this.setState({ storeState: storeState });
	      };
	
	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');
	
	        return this.refs.wrappedInstance;
	      };
	
	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged;
	        var hasStoreStateChanged = this.hasStoreStateChanged;
	        var haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated;
	        var statePropsPrecalculationError = this.statePropsPrecalculationError;
	        var renderedElement = this.renderedElement;
	
	        this.haveOwnPropsChanged = false;
	        this.hasStoreStateChanged = false;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	
	        if (statePropsPrecalculationError) {
	          throw statePropsPrecalculationError;
	        }
	
	        var shouldUpdateStateProps = true;
	        var shouldUpdateDispatchProps = true;
	        if (pure && renderedElement) {
	          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
	          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	        }
	
	        var haveStatePropsChanged = false;
	        var haveDispatchPropsChanged = false;
	        if (haveStatePropsBeenPrecalculated) {
	          haveStatePropsChanged = true;
	        } else if (shouldUpdateStateProps) {
	          haveStatePropsChanged = this.updateStatePropsIfNeeded();
	        }
	        if (shouldUpdateDispatchProps) {
	          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	        }
	
	        var haveMergedPropsChanged = true;
	        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	        } else {
	          haveMergedPropsChanged = false;
	        }
	
	        if (!haveMergedPropsChanged && renderedElement) {
	          return renderedElement;
	        }
	
	        if (withRef) {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
	        }
	
	        return this.renderedElement;
	      };
	
	      return Connect;
	    }(_react.Component);
	
	    Connect.displayName = connectDisplayName;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _storeShape2["default"]
	    };
	    Connect.propTypes = {
	      store: _storeShape2["default"]
	    };
	
	    if (process.env.NODE_ENV !== 'production') {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }
	
	        // We are hot reloading!
	        this.version = version;
	        this.trySubscribe();
	        this.clearCache();
	      };
	    }
	
	    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }
	
	  return true;
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = wrapActionCreators;
	
	var _redux = __webpack_require__(12);
	
	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;
	
	var _createStore = __webpack_require__(13);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _combineReducers = __webpack_require__(18);
	
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	
	var _bindActionCreators = __webpack_require__(20);
	
	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
	
	var _applyMiddleware = __webpack_require__(21);
	
	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
	
	var _compose = __webpack_require__(22);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	var _warning = __webpack_require__(19);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}
	
	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}
	
	exports.createStore = _createStore2["default"];
	exports.combineReducers = _combineReducers2["default"];
	exports.bindActionCreators = _bindActionCreators2["default"];
	exports.applyMiddleware = _applyMiddleware2["default"];
	exports.compose = _compose2["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports["default"] = createStore;
	
	var _isPlainObject = __webpack_require__(14);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};
	
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, initialState, enhancer) {
	  if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = initialState;
	    initialState = undefined;
	  }
	
	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }
	
	    return enhancer(createStore)(reducer, initialState);
	  }
	
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = initialState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }
	
	    var isSubscribed = true;
	
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      isSubscribed = false;
	
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2["default"])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }
	
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }
	
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  };
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(15),
	    isHostObject = __webpack_require__(16),
	    isObjectLike = __webpack_require__(17);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object,
	 *  else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}
	
	module.exports = isPlainObject;


/***/ },
/* 15 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;
	
	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	function getPrototype(value) {
	  return nativeGetPrototype(Object(value));
	}
	
	module.exports = getPrototype;


/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	module.exports = isHostObject;


/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports["default"] = combineReducers;
	
	var _createStore = __webpack_require__(13);
	
	var _isPlainObject = __webpack_require__(14);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _warning = __webpack_require__(19);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
	
	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}
	
	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';
	
	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }
	
	  if (!(0, _isPlainObject2["default"])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }
	
	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key);
	  });
	
	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}
	
	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });
	
	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }
	
	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}
	
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);
	
	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }
	
	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];
	
	    if (sanityError) {
	      throw sanityError;
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action);
	      if (warningMessage) {
	        (0, _warning2["default"])(warningMessage);
	      }
	    }
	
	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that you can use this stack
	    // to find the callsite that caused this warning to fire.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}
	
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }
	
	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }
	
	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports["default"] = applyMiddleware;
	
	var _compose = __webpack_require__(22);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  return function (createStore) {
	    return function (reducer, initialState, enhancer) {
	      var store = createStore(reducer, initialState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];
	
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);
	
	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */
	
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  return function () {
	    if (funcs.length === 0) {
	      return arguments.length <= 0 ? undefined : arguments[0];
	    }
	
	    var last = funcs[funcs.length - 1];
	    var rest = funcs.slice(0, -1);
	
	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(24),
	    isHostObject = __webpack_require__(25),
	    isObjectLike = __webpack_require__(26);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object,
	 *  else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}
	
	module.exports = isPlainObject;


/***/ },
/* 24 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;
	
	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	function getPrototype(value) {
	  return nativeGetPrototype(Object(value));
	}
	
	module.exports = getPrototype;


/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	module.exports = isHostObject;


/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 27 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';
	
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};
	
	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent) {
	    var keys = Object.getOwnPropertyNames(sourceComponent);
	    for (var i=0; i<keys.length; ++i) {
	        if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]]) {
	            try {
	                targetComponent[keys[i]] = sourceComponent[keys[i]];
	            } catch (error) {
	
	            }
	        }
	    }
	
	    return targetComponent;
	};


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = configureStore;
	
	var _redux = __webpack_require__(12);
	
	var _reduxLogger = __webpack_require__(30);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _reducer = __webpack_require__(31);
	
	var _reducer2 = _interopRequireDefault(_reducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var loggerMiddleware = (0, _reduxLogger2.default)();
	
	function configureStore() {
	    return (0, _redux.createStore)(_reducer2.default, {}, (0, _redux.compose)((0, _redux.applyMiddleware)(loggerMiddleware), window.devToolsExtension ? window.devToolsExtension() : function (f) {
	        return f;
	    }));
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvY29uZmlndXJlU3RvcmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBTXdCOztBQU54Qjs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNLG1CQUFtQiw0QkFBbkI7O0FBRVMsU0FBUyxjQUFULEdBQTBCO0FBQ3JDLFdBQU8sMkNBRUgsRUFGRyxFQUdILG9CQUNJLDRCQUFpQixnQkFBakIsQ0FESixFQUVJLE9BQU8saUJBQVAsR0FBMkIsT0FBTyxpQkFBUCxFQUEzQixHQUF3RDtlQUFLO0tBQUwsQ0FMekQsQ0FBUCxDQURxQztDQUExQiIsImZpbGUiOiJjb25maWd1cmVTdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYW5pZWsvcHJvamVjdC9vcGVuc2hpZnQvZW5nbGlzaHRhYmxlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBjcmVhdGVMb2dnZXIgZnJvbSAncmVkdXgtbG9nZ2VyJztcbmltcG9ydCB0YWJsZUFwcCBmcm9tICcuL3JlZHVjZXInO1xuXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gY3JlYXRlTG9nZ2VyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKCkge1xuICAgIHJldHVybiBjcmVhdGVTdG9yZShcbiAgICAgICAgdGFibGVBcHAsIFxuICAgICAgICB7fSxcbiAgICAgICAgY29tcG9zZShcbiAgICAgICAgICAgIGFwcGx5TWlkZGxld2FyZSggbG9nZ2VyTWlkZGxld2FyZSApLFxuICAgICAgICAgICAgd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uID8gd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uKCkgOiBmID0+IGZcbiAgICAgICAgKSk7XG59Il19

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var repeat = function repeat(str, times) {
	  return new Array(times + 1).join(str);
	};
	var pad = function pad(num, maxLength) {
	  return repeat("0", maxLength - num.toString().length) + num;
	};
	var formatTime = function formatTime(time) {
	  return "@ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
	};
	
	// Use the new performance api to get better precision if available
	var timer = typeof performance !== "undefined" && typeof performance.now === "function" ? performance : Date;
	
	/**
	 * parse the level option of createLogger
	 *
	 * @property {string | function | object} level - console[level]
	 * @property {object} action
	 * @property {array} payload
	 * @property {string} type
	 */
	
	function getLogLevel(level, action, payload, type) {
	  switch (typeof level === "undefined" ? "undefined" : _typeof(level)) {
	    case "object":
	      return typeof level[type] === "function" ? level[type].apply(level, _toConsumableArray(payload)) : level[type];
	    case "function":
	      return level(action);
	    default:
	      return level;
	  }
	}
	
	/**
	 * Creates logger with followed options
	 *
	 * @namespace
	 * @property {object} options - options for logger
	 * @property {string | function | object} options.level - console[level]
	 * @property {boolean} options.duration - print duration of each action?
	 * @property {boolean} options.timestamp - print timestamp with each action?
	 * @property {object} options.colors - custom colors
	 * @property {object} options.logger - implementation of the `console` API
	 * @property {boolean} options.logErrors - should errors in action execution be caught, logged, and re-thrown?
	 * @property {boolean} options.collapsed - is group collapsed?
	 * @property {boolean} options.predicate - condition which resolves logger behavior
	 * @property {function} options.stateTransformer - transform state before print
	 * @property {function} options.actionTransformer - transform action before print
	 * @property {function} options.errorTransformer - transform error before print
	 */
	
	function createLogger() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var _options$level = options.level;
	  var level = _options$level === undefined ? "log" : _options$level;
	  var _options$logger = options.logger;
	  var logger = _options$logger === undefined ? console : _options$logger;
	  var _options$logErrors = options.logErrors;
	  var logErrors = _options$logErrors === undefined ? true : _options$logErrors;
	  var collapsed = options.collapsed;
	  var predicate = options.predicate;
	  var _options$duration = options.duration;
	  var duration = _options$duration === undefined ? false : _options$duration;
	  var _options$timestamp = options.timestamp;
	  var timestamp = _options$timestamp === undefined ? true : _options$timestamp;
	  var transformer = options.transformer;
	  var _options$stateTransfo = options.stateTransformer;
	  var // deprecated
	  stateTransformer = _options$stateTransfo === undefined ? function (state) {
	    return state;
	  } : _options$stateTransfo;
	  var _options$actionTransf = options.actionTransformer;
	  var actionTransformer = _options$actionTransf === undefined ? function (actn) {
	    return actn;
	  } : _options$actionTransf;
	  var _options$errorTransfo = options.errorTransformer;
	  var errorTransformer = _options$errorTransfo === undefined ? function (error) {
	    return error;
	  } : _options$errorTransfo;
	  var _options$colors = options.colors;
	  var colors = _options$colors === undefined ? {
	    title: function title() {
	      return "#000000";
	    },
	    prevState: function prevState() {
	      return "#9E9E9E";
	    },
	    action: function action() {
	      return "#03A9F4";
	    },
	    nextState: function nextState() {
	      return "#4CAF50";
	    },
	    error: function error() {
	      return "#F20404";
	    }
	  } : _options$colors;
	
	  // exit if console undefined
	
	  if (typeof logger === "undefined") {
	    return function () {
	      return function (next) {
	        return function (action) {
	          return next(action);
	        };
	      };
	    };
	  }
	
	  if (transformer) {
	    console.error("Option 'transformer' is deprecated, use stateTransformer instead");
	  }
	
	  var logBuffer = [];
	  function printBuffer() {
	    logBuffer.forEach(function (logEntry, key) {
	      var started = logEntry.started;
	      var startedTime = logEntry.startedTime;
	      var action = logEntry.action;
	      var prevState = logEntry.prevState;
	      var error = logEntry.error;
	      var took = logEntry.took;
	      var nextState = logEntry.nextState;
	
	      var nextEntry = logBuffer[key + 1];
	      if (nextEntry) {
	        nextState = nextEntry.prevState;
	        took = nextEntry.started - started;
	      }
	      // message
	      var formattedAction = actionTransformer(action);
	      var isCollapsed = typeof collapsed === "function" ? collapsed(function () {
	        return nextState;
	      }, action) : collapsed;
	
	      var formattedTime = formatTime(startedTime);
	      var titleCSS = colors.title ? "color: " + colors.title(formattedAction) + ";" : null;
	      var title = "action " + (timestamp ? formattedTime : "") + " " + formattedAction.type + " " + (duration ? "(in " + took.toFixed(2) + " ms)" : "");
	
	      // render
	      try {
	        if (isCollapsed) {
	          if (colors.title) logger.groupCollapsed("%c " + title, titleCSS);else logger.groupCollapsed(title);
	        } else {
	          if (colors.title) logger.group("%c " + title, titleCSS);else logger.group(title);
	        }
	      } catch (e) {
	        logger.log(title);
	      }
	
	      var prevStateLevel = getLogLevel(level, formattedAction, [prevState], "prevState");
	      var actionLevel = getLogLevel(level, formattedAction, [formattedAction], "action");
	      var errorLevel = getLogLevel(level, formattedAction, [error, prevState], "error");
	      var nextStateLevel = getLogLevel(level, formattedAction, [nextState], "nextState");
	
	      if (prevStateLevel) {
	        if (colors.prevState) logger[prevStateLevel]("%c prev state", "color: " + colors.prevState(prevState) + "; font-weight: bold", prevState);else logger[prevStateLevel]("prev state", prevState);
	      }
	
	      if (actionLevel) {
	        if (colors.action) logger[actionLevel]("%c action", "color: " + colors.action(formattedAction) + "; font-weight: bold", formattedAction);else logger[actionLevel]("action", formattedAction);
	      }
	
	      if (error && errorLevel) {
	        if (colors.error) logger[errorLevel]("%c error", "color: " + colors.error(error, prevState) + "; font-weight: bold", error);else logger[errorLevel]("error", error);
	      }
	
	      if (nextStateLevel) {
	        if (colors.nextState) logger[nextStateLevel]("%c next state", "color: " + colors.nextState(nextState) + "; font-weight: bold", nextState);else logger[nextStateLevel]("next state", nextState);
	      }
	
	      try {
	        logger.groupEnd();
	      } catch (e) {
	        logger.log("—— log end ——");
	      }
	    });
	    logBuffer.length = 0;
	  }
	
	  return function (_ref) {
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        // exit early if predicate function returns false
	        if (typeof predicate === "function" && !predicate(getState, action)) {
	          return next(action);
	        }
	
	        var logEntry = {};
	        logBuffer.push(logEntry);
	
	        logEntry.started = timer.now();
	        logEntry.startedTime = new Date();
	        logEntry.prevState = stateTransformer(getState());
	        logEntry.action = action;
	
	        var returnedValue = undefined;
	        if (logErrors) {
	          try {
	            returnedValue = next(action);
	          } catch (e) {
	            logEntry.error = errorTransformer(e);
	          }
	        } else {
	          returnedValue = next(action);
	        }
	
	        logEntry.took = timer.now() - logEntry.started;
	        logEntry.nextState = stateTransformer(getState());
	
	        printBuffer();
	
	        if (logEntry.error) throw logEntry.error;
	        return returnedValue;
	      };
	    };
	  };
	}
	
	module.exports = createLogger;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.tableApp = tableApp;
	
	var _configuration = __webpack_require__(32);
	
	var _configuration2 = _interopRequireDefault(_configuration);
	
	var _dictionary = __webpack_require__(46);
	
	var _dictionary2 = _interopRequireDefault(_dictionary);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function tableApp(state, action) {
	    return {
	        dictionary: (0, _dictionary2.default)(state.dictionary, action),
	        configuration: (0, _configuration2.default)(state.configuration, action)
	    };
	}
	
	exports.default = tableApp;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvcmVkdWNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztRQUdnQjs7QUFIaEI7Ozs7QUFDQTs7Ozs7O0FBRU8sU0FBUyxRQUFULENBQWtCLEtBQWxCLEVBQXlCLE1BQXpCLEVBQWlDO0FBQ3BDLFdBQU87QUFDSCxvQkFBWSwwQkFBa0IsTUFBTSxVQUFOLEVBQWtCLE1BQXBDLENBQVo7QUFDQSx1QkFBZSw2QkFBcUIsTUFBTSxhQUFOLEVBQXFCLE1BQTFDLENBQWY7S0FGSixDQURvQztDQUFqQzs7a0JBT1EiLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYW5pZWsvcHJvamVjdC9vcGVuc2hpZnQvZW5nbGlzaHRhYmxlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZ3VyYXRpb25SZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvY29uZmlndXJhdGlvbic7XG5pbXBvcnQgZGljdGlvbmFyeVJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9kaWN0aW9uYXJ5JztcblxuZXhwb3J0IGZ1bmN0aW9uIHRhYmxlQXBwKHN0YXRlLCBhY3Rpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBkaWN0aW9uYXJ5OiBkaWN0aW9uYXJ5UmVkdWNlcihzdGF0ZS5kaWN0aW9uYXJ5LCBhY3Rpb24pLFxuICAgICAgICBjb25maWd1cmF0aW9uOiBjb25maWd1cmF0aW9uUmVkdWNlcihzdGF0ZS5jb25maWd1cmF0aW9uLCBhY3Rpb24pLFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRhYmxlQXBwOyJdfQ==

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.configurationColumnNameChanged = exports.configurationColumnTypeChanged = exports.CONFIGURATION_COLUMN_NAME_CHANGED = exports.CONFIGURATION_COLUMN_TYPE_CHANGED = undefined;
	exports.reducer = reducer;
	
	var _objectInspections = __webpack_require__(33);
	
	var objectInspections = _interopRequireWildcard(_objectInspections);
	
	var _reduxActions = __webpack_require__(34);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/// <reference path="./../../../../typings/main.d.ts" />
	
	var CONFIGURATION_COLUMN_TYPE_CHANGED = exports.CONFIGURATION_COLUMN_TYPE_CHANGED = 'CONFIGURATION_COLUMN_TYPE_CHANGED';
	var CONFIGURATION_COLUMN_NAME_CHANGED = exports.CONFIGURATION_COLUMN_NAME_CHANGED = 'CONFIGURATION_COLUMN_NAME_CHANGED';
	
	var configurationColumnTypeChanged = exports.configurationColumnTypeChanged = (0, _reduxActions.createAction)(CONFIGURATION_COLUMN_TYPE_CHANGED, function (columnId, optionId) {
	    return {
	        columnId: columnId,
	        optionId: optionId
	    };
	});
	
	var configurationColumnNameChanged = exports.configurationColumnNameChanged = (0, _reduxActions.createAction)(CONFIGURATION_COLUMN_NAME_CHANGED, function (columnId, name) {
	    return {
	        columnId: columnId,
	        name: name
	    };
	});
	
	var options = {
	    Space: 'Empty',
	    SequenceNumber: 'SequenceNumber',
	    OrginalWord: 'Orginal word',
	    TransalatedWord: 'Transalted word'
	};
	
	var key = 0;
	var availableOptions = [];
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;
	
	try {
	    for (var _iterator = Object.keys(options)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var option = _step.value;
	
	        availableOptions.push({
	            key: key,
	            text: options[option]
	        });
	        key++;
	    }
	} catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	} finally {
	    try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	        }
	    } finally {
	        if (_didIteratorError) {
	            throw _iteratorError;
	        }
	    }
	}
	
	var initialConfiguration = function initialConfiguration() {
	    return {
	        0: {
	            selectedOption: 1,
	            columnName: '',
	            options: availableOptions
	        },
	        1: {
	            // TOD Id should be used.
	            selectedOption: 1,
	            columnName: '',
	            options: availableOptions
	        },
	        2: {
	            selectedOption: 1,
	            columnName: '',
	            options: availableOptions
	        },
	        3: {
	            selectedOption: 1,
	            columnName: '',
	            options: availableOptions
	        },
	        4: {
	            selectedOption: 1,
	            columnName: '',
	            options: availableOptions
	        }
	    };
	};
	
	function reducer(state, action) {
	    if (!objectInspections.isDefined(state)) {
	        state = initialConfiguration();
	    }
	
	    var createObject = function createObject(key, value) {
	        var result = {};
	        result[key] = value;
	        return result;
	    };
	
	    switch (action.type) {
	        case CONFIGURATION_COLUMN_TYPE_CHANGED:
	            var c1 = Object.assign({}, state[action.payload.columnId], {
	                selectedOption: action.payload.optionId
	            });
	            return Object.assign({}, state, createObject(action.payload.columnId, c1));
	        case CONFIGURATION_COLUMN_NAME_CHANGED:
	            var c2 = Object.assign({}, state[action.payload.columnId], {
	                columnName: action.payload.name
	            });
	            return Object.assign({}, state, createObject(action.payload.columnId, c2));
	    }
	
	    return state;
	}
	
	exports.default = reducer;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvcmVkdWNlcnMvY29uZmlndXJhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7UUE2RWdCOztBQTNFaEI7O0lBQVk7O0FBQ1o7Ozs7OztBQUlPLElBQU0sZ0ZBQW9DLG1DQUFwQztBQUNOLElBQU0sZ0ZBQW9DLG1DQUFwQzs7QUFFTixJQUFNLDBFQUFpQyxnQ0FDMUMsaUNBRDBDLEVBRTFDLFVBQUMsUUFBRCxFQUFXLFFBQVgsRUFBd0I7QUFDcEIsV0FBTztBQUNILDBCQURHO0FBRUgsMEJBRkc7S0FBUCxDQURvQjtDQUF4QixDQUZTOztBQVVOLElBQU0sMEVBQWlDLGdDQUMxQyxpQ0FEMEMsRUFFMUMsVUFBQyxRQUFELEVBQVcsSUFBWCxFQUFvQjtBQUNoQixXQUFPO0FBQ0gsMEJBREc7QUFFSCxrQkFGRztLQUFQLENBRGdCO0NBQXBCLENBRlM7O0FBU2IsSUFBSSxVQUFVO0FBQ1YsV0FBTyxPQUFQO0FBQ0Esb0JBQWdCLGdCQUFoQjtBQUNBLGlCQUFhLGNBQWI7QUFDQSxxQkFBaUIsaUJBQWpCO0NBSkE7O0FBT0osSUFBSSxNQUFNLENBQU47QUFDSixJQUFJLG1CQUFtQixFQUFuQjs7Ozs7O0FBQ0oseUJBQW1CLE9BQU8sSUFBUCxDQUFZLE9BQVosMkJBQW5CLG9HQUF5QztZQUFoQyxxQkFBZ0M7O0FBQ3JDLHlCQUFpQixJQUFqQixDQUFzQjtBQUNsQixpQkFBSyxHQUFMO0FBQ0Esa0JBQU0sUUFBUSxNQUFSLENBQU47U0FGSixFQURxQztBQUtyQyxjQUxxQztLQUF6Qzs7Ozs7Ozs7Ozs7Ozs7OztBQVFBLElBQUksdUJBQXVCLFNBQXZCLG9CQUF1QixHQUFNO0FBQzdCLFdBQU87QUFDSCxXQUFHO0FBQ0MsNEJBQWdCLENBQWhCO0FBQ0Esd0JBQVksRUFBWjtBQUNBLHFCQUFTLGdCQUFUO1NBSEo7QUFLQSxXQUFHOztBQUVDLDRCQUFnQixDQUFoQjtBQUNBLHdCQUFZLEVBQVo7QUFDQSxxQkFBUyxnQkFBVDtTQUpKO0FBTUEsV0FBRztBQUNDLDRCQUFnQixDQUFoQjtBQUNBLHdCQUFZLEVBQVo7QUFDQSxxQkFBUyxnQkFBVDtTQUhKO0FBS0EsV0FBRztBQUNDLDRCQUFnQixDQUFoQjtBQUNBLHdCQUFZLEVBQVo7QUFDQSxxQkFBUyxnQkFBVDtTQUhKO0FBS0EsV0FBRztBQUNDLDRCQUFnQixDQUFoQjtBQUNBLHdCQUFZLEVBQVo7QUFDQSxxQkFBUyxnQkFBVDtTQUhKO0tBdEJKLENBRDZCO0NBQU47O0FBK0JwQixTQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0IsTUFBeEIsRUFBZ0M7QUFDbkMsUUFBSSxDQUFDLGtCQUFrQixTQUFsQixDQUE0QixLQUE1QixDQUFELEVBQXFDO0FBQ3JDLGdCQUFRLHNCQUFSLENBRHFDO0tBQXpDOztBQUlBLFFBQUksZUFBZSxTQUFmLFlBQWUsQ0FBQyxHQUFELEVBQU0sS0FBTixFQUFnQjtBQUMvQixZQUFJLFNBQVMsRUFBVCxDQUQyQjtBQUUvQixlQUFPLEdBQVAsSUFBYyxLQUFkLENBRitCO0FBRy9CLGVBQU8sTUFBUCxDQUgrQjtLQUFoQixDQUxnQjs7QUFXbkMsWUFBUSxPQUFPLElBQVA7QUFDSixhQUFLLGlDQUFMO0FBQ0ksZ0JBQUksS0FBSyxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLE1BQU0sT0FBTyxPQUFQLENBQWUsUUFBZixDQUF4QixFQUFrRDtBQUN2RCxnQ0FBZ0IsT0FBTyxPQUFQLENBQWUsUUFBZjthQURYLENBQUwsQ0FEUjtBQUlJLG1CQUFPLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBbEIsRUFBeUIsYUFBYSxPQUFPLE9BQVAsQ0FBZSxRQUFmLEVBQXlCLEVBQXRDLENBQXpCLENBQVAsQ0FKSjtBQURKLGFBTVMsaUNBQUw7QUFDSSxnQkFBSSxLQUFLLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsTUFBTSxPQUFPLE9BQVAsQ0FBZSxRQUFmLENBQXhCLEVBQWtEO0FBQ3ZELDRCQUFZLE9BQU8sT0FBUCxDQUFlLElBQWY7YUFEUCxDQUFMLENBRFI7QUFJSSxtQkFBTyxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQWxCLEVBQXlCLGFBQWEsT0FBTyxPQUFQLENBQWUsUUFBZixFQUF5QixFQUF0QyxDQUF6QixDQUFQLENBSko7QUFOSixLQVhtQzs7QUF3Qm5DLFdBQU8sS0FBUCxDQXhCbUM7Q0FBaEM7O2tCQTJCUSIsImZpbGUiOiJjb25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21hbmllay9wcm9qZWN0L29wZW5zaGlmdC9lbmdsaXNodGFibGUiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi8uLi8uLi8uLi8uLi90eXBpbmdzL21haW4uZC50c1wiIC8+XG5cbmltcG9ydCAqIGFzIG9iamVjdEluc3BlY3Rpb25zIGZyb20gJy4vLi4vLi4vLi4vVXRpbHMvb2JqZWN0SW5zcGVjdGlvbnMnO1xuaW1wb3J0IHtcbiAgICBjcmVhdGVBY3Rpb25cbn0gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBDT05GSUdVUkFUSU9OX0NPTFVNTl9UWVBFX0NIQU5HRUQgPSAnQ09ORklHVVJBVElPTl9DT0xVTU5fVFlQRV9DSEFOR0VEJztcbmV4cG9ydCBjb25zdCBDT05GSUdVUkFUSU9OX0NPTFVNTl9OQU1FX0NIQU5HRUQgPSAnQ09ORklHVVJBVElPTl9DT0xVTU5fTkFNRV9DSEFOR0VEJztcblxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyYXRpb25Db2x1bW5UeXBlQ2hhbmdlZCA9IGNyZWF0ZUFjdGlvbihcbiAgICBDT05GSUdVUkFUSU9OX0NPTFVNTl9UWVBFX0NIQU5HRUQsXG4gICAgKGNvbHVtbklkLCBvcHRpb25JZCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29sdW1uSWQsXG4gICAgICAgICAgICBvcHRpb25JZCxcbiAgICAgICAgfTtcbiAgICB9XG4pO1xuXG5leHBvcnQgY29uc3QgY29uZmlndXJhdGlvbkNvbHVtbk5hbWVDaGFuZ2VkID0gY3JlYXRlQWN0aW9uKFxuICAgIENPTkZJR1VSQVRJT05fQ09MVU1OX05BTUVfQ0hBTkdFRCxcbiAgICAoY29sdW1uSWQsIG5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbHVtbklkLFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICB9O1xuICAgIH0pO1xuXG52YXIgb3B0aW9ucyA9IHtcbiAgICBTcGFjZTogJ0VtcHR5JyxcbiAgICBTZXF1ZW5jZU51bWJlcjogJ1NlcXVlbmNlTnVtYmVyJyxcbiAgICBPcmdpbmFsV29yZDogJ09yZ2luYWwgd29yZCcsXG4gICAgVHJhbnNhbGF0ZWRXb3JkOiAnVHJhbnNhbHRlZCB3b3JkJyxcbn07XG5cbnZhciBrZXkgPSAwO1xudmFyIGF2YWlsYWJsZU9wdGlvbnMgPSBbXTtcbmZvciAobGV0IG9wdGlvbiBvZiBPYmplY3Qua2V5cyhvcHRpb25zKSkge1xuICAgIGF2YWlsYWJsZU9wdGlvbnMucHVzaCh7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICB0ZXh0OiBvcHRpb25zW29wdGlvbl1cbiAgICB9KTtcbiAgICBrZXkrKztcbn1cblxudmFyIGluaXRpYWxDb25maWd1cmF0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIDA6IHtcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uOiAxLFxuICAgICAgICAgICAgY29sdW1uTmFtZTogJycsXG4gICAgICAgICAgICBvcHRpb25zOiBhdmFpbGFibGVPcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgICAxOiB7XG4gICAgICAgICAgICAvLyBUT0QgSWQgc2hvdWxkIGJlIHVzZWQuXG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbjogMSxcbiAgICAgICAgICAgIGNvbHVtbk5hbWU6ICcnLFxuICAgICAgICAgICAgb3B0aW9uczogYXZhaWxhYmxlT3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAgMjoge1xuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb246IDEsXG4gICAgICAgICAgICBjb2x1bW5OYW1lOiAnJyxcbiAgICAgICAgICAgIG9wdGlvbnM6IGF2YWlsYWJsZU9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIDM6IHtcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uOiAxLFxuICAgICAgICAgICAgY29sdW1uTmFtZTogJycsXG4gICAgICAgICAgICBvcHRpb25zOiBhdmFpbGFibGVPcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgICA0OiB7XG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbjogMSxcbiAgICAgICAgICAgIGNvbHVtbk5hbWU6ICcnLFxuICAgICAgICAgICAgb3B0aW9uczogYXZhaWxhYmxlT3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICAgIGlmICghb2JqZWN0SW5zcGVjdGlvbnMuaXNEZWZpbmVkKHN0YXRlKSkge1xuICAgICAgICBzdGF0ZSA9IGluaXRpYWxDb25maWd1cmF0aW9uKCk7XG4gICAgfVxuXG4gICAgbGV0IGNyZWF0ZU9iamVjdCA9IChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIENPTkZJR1VSQVRJT05fQ09MVU1OX1RZUEVfQ0hBTkdFRDpcbiAgICAgICAgICAgIGxldCBjMSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlW2FjdGlvbi5wYXlsb2FkLmNvbHVtbklkXSwge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uOiBhY3Rpb24ucGF5bG9hZC5vcHRpb25JZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIGNyZWF0ZU9iamVjdChhY3Rpb24ucGF5bG9hZC5jb2x1bW5JZCwgYzEpKTtcbiAgICAgICAgY2FzZSBDT05GSUdVUkFUSU9OX0NPTFVNTl9OQU1FX0NIQU5HRUQ6XG4gICAgICAgICAgICBsZXQgYzIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZVthY3Rpb24ucGF5bG9hZC5jb2x1bW5JZF0sIHtcbiAgICAgICAgICAgICAgICBjb2x1bW5OYW1lOiBhY3Rpb24ucGF5bG9hZC5uYW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgY3JlYXRlT2JqZWN0KGFjdGlvbi5wYXlsb2FkLmNvbHVtbklkLCBjMikpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXX0=

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.isDefined = isDefined;
	exports.isEmpty = isEmpty;
	exports.isArray = isArray;
	function isDefined(object) {
	    return typeof object !== 'undefined';
	}
	
	function isEmpty(object) {
	    return !isDefined(object) || Object.keys(object).length === 0;
	}
	
	function isArray(value) {
	    return Object.prototype.toString.call(value) === '[object Array]';
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9VdGlscy9vYmplY3RJbnNwZWN0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztRQUFnQjtRQUlBO1FBSUE7QUFSVCxTQUFTLFNBQVQsQ0FBbUIsTUFBbkIsRUFBMkI7QUFDOUIsV0FBUSxPQUFPLE1BQVAsS0FBa0IsV0FBbEIsQ0FEc0I7Q0FBM0I7O0FBSUEsU0FBUyxPQUFULENBQWlCLE1BQWpCLEVBQXlCO0FBQzVCLFdBQU8sQ0FBQyxVQUFVLE1BQVYsQ0FBRCxJQUFzQixPQUFPLElBQVAsQ0FBWSxNQUFaLEVBQW9CLE1BQXBCLEtBQStCLENBQS9CLENBREQ7Q0FBekI7O0FBSUEsU0FBUyxPQUFULENBQWlCLEtBQWpCLEVBQXdCO0FBQzNCLFdBQU8sT0FBTyxTQUFQLENBQWlCLFFBQWpCLENBQTBCLElBQTFCLENBQStCLEtBQS9CLE1BQTBDLGdCQUExQyxDQURvQjtDQUF4QiIsImZpbGUiOiJvYmplY3RJbnNwZWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYW5pZWsvcHJvamVjdC9vcGVuc2hpZnQvZW5nbGlzaHRhYmxlIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGlzRGVmaW5lZChvYmplY3QpIHtcbiAgICByZXR1cm4gKHR5cGVvZiBvYmplY3QgIT09ICd1bmRlZmluZWQnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkob2JqZWN0KSB7XG4gICAgcmV0dXJuICFpc0RlZmluZWQob2JqZWN0KSB8fCBPYmplY3Qua2V5cyhvYmplY3QpLmxlbmd0aCA9PT0gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXkodmFsdWUpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cbiJdfQ==

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _createAction = __webpack_require__(35);
	
	var _createAction2 = _interopRequireDefault(_createAction);
	
	var _handleAction = __webpack_require__(36);
	
	var _handleAction2 = _interopRequireDefault(_handleAction);
	
	var _handleActions = __webpack_require__(43);
	
	var _handleActions2 = _interopRequireDefault(_handleActions);
	
	exports.createAction = _createAction2['default'];
	exports.handleAction = _handleAction2['default'];
	exports.handleActions = _handleActions2['default'];

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = createAction;
	function identity(t) {
	  return t;
	}
	
	function createAction(type, actionCreator, metaCreator) {
	  var finalActionCreator = typeof actionCreator === 'function' ? actionCreator : identity;
	
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var action = {
	      type: type,
	      payload: finalActionCreator.apply(undefined, args)
	    };
	
	    if (args.length === 1 && args[0] instanceof Error) {
	      // Handle FSA errors where the payload is an Error object. Set error.
	      action.error = true;
	    }
	
	    if (typeof metaCreator === 'function') {
	      action.meta = metaCreator.apply(undefined, args);
	    }
	
	    return action;
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = handleAction;
	
	var _fluxStandardAction = __webpack_require__(37);
	
	function isFunction(val) {
	  return typeof val === 'function';
	}
	
	function handleAction(type, reducers) {
	  return function (state, action) {
	    // If action type does not match, return previous state
	    if (action.type !== type) return state;
	
	    var handlerKey = _fluxStandardAction.isError(action) ? 'throw' : 'next';
	
	    // If function is passed instead of map, use as reducer
	    if (isFunction(reducers)) {
	      reducers.next = reducers['throw'] = reducers;
	    }
	
	    // Otherwise, assume an action map was passed
	    var reducer = reducers[handlerKey];
	
	    return isFunction(reducer) ? reducer(state, action) : state;
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.isFSA = isFSA;
	exports.isError = isError;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashIsplainobject = __webpack_require__(38);
	
	var _lodashIsplainobject2 = _interopRequireDefault(_lodashIsplainobject);
	
	var validKeys = ['type', 'payload', 'error', 'meta'];
	
	function isValidKey(key) {
	  return validKeys.indexOf(key) > -1;
	}
	
	function isFSA(action) {
	  return _lodashIsplainobject2['default'](action) && typeof action.type !== 'undefined' && Object.keys(action).every(isValidKey);
	}
	
	function isError(action) {
	  return action.error === true;
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseFor = __webpack_require__(39),
	    isArguments = __webpack_require__(40),
	    keysIn = __webpack_require__(41);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * The base implementation of `_.forIn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForIn(object, iteratee) {
	  return baseFor(object, iteratee, keysIn);
	}
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * **Note:** This method assumes objects created by the `Object` constructor
	 * have no inherited enumerable properties.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  var Ctor;
	
	  // Exit early for non `Object` objects.
	  if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
	      (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	    return false;
	  }
	  // IE < 9 iterates inherited properties before own properties. If the first
	  // iterated property is an object's own property then there are no inherited
	  // enumerable properties.
	  var result;
	  // In most environments an object's own properties are iterated before
	  // its inherited properties. If the last iterated property is an object's
	  // own property then there are no inherited enumerable properties.
	  baseForIn(value, function(subValue, key) {
	    result = key;
	  });
	  return result === undefined || hasOwnProperty.call(value, result);
	}
	
	module.exports = isPlainObject;


/***/ },
/* 39 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	/**
	 * Creates a base function for methods like `_.forIn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;
	
	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = baseFor;


/***/ },
/* 40 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.8 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isArguments;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.0.8 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var isArguments = __webpack_require__(40),
	    isArray = __webpack_require__(42);
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keysIn;


/***/ },
/* 42 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]',
	    funcTag = '[object Function]';
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isArray;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = handleActions;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _handleAction = __webpack_require__(36);
	
	var _handleAction2 = _interopRequireDefault(_handleAction);
	
	var _ownKeys = __webpack_require__(44);
	
	var _ownKeys2 = _interopRequireDefault(_ownKeys);
	
	var _reduceReducers = __webpack_require__(45);
	
	var _reduceReducers2 = _interopRequireDefault(_reduceReducers);
	
	function handleActions(handlers, defaultState) {
	  var reducers = _ownKeys2['default'](handlers).map(function (type) {
	    return _handleAction2['default'](type, handlers[type]);
	  });
	
	  return typeof defaultState !== 'undefined' ? function (state, action) {
	    if (state === undefined) state = defaultState;
	    return _reduceReducers2['default'].apply(undefined, reducers)(state, action);
	  } : _reduceReducers2['default'].apply(undefined, reducers);
	}
	
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = ownKeys;
	
	function ownKeys(object) {
	  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
	    return Reflect.ownKeys(object);
	  }
	
	  var keys = Object.getOwnPropertyNames(object);
	
	  if (typeof Object.getOwnPropertySymbols === 'function') {
	    keys = keys.concat(Object.getOwnPropertySymbols(object));
	  }
	
	  return keys;
	}
	
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = reduceReducers;
	
	function reduceReducers() {
	  for (var _len = arguments.length, reducers = Array(_len), _key = 0; _key < _len; _key++) {
	    reducers[_key] = arguments[_key];
	  }
	
	  return function (previous, current) {
	    return reducers.reduce(function (p, r) {
	      return r(p, current);
	    }, previous);
	  };
	}
	
	module.exports = exports["default"];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.rowRemoved = exports.newRowAdded = exports.tableInputChanged = exports.inputTextChanged = exports.INIT = exports.ROW_REMOVED = exports.NEW_ROW_ADDED = exports.TABLE_INPUT_CHANGED = exports.INPUT_TEXT_CHANGED = undefined;
	
	var _reduxActions = __webpack_require__(34);
	
	var _Input = __webpack_require__(47);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _output = __webpack_require__(48);
	
	var _output2 = _interopRequireDefault(_output);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var INPUT_TEXT_CHANGED = exports.INPUT_TEXT_CHANGED = 'INPUT_TEXT_CHANGED'; /// <reference path="./../../../../typings/main.d.ts" />
	
	var TABLE_INPUT_CHANGED = exports.TABLE_INPUT_CHANGED = 'TABLE_INPUT_CHANGED';
	
	var NEW_ROW_ADDED = exports.NEW_ROW_ADDED = "TABLE_INPUT_NEW_ROW_ADDED";
	var ROW_REMOVED = exports.ROW_REMOVED = "TABLE_INPUT_ROW_REMOVED";
	
	var INIT = exports.INIT = "@@INIT";
	
	var inputTextChanged = exports.inputTextChanged = (0, _reduxActions.createAction)(INPUT_TEXT_CHANGED);
	var tableInputChanged = exports.tableInputChanged = (0, _reduxActions.createAction)(TABLE_INPUT_CHANGED);
	var newRowAdded = exports.newRowAdded = (0, _reduxActions.createAction)(NEW_ROW_ADDED);
	var rowRemoved = exports.rowRemoved = (0, _reduxActions.createAction)(ROW_REMOVED);
	
	var key = 0;
	var getNextKey = function getNextKey() {
	    key = key + 1;
	    return key;
	};
	
	var reducer = function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];
	
	    console.log(action);
	    switch (action.type) {
	        case INIT:
	            return {
	                input: _Input2.default.init(),
	                output: _output2.default.init()
	            };
	
	        case NEW_ROW_ADDED:
	            var rowId = getNextKey();
	            var row = { rowId: rowId, sourceWord: '', destinationWord: '' };
	            return {
	                input: _Input2.default.add(state.input, row),
	                output: _output2.default.add(state.output, row)
	            };
	
	        case ROW_REMOVED:
	            return {
	                input: _Input2.default.remove(state.input, action.payload.rowId),
	                output: _output2.default.remove(state.output, action.payload.rowId)
	            };
	
	        case TABLE_INPUT_CHANGED:
	            return {
	                input: _Input2.default.inputChanged(state.input, action.payload),
	                output: _output2.default.inputChanged(state.output, action.payload)
	            };
	    }
	
	    return state;
	};
	
	exports.default = reducer;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvcmVkdWNlcnMvZGljdGlvbmFyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRU8sSUFBTSxrREFBcUIsb0JBQXJCOztBQUNOLElBQU0sb0RBQXNCLHFCQUF0Qjs7QUFFTixJQUFNLHdDQUFnQiwyQkFBaEI7QUFDTixJQUFNLG9DQUFjLHlCQUFkOztBQUVOLElBQU0sc0JBQU0sUUFBTjs7QUFFTixJQUFNLDhDQUFtQixnQ0FBYSxrQkFBYixDQUFuQjtBQUNOLElBQU0sZ0RBQW9CLGdDQUFhLG1CQUFiLENBQXBCO0FBQ04sSUFBTSxvQ0FBYyxnQ0FBYSxhQUFiLENBQWQ7QUFDTixJQUFNLGtDQUFhLGdDQUFhLFdBQWIsQ0FBYjs7QUFFYixJQUFJLE1BQU0sQ0FBTjtBQUNKLElBQU0sYUFBYSxTQUFiLFVBQWEsR0FBTTtBQUNyQixVQUFNLE1BQU0sQ0FBTixDQURlO0FBRXJCLFdBQU8sR0FBUCxDQUZxQjtDQUFOOztBQUtuQixJQUFNLFVBQVUsU0FBVixPQUFVLEdBQXdCO1FBQXZCLDhEQUFRLGtCQUFlO1FBQVgsc0JBQVc7O0FBQ3BDLFlBQVEsR0FBUixDQUFZLE1BQVosRUFEb0M7QUFFcEMsWUFBUSxPQUFPLElBQVA7QUFDSixhQUFLLElBQUw7QUFDSSxtQkFBTztBQUNILHVCQUFPLGdCQUFNLElBQU4sRUFBUDtBQUNBLHdCQUFRLGlCQUFPLElBQVAsRUFBUjthQUZKLENBREo7O0FBREosYUFPUyxhQUFMO0FBQ0ksZ0JBQUksUUFBUSxZQUFSLENBRFI7QUFFSSxnQkFBSSxNQUFNLEVBQUMsT0FBTyxLQUFQLEVBQWMsWUFBWSxFQUFaLEVBQWdCLGlCQUFpQixFQUFqQixFQUFyQyxDQUZSO0FBR0ksbUJBQU87QUFDSCx1QkFBTyxnQkFBTSxHQUFOLENBQVUsTUFBTSxLQUFOLEVBQWEsR0FBdkIsQ0FBUDtBQUNBLHdCQUFRLGlCQUFPLEdBQVAsQ0FBVyxNQUFNLE1BQU4sRUFBYyxHQUF6QixDQUFSO2FBRkosQ0FISjs7QUFQSixhQWVTLFdBQUw7QUFDSSxtQkFBTztBQUNILHVCQUFPLGdCQUFNLE1BQU4sQ0FBYSxNQUFNLEtBQU4sRUFBYSxPQUFPLE9BQVAsQ0FBZSxLQUFmLENBQWpDO0FBQ0Esd0JBQVEsaUJBQU8sTUFBUCxDQUFjLE1BQU0sTUFBTixFQUFjLE9BQU8sT0FBUCxDQUFlLEtBQWYsQ0FBcEM7YUFGSixDQURKOztBQWZKLGFBcUJTLG1CQUFMO0FBQ0ksbUJBQU87QUFDSCx1QkFBTyxnQkFBTSxZQUFOLENBQW1CLE1BQU0sS0FBTixFQUFhLE9BQU8sT0FBUCxDQUF2QztBQUNBLHdCQUFRLGlCQUFPLFlBQVAsQ0FBb0IsTUFBTSxNQUFOLEVBQWMsT0FBTyxPQUFQLENBQTFDO2FBRkosQ0FESjtBQXJCSixLQUZvQzs7QUE4QnBDLFdBQU8sS0FBUCxDQTlCb0M7Q0FBeEI7O2tCQWlDRCIsImZpbGUiOiJkaWN0aW9uYXJ5LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21hbmllay9wcm9qZWN0L29wZW5zaGlmdC9lbmdsaXNodGFibGUiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi8uLi8uLi8uLi8uLi90eXBpbmdzL21haW4uZC50c1wiIC8+XG5cbmltcG9ydCB7Y3JlYXRlQWN0aW9ufSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0JztcbmltcG9ydCBPdXRwdXQgZnJvbSAnLi9vdXRwdXQnO1xuXG5leHBvcnQgY29uc3QgSU5QVVRfVEVYVF9DSEFOR0VEID0gJ0lOUFVUX1RFWFRfQ0hBTkdFRCc7XG5leHBvcnQgY29uc3QgVEFCTEVfSU5QVVRfQ0hBTkdFRCA9ICdUQUJMRV9JTlBVVF9DSEFOR0VEJztcblxuZXhwb3J0IGNvbnN0IE5FV19ST1dfQURERUQgPSBcIlRBQkxFX0lOUFVUX05FV19ST1dfQURERURcIjtcbmV4cG9ydCBjb25zdCBST1dfUkVNT1ZFRCA9IFwiVEFCTEVfSU5QVVRfUk9XX1JFTU9WRURcIjtcblxuZXhwb3J0IGNvbnN0IElOSVQ9IFwiQEBJTklUXCI7XG5cbmV4cG9ydCBjb25zdCBpbnB1dFRleHRDaGFuZ2VkID0gY3JlYXRlQWN0aW9uKElOUFVUX1RFWFRfQ0hBTkdFRCk7XG5leHBvcnQgY29uc3QgdGFibGVJbnB1dENoYW5nZWQgPSBjcmVhdGVBY3Rpb24oVEFCTEVfSU5QVVRfQ0hBTkdFRCk7XG5leHBvcnQgY29uc3QgbmV3Um93QWRkZWQgPSBjcmVhdGVBY3Rpb24oTkVXX1JPV19BRERFRCk7XG5leHBvcnQgY29uc3Qgcm93UmVtb3ZlZCA9IGNyZWF0ZUFjdGlvbihST1dfUkVNT1ZFRCk7XG5cbmxldCBrZXkgPSAwO1xuY29uc3QgZ2V0TmV4dEtleSA9ICgpID0+IHtcbiAgICBrZXkgPSBrZXkgKyAxO1xuICAgIHJldHVybiBrZXk7XG59O1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGFjdGlvbik7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIElOSVQ6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlucHV0OiBJbnB1dC5pbml0KCksXG4gICAgICAgICAgICAgICAgb3V0cHV0OiBPdXRwdXQuaW5pdCgpXG4gICAgICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgY2FzZSBORVdfUk9XX0FEREVEOlxuICAgICAgICAgICAgdmFyIHJvd0lkID0gZ2V0TmV4dEtleSgpO1xuICAgICAgICAgICAgbGV0IHJvdyA9IHtyb3dJZDogcm93SWQsIHNvdXJjZVdvcmQ6ICcnLCBkZXN0aW5hdGlvbldvcmQ6ICcnfTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IElucHV0LmFkZChzdGF0ZS5pbnB1dCwgcm93KSxcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IE91dHB1dC5hZGQoc3RhdGUub3V0cHV0LCByb3cpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNhc2UgUk9XX1JFTU9WRUQ6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlucHV0OiBJbnB1dC5yZW1vdmUoc3RhdGUuaW5wdXQsIGFjdGlvbi5wYXlsb2FkLnJvd0lkKSxcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IE91dHB1dC5yZW1vdmUoc3RhdGUub3V0cHV0LCBhY3Rpb24ucGF5bG9hZC5yb3dJZClcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgY2FzZSBUQUJMRV9JTlBVVF9DSEFOR0VEOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpbnB1dDogSW5wdXQuaW5wdXRDaGFuZ2VkKHN0YXRlLmlucHV0LCBhY3Rpb24ucGF5bG9hZCksXG4gICAgICAgICAgICAgICAgb3V0cHV0OiBPdXRwdXQuaW5wdXRDaGFuZ2VkKHN0YXRlLm91dHB1dCwgYWN0aW9uLnBheWxvYWQpXG4gICAgICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iXX0=

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/// <reference path="./../../../../typings/main.d.ts" />
	
	var Input = function Input() {
	    _classCallCheck(this, Input);
	};
	
	Input.add = function (state, row) {
	    return [].concat(_toConsumableArray(state), [row]);
	};
	
	Input.remove = function (state, rowId) {
	    var index = state.findIndex(function (ele) {
	        return ele.rowId == rowId;
	    });
	    if (index === -1) {
	        return state;
	    }
	    return [].concat(_toConsumableArray(state.slice(0, index)), _toConsumableArray(state.slice(index + 1)));
	};
	
	Input.inputChanged = function (state, row) {
	    console.info('Should be removed');
	    var index = state.findIndex(function (ele) {
	        return ele.rowId == row.rowId;
	    });
	    if (index === -1) {
	        throw 'Element with rowId ' + row.rowId + ' not found';
	    }
	
	    return [].concat(_toConsumableArray(state.slice(0, index)), [row], _toConsumableArray(state.slice(index + 1)));
	};
	
	Input.init = function () {
	    return [];
	};
	
	exports.default = Input;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvcmVkdWNlcnMvSW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBRU07Ozs7QUFHTixNQUFNLEdBQU4sR0FBWSxVQUFDLEtBQUQsRUFBUSxHQUFSLEVBQWdCO0FBQ3hCLHdDQUNPLFNBQ0gsS0FGSixDQUR3QjtDQUFoQjs7QUFPWixNQUFNLE1BQU4sR0FBZSxVQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWtCO0FBQzdCLFFBQUksUUFBUSxNQUFNLFNBQU4sQ0FBZ0I7ZUFBTyxJQUFJLEtBQUosSUFBYSxLQUFiO0tBQVAsQ0FBeEIsQ0FEeUI7QUFFN0IsUUFBSSxVQUFVLENBQUMsQ0FBRCxFQUFJO0FBQ2QsZUFBTyxLQUFQLENBRGM7S0FBbEI7QUFHQSx3Q0FDTyxNQUFNLEtBQU4sQ0FBWSxDQUFaLEVBQWUsS0FBZix1QkFDQSxNQUFNLEtBQU4sQ0FBWSxRQUFRLENBQVIsR0FGbkIsQ0FMNkI7Q0FBbEI7O0FBV2YsTUFBTSxZQUFOLEdBQXFCLFVBQUMsS0FBRCxFQUFRLEdBQVIsRUFBZ0I7QUFDakMsWUFBUSxJQUFSLENBQWEsbUJBQWIsRUFEaUM7QUFFakMsUUFBSSxRQUFRLE1BQU0sU0FBTixDQUFnQjtlQUFPLElBQUksS0FBSixJQUFhLElBQUksS0FBSjtLQUFwQixDQUF4QixDQUY2QjtBQUdqQyxRQUFJLFVBQVUsQ0FBQyxDQUFELEVBQUk7QUFDZCxzQ0FBNEIsSUFBSSxLQUFKLGVBQTVCLENBRGM7S0FBbEI7O0FBSUEsd0NBQ08sTUFBTSxLQUFOLENBQVksQ0FBWixFQUFlLEtBQWYsS0FDSCx5QkFDRyxNQUFNLEtBQU4sQ0FBWSxRQUFRLENBQVIsR0FIbkIsQ0FQaUM7Q0FBaEI7O0FBY3JCLE1BQU0sSUFBTixHQUFhLFlBQU07QUFDZixXQUFPLEVBQVAsQ0FEZTtDQUFOOztrQkFJRSIsImZpbGUiOiJJbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYW5pZWsvcHJvamVjdC9vcGVuc2hpZnQvZW5nbGlzaHRhYmxlIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vLi4vLi4vLi4vLi4vdHlwaW5ncy9tYWluLmQudHNcIiAvPlxuXG5jbGFzcyBJbnB1dCB7XG59XG5cbklucHV0LmFkZCA9IChzdGF0ZSwgcm93KSA9PiB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJvd1xuICAgIF07XG59O1xuXG5JbnB1dC5yZW1vdmUgPSAoc3RhdGUsIHJvd0lkKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gc3RhdGUuZmluZEluZGV4KGVsZSA9PiBlbGUucm93SWQgPT0gcm93SWQpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgICByZXR1cm4gW1xuICAgICAgICAuLi5zdGF0ZS5zbGljZSgwLCBpbmRleCksXG4gICAgICAgIC4uLnN0YXRlLnNsaWNlKGluZGV4ICsgMSlcbiAgICBdO1xufTtcblxuSW5wdXQuaW5wdXRDaGFuZ2VkID0gKHN0YXRlLCByb3cpID0+IHtcbiAgICBjb25zb2xlLmluZm8oJ1Nob3VsZCBiZSByZW1vdmVkJyk7XG4gICAgbGV0IGluZGV4ID0gc3RhdGUuZmluZEluZGV4KGVsZSA9PiBlbGUucm93SWQgPT0gcm93LnJvd0lkKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRocm93IGBFbGVtZW50IHdpdGggcm93SWQgJHtyb3cucm93SWR9IG5vdCBmb3VuZGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtcbiAgICAgICAgLi4uc3RhdGUuc2xpY2UoMCwgaW5kZXgpLFxuICAgICAgICByb3csXG4gICAgICAgIC4uLnN0YXRlLnNsaWNlKGluZGV4ICsgMSlcbiAgICBdXG59O1xuXG5JbnB1dC5pbml0ID0gKCkgPT4ge1xuICAgIHJldHVybiBbXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /// <reference path="./../../../../typings/main.d.ts" />
	
	var _shuffle2 = __webpack_require__(49);
	
	var _shuffle3 = _interopRequireDefault(_shuffle2);
	
	var _arrayHelpers = __webpack_require__(50);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Output = function () {
	    function Output(sourceWords, destinationWords) {
	        _classCallCheck(this, Output);
	
	        this.sourceWords = [].concat(_toConsumableArray(sourceWords));
	        this.destinationWords = [].concat(_toConsumableArray(destinationWords));
	    }
	
	    _createClass(Output, [{
	        key: 'addRow',
	        value: function addRow(_ref) {
	            var rowId = _ref.rowId;
	            var sourceWord = _ref.sourceWord;
	            var destinationWord = _ref.destinationWord;
	
	            this.sourceWords.push({ rowId: rowId, text: sourceWord });
	            this.destinationWords.push({ rowId: rowId, text: destinationWord });
	        }
	    }, {
	        key: 'removeRow',
	        value: function removeRow(rowId) {
	            (0, _arrayHelpers.removeItem)(this.sourceWords, function (v) {
	                return v.rowId == rowId;
	            });
	            (0, _arrayHelpers.removeItem)(this.destinationWords, function (v) {
	                return v.rowId == rowId;
	            });
	        }
	    }, {
	        key: 'textChanged',
	        value: function textChanged(_ref2) {
	            var rowId = _ref2.rowId;
	            var sourceWord = _ref2.sourceWord;
	            var destinationWord = _ref2.destinationWord;
	
	            this.sourceWords.find(function (r) {
	                return r.rowId === rowId;
	            }).text = sourceWord;
	            this.destinationWords.find(function (r) {
	                return r.rowId === rowId;
	            }).text = destinationWord;
	        }
	    }, {
	        key: 'shuffle',
	        value: function shuffle() {
	            this.sourceWords = (0, _shuffle3.default)(this.sourceWords);
	            this.destinationWords = (0, _shuffle3.default)(this.destinationWords);
	        }
	    }, {
	        key: 'getResult',
	        value: function getResult() {
	            return {
	                sourceWords: this.sourceWords,
	                destinationWords: this.destinationWords
	            };
	        }
	    }]);
	
	    return Output;
	}();
	
	Output.add = function (state, row) {
	    var output = new Output(state.sourceWords, state.destinationWords);
	    output.addRow(row);
	    output.shuffle();
	    return output.getResult();
	};
	
	Output.remove = function (state, rowId) {
	    var output = new Output(state.sourceWords, state.destinationWords);
	    output.removeRow(rowId);
	    output.shuffle();
	    return output.getResult();
	};
	
	Output.inputChanged = function (state, row) {
	    var output = new Output(state.sourceWords, state.destinationWords);
	    output.textChanged(row);
	    return output.getResult();
	};
	
	Output.init = function () {
	    return {
	        sourceWords: [],
	        destinationWords: []
	    };
	};
	
	exports.default = Output;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvcmVkdWNlcnMvb3V0cHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7SUFFTTtBQUNGLGFBREUsTUFDRixDQUFZLFdBQVosRUFBeUIsZ0JBQXpCLEVBQTJDOzhCQUR6QyxRQUN5Qzs7QUFDdkMsYUFBSyxXQUFMLGdDQUF1QixhQUF2QixDQUR1QztBQUV2QyxhQUFLLGdCQUFMLGdDQUE0QixrQkFBNUIsQ0FGdUM7S0FBM0M7O2lCQURFOztxQ0FNMkM7Z0JBQXJDLG1CQUFxQztnQkFBOUIsNkJBQThCO2dCQUFsQix1Q0FBa0I7O0FBQ3pDLGlCQUFLLFdBQUwsQ0FBaUIsSUFBakIsQ0FBc0IsRUFBQyxPQUFPLEtBQVAsRUFBYyxNQUFNLFVBQU4sRUFBckMsRUFEeUM7QUFFekMsaUJBQUssZ0JBQUwsQ0FBc0IsSUFBdEIsQ0FBMkIsRUFBQyxPQUFPLEtBQVAsRUFBYyxNQUFNLGVBQU4sRUFBMUMsRUFGeUM7Ozs7a0NBS25DLE9BQU87QUFDYiwwQ0FBVyxLQUFLLFdBQUwsRUFBa0I7dUJBQUssRUFBRSxLQUFGLElBQVcsS0FBWDthQUFMLENBQTdCLENBRGE7QUFFYiwwQ0FBVyxLQUFLLGdCQUFMLEVBQXVCO3VCQUFLLEVBQUUsS0FBRixJQUFXLEtBQVg7YUFBTCxDQUFsQyxDQUZhOzs7OzJDQUtpQztnQkFBckMsb0JBQXFDO2dCQUE5Qiw4QkFBOEI7Z0JBQWxCLHdDQUFrQjs7QUFDOUMsaUJBQUssV0FBTCxDQUFpQixJQUFqQixDQUFzQjt1QkFBSyxFQUFFLEtBQUYsS0FBWSxLQUFaO2FBQUwsQ0FBdEIsQ0FBOEMsSUFBOUMsR0FBcUQsVUFBckQsQ0FEOEM7QUFFOUMsaUJBQUssZ0JBQUwsQ0FBc0IsSUFBdEIsQ0FBMkI7dUJBQUssRUFBRSxLQUFGLEtBQVksS0FBWjthQUFMLENBQTNCLENBQW1ELElBQW5ELEdBQTBELGVBQTFELENBRjhDOzs7O2tDQUt4QztBQUNOLGlCQUFLLFdBQUwsR0FBbUIsdUJBQVEsS0FBSyxXQUFMLENBQTNCLENBRE07QUFFTixpQkFBSyxnQkFBTCxHQUF3Qix1QkFBUSxLQUFLLGdCQUFMLENBQWhDLENBRk07Ozs7b0NBS0U7QUFDUixtQkFBTztBQUNILDZCQUFhLEtBQUssV0FBTDtBQUNiLGtDQUFrQixLQUFLLGdCQUFMO2FBRnRCLENBRFE7Ozs7V0ExQlY7OztBQWtDTixPQUFPLEdBQVAsR0FBYSxVQUFDLEtBQUQsRUFBUSxHQUFSLEVBQWdCO0FBQ3pCLFFBQUksU0FBUyxJQUFJLE1BQUosQ0FBVyxNQUFNLFdBQU4sRUFBbUIsTUFBTSxnQkFBTixDQUF2QyxDQURxQjtBQUV6QixXQUFPLE1BQVAsQ0FBYyxHQUFkLEVBRnlCO0FBR3pCLFdBQU8sT0FBUCxHQUh5QjtBQUl6QixXQUFPLE9BQU8sU0FBUCxFQUFQLENBSnlCO0NBQWhCOztBQU9iLE9BQU8sTUFBUCxHQUFnQixVQUFDLEtBQUQsRUFBUyxLQUFULEVBQW1CO0FBQy9CLFFBQUksU0FBUyxJQUFJLE1BQUosQ0FBVyxNQUFNLFdBQU4sRUFBbUIsTUFBTSxnQkFBTixDQUF2QyxDQUQyQjtBQUUvQixXQUFPLFNBQVAsQ0FBaUIsS0FBakIsRUFGK0I7QUFHL0IsV0FBTyxPQUFQLEdBSCtCO0FBSS9CLFdBQU8sT0FBTyxTQUFQLEVBQVAsQ0FKK0I7Q0FBbkI7O0FBT2hCLE9BQU8sWUFBUCxHQUFzQixVQUFDLEtBQUQsRUFBUSxHQUFSLEVBQWdCO0FBQ2xDLFFBQUksU0FBUyxJQUFJLE1BQUosQ0FBVyxNQUFNLFdBQU4sRUFBbUIsTUFBTSxnQkFBTixDQUF2QyxDQUQ4QjtBQUVsQyxXQUFPLFdBQVAsQ0FBbUIsR0FBbkIsRUFGa0M7QUFHbEMsV0FBTyxPQUFPLFNBQVAsRUFBUCxDQUhrQztDQUFoQjs7QUFNdEIsT0FBTyxJQUFQLEdBQWMsWUFBTTtBQUNoQixXQUFPO0FBQ0gscUJBQVksRUFBWjtBQUNBLDBCQUFrQixFQUFsQjtLQUZKLENBRGdCO0NBQU47O2tCQU9DIiwiZmlsZSI6Im91dHB1dC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYW5pZWsvcHJvamVjdC9vcGVuc2hpZnQvZW5nbGlzaHRhYmxlIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vLi4vLi4vLi4vLi4vdHlwaW5ncy9tYWluLmQudHNcIiAvPlxuXG5pbXBvcnQgc2h1ZmZsZSBmcm9tICcuLy4uLy4uLy4uL1V0aWxzL3NodWZmbGUnO1xuaW1wb3J0IHtyZW1vdmVJdGVtfSBmcm9tICcuLy4uLy4uLy4uL1V0aWxzL2FycmF5LWhlbHBlcnMnO1xuXG5jbGFzcyBPdXRwdXQge1xuICAgIGNvbnN0cnVjdG9yKHNvdXJjZVdvcmRzLCBkZXN0aW5hdGlvbldvcmRzKSB7XG4gICAgICAgIHRoaXMuc291cmNlV29yZHMgPSBbLi4uc291cmNlV29yZHNdO1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uV29yZHMgPSBbLi4uZGVzdGluYXRpb25Xb3Jkc107XG4gICAgfVxuXG4gICAgYWRkUm93KHtyb3dJZCwgc291cmNlV29yZCwgZGVzdGluYXRpb25Xb3JkfSkge1xuICAgICAgICB0aGlzLnNvdXJjZVdvcmRzLnB1c2goe3Jvd0lkOiByb3dJZCwgdGV4dDogc291cmNlV29yZH0pO1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uV29yZHMucHVzaCh7cm93SWQ6IHJvd0lkLCB0ZXh0OiBkZXN0aW5hdGlvbldvcmR9KTtcbiAgICB9XG5cbiAgICByZW1vdmVSb3cocm93SWQpIHtcbiAgICAgICAgcmVtb3ZlSXRlbSh0aGlzLnNvdXJjZVdvcmRzLCB2ID0+IHYucm93SWQgPT0gcm93SWQpO1xuICAgICAgICByZW1vdmVJdGVtKHRoaXMuZGVzdGluYXRpb25Xb3JkcywgdiA9PiB2LnJvd0lkID09IHJvd0lkKTtcbiAgICB9XG5cbiAgICB0ZXh0Q2hhbmdlZCh7cm93SWQsIHNvdXJjZVdvcmQsIGRlc3RpbmF0aW9uV29yZH0pIHtcbiAgICAgICAgdGhpcy5zb3VyY2VXb3Jkcy5maW5kKHIgPT4gci5yb3dJZCA9PT0gcm93SWQpLnRleHQgPSBzb3VyY2VXb3JkO1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uV29yZHMuZmluZChyID0+IHIucm93SWQgPT09IHJvd0lkKS50ZXh0ID0gZGVzdGluYXRpb25Xb3JkO1xuICAgIH1cblxuICAgIHNodWZmbGUoKSB7XG4gICAgICAgIHRoaXMuc291cmNlV29yZHMgPSBzaHVmZmxlKHRoaXMuc291cmNlV29yZHMpO1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uV29yZHMgPSBzaHVmZmxlKHRoaXMuZGVzdGluYXRpb25Xb3Jkcyk7XG4gICAgfVxuXG4gICAgZ2V0UmVzdWx0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc291cmNlV29yZHM6IHRoaXMuc291cmNlV29yZHMsXG4gICAgICAgICAgICBkZXN0aW5hdGlvbldvcmRzOiB0aGlzLmRlc3RpbmF0aW9uV29yZHNcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbk91dHB1dC5hZGQgPSAoc3RhdGUsIHJvdykgPT4ge1xuICAgIGxldCBvdXRwdXQgPSBuZXcgT3V0cHV0KHN0YXRlLnNvdXJjZVdvcmRzLCBzdGF0ZS5kZXN0aW5hdGlvbldvcmRzKTtcbiAgICBvdXRwdXQuYWRkUm93KHJvdyk7XG4gICAgb3V0cHV0LnNodWZmbGUoKTtcbiAgICByZXR1cm4gb3V0cHV0LmdldFJlc3VsdCgpO1xufTtcblxuT3V0cHV0LnJlbW92ZSA9IChzdGF0ZSAsIHJvd0lkKSA9PiB7XG4gICAgbGV0IG91dHB1dCA9IG5ldyBPdXRwdXQoc3RhdGUuc291cmNlV29yZHMsIHN0YXRlLmRlc3RpbmF0aW9uV29yZHMpO1xuICAgIG91dHB1dC5yZW1vdmVSb3cocm93SWQpO1xuICAgIG91dHB1dC5zaHVmZmxlKCk7XG4gICAgcmV0dXJuIG91dHB1dC5nZXRSZXN1bHQoKTtcbn07XG5cbk91dHB1dC5pbnB1dENoYW5nZWQgPSAoc3RhdGUsIHJvdykgPT4ge1xuICAgIGxldCBvdXRwdXQgPSBuZXcgT3V0cHV0KHN0YXRlLnNvdXJjZVdvcmRzLCBzdGF0ZS5kZXN0aW5hdGlvbldvcmRzKTtcbiAgICBvdXRwdXQudGV4dENoYW5nZWQocm93KTtcbiAgICByZXR1cm4gb3V0cHV0LmdldFJlc3VsdCgpO1xufTtcblxuT3V0cHV0LmluaXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc291cmNlV29yZHM6W10sXG4gICAgICAgIGRlc3RpbmF0aW9uV29yZHM6IFtdXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE91dHB1dDtcbiJdfQ==

/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";
	
	// based on https://bost.ocks.org/mike/shuffle/
	module.exports = function (array) {
	    var m = array.length,
	        t,
	        i;
	
	    // While there remain elements to shuffle…
	    while (m) {
	
	        // Pick a remaining element…
	        i = Math.floor(Math.random() * m--);
	
	        // And swap it with the current element.
	        t = array[m];
	        array[m] = array[i];
	        array[i] = t;
	    }
	
	    return array;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9VdGlscy9zaHVmZmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLE9BQU8sT0FBUCxHQUFpQixVQUFVLEtBQVYsRUFBaUI7QUFDMUIsUUFBSSxJQUFJLE1BQU0sTUFBTjtRQUFjLENBQXRCO1FBQXlCLENBQXpCOzs7QUFEMEIsV0FJbkIsQ0FBUCxFQUFVOzs7QUFHTixZQUFJLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxLQUFnQixHQUFoQixDQUFmOzs7QUFITSxTQU1OLEdBQUksTUFBTSxDQUFOLENBQUosQ0FOTTtBQU9OLGNBQU0sQ0FBTixJQUFXLE1BQU0sQ0FBTixDQUFYLENBUE07QUFRTixjQUFNLENBQU4sSUFBVyxDQUFYLENBUk07S0FBVjs7QUFXQSxXQUFPLEtBQVAsQ0FmMEI7Q0FBakIiLCJmaWxlIjoic2h1ZmZsZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYW5pZWsvcHJvamVjdC9vcGVuc2hpZnQvZW5nbGlzaHRhYmxlIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYmFzZWQgb24gaHR0cHM6Ly9ib3N0Lm9ja3Mub3JnL21pa2Uvc2h1ZmZsZS9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgICAgIHZhciBtID0gYXJyYXkubGVuZ3RoLCB0LCBpO1xuXG4gICAgICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxl4oCmXG4gICAgICAgIHdoaWxlIChtKSB7XG5cbiAgICAgICAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudOKAplxuICAgICAgICAgICAgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG0tLSk7XG5cbiAgICAgICAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICAgICAgICAgIHQgPSBhcnJheVttXTtcbiAgICAgICAgICAgIGFycmF5W21dID0gYXJyYXlbaV07XG4gICAgICAgICAgICBhcnJheVtpXSA9IHQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfTtcblxuIl19

/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.removeItem = removeItem;
	function removeItem(array, predicate) {
	    var index = array.findIndex(predicate);
	    if (index === -1) {
	        return false;
	    }
	
	    array.slice(index, 1);
	    return true;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9VdGlscy9hcnJheS1oZWxwZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O1FBQWdCO0FBQVQsU0FBUyxVQUFULENBQW9CLEtBQXBCLEVBQTJCLFNBQTNCLEVBQXNDO0FBQ3pDLFFBQUksUUFBUSxNQUFNLFNBQU4sQ0FBZ0IsU0FBaEIsQ0FBUixDQURxQztBQUV6QyxRQUFHLFVBQVUsQ0FBQyxDQUFELEVBQUk7QUFDYixlQUFPLEtBQVAsQ0FEYTtLQUFqQjs7QUFJQSxVQUFNLEtBQU4sQ0FBWSxLQUFaLEVBQW1CLENBQW5CLEVBTnlDO0FBT3pDLFdBQU8sSUFBUCxDQVB5QztDQUF0QyIsImZpbGUiOiJhcnJheS1oZWxwZXJzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21hbmllay9wcm9qZWN0L29wZW5zaGlmdC9lbmdsaXNodGFibGUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcmVtb3ZlSXRlbShhcnJheSwgcHJlZGljYXRlKSB7XG4gICAgbGV0IGluZGV4ID0gYXJyYXkuZmluZEluZGV4KHByZWRpY2F0ZSk7XG4gICAgaWYoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgYXJyYXkuc2xpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiB0cnVlO1xufSJdfQ==

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(4);
	
	var _Header = __webpack_require__(52);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Input = __webpack_require__(54);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Configuration = __webpack_require__(70);
	
	var _Configuration2 = _interopRequireDefault(_Configuration);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /// <reference path="./../../../../typings/main.d.ts" />
	
	var TableApp = function (_Component) {
	    _inherits(TableApp, _Component);
	
	    function TableApp() {
	        _classCallCheck(this, TableApp);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TableApp).apply(this, arguments));
	    }
	
	    _createClass(TableApp, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_Header2.default, { header: "HEADER" }),
	                _react2.default.createElement(_Input2.default, null),
	                _react2.default.createElement('hr', null),
	                _react2.default.createElement(_Configuration2.default, null)
	            );
	        }
	    }]);
	
	    return TableApp;
	}(_react.Component);

	exports.default = TableApp;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvY29udGFpbmVycy9UYWJsZUFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUI7Ozs7Ozs7Ozs7O2lDQUNSO0FBQ0wsbUJBQ0k7OztnQkFDSSxrREFBUSxRQUFRLFFBQVIsRUFBUixDQURKO2dCQUVJLG9EQUZKO2dCQUdJLHlDQUhKO2dCQUlJLDREQUpKO2FBREosQ0FESzs7OztXQURRIiwiZmlsZSI6IlRhYmxlQXBwLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21hbmllay9wcm9qZWN0L29wZW5zaGlmdC9lbmdsaXNodGFibGUiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi8uLi8uLi8uLi8uLi90eXBpbmdzL21haW4uZC50c1wiIC8+XG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9jb250YWluZXJzL0lucHV0JztcbmltcG9ydCBDb25maWd1cmF0aW9uIGZyb20gJy4uL2NvbnRhaW5lcnMvQ29uZmlndXJhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgaGVhZGVyPXtcIkhFQURFUlwifSAvPlxuICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxuICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgPENvbmZpZ3VyYXRpb24gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ButtonWithOptions = __webpack_require__(53);
	
	var _ButtonWithOptions2 = _interopRequireDefault(_ButtonWithOptions);
	
	var _objectInspections = __webpack_require__(33);
	
	var objectInspection = _interopRequireWildcard(_objectInspections);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Header = function Header(_ref) {
	    var header = _ref.header;
	
	
	    return _react2.default.createElement(
	        'div',
	        null,
	        header
	    );
	}; /// <reference path="./../../../../typings/main.d.ts" />
	
	Header.propTypes = {
	    header: _react.PropTypes.any.isRequired
	};
	
	exports.default = Header;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOztJQUFZOzs7Ozs7QUFFWixJQUFNLFNBQVMsU0FBVCxNQUFTLE9BQWM7UUFBWixxQkFBWTs7O0FBRXpCLFdBQ0k7OztRQUNLLE1BREw7S0FESixDQUZ5QjtDQUFkOztBQVNmLE9BQU8sU0FBUCxHQUFtQjtBQUNqQixZQUFRLGlCQUFVLEdBQVYsQ0FBYyxVQUFkO0NBRFY7O2tCQUllIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYW5pZWsvcHJvamVjdC9vcGVuc2hpZnQvZW5nbGlzaHRhYmxlIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vLi4vLi4vLi4vLi4vdHlwaW5ncy9tYWluLmQudHNcIiAvPlxuXG5pbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ0bldpdGhPcHRpb25zIGZyb20gJy4vQnV0dG9uV2l0aE9wdGlvbnMnO1xuaW1wb3J0ICogYXMgb2JqZWN0SW5zcGVjdGlvbiBmcm9tICcuLy4uLy4uLy4uL1V0aWxzL29iamVjdEluc3BlY3Rpb25zJztcblxuY29uc3QgSGVhZGVyID0gKHtoZWFkZXJ9KSA9PiB7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtoZWFkZXJ9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5IZWFkZXIucHJvcFR5cGVzID0ge1xuICBoZWFkZXI6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0=

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /// <reference path="./../../../../typings/main.d.ts" />
	
	var ButtonWithOptions = function (_Component) {
	    _inherits(ButtonWithOptions, _Component);
	
	    function ButtonWithOptions() {
	        _classCallCheck(this, ButtonWithOptions);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ButtonWithOptions).apply(this, arguments));
	    }
	
	    _createClass(ButtonWithOptions, [{
	        key: 'createOption',
	        value: function createOption(option) {
	            var onChanged = this.props.onChanged;
	
	
	            return _react2.default.createElement(
	                'a',
	                { key: option.key, onClick: function onClick(e) {
	                        return onChanged(option.key);
	                    } },
	                _react2.default.createElement(
	                    'li',
	                    null,
	                    option.text
	                )
	            );
	        }
	    }, {
	        key: 'getSelectedOptionText',
	        value: function getSelectedOptionText(selectedOption, options) {
	            var option = options.find(function (v) {
	                return v.key == selectedOption;
	            });
	
	            return option.text;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var selectedOption = _props.selectedOption;
	            var options = _props.options;
	            var onChanged = _props.onChanged;
	
	
	            var menuOptions = [];
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var option = _step.value;
	
	                    menuOptions.push(this.createOption(option));
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'btn-group' },
	                _react2.default.createElement(
	                    'a',
	                    { type: 'button', className: 'btn btn-primary dropdown-toggle', 'data-toggle': 'dropdown' },
	                    _react2.default.createElement(
	                        'span',
	                        null,
	                        this.getSelectedOptionText(selectedOption, options)
	                    ),
	                    _react2.default.createElement('span', { className: 'caret' })
	                ),
	                _react2.default.createElement(
	                    'ul',
	                    { className: 'dropdown-menu' },
	                    menuOptions
	                )
	            );
	        }
	    }]);
	
	    return ButtonWithOptions;
	}(_react.Component);
	
	ButtonWithOptions.propTypes = {};
	
	exports.default = ButtonWithOptions;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvY29tcG9uZW50cy9CdXR0b25XaXRoT3B0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFHTTs7Ozs7Ozs7Ozs7cUNBRVcsUUFBUTtnQkFFYixZQUNBLEtBQUssS0FBTCxDQURBLFVBRmE7OztBQUtqQixtQkFDSTs7a0JBQUcsS0FBTSxPQUFPLEdBQVAsRUFBYSxTQUFVLGlCQUFDLENBQUQ7K0JBQU8sVUFBVSxPQUFPLEdBQVA7cUJBQWpCLEVBQWhDO2dCQUNJOzs7b0JBQUssT0FBTyxJQUFQO2lCQURUO2FBREosQ0FMaUI7Ozs7OENBWUMsZ0JBQWdCLFNBQVM7QUFDM0MsZ0JBQUksU0FBUyxRQUFRLElBQVIsQ0FBYTt1QkFBSyxFQUFFLEdBQUYsSUFBUyxjQUFUO2FBQUwsQ0FBdEIsQ0FEdUM7O0FBRzNDLG1CQUFPLE9BQU8sSUFBUCxDQUhvQzs7OztpQ0FNdEM7eUJBR0QsS0FBSyxLQUFMLENBSEM7Z0JBRUQsdUNBRkM7Z0JBRWUseUJBRmY7Z0JBRXdCLDZCQUZ4Qjs7O0FBS0wsZ0JBQUksY0FBYyxFQUFkLENBTEM7Ozs7OztBQU1MLHFDQUFtQixpQ0FBbkIsb0dBQTRCO3dCQUFuQixxQkFBbUI7O0FBQ3hCLGdDQUFZLElBQVosQ0FBaUIsS0FBSyxZQUFMLENBQWtCLE1BQWxCLENBQWpCLEVBRHdCO2lCQUE1Qjs7Ozs7Ozs7Ozs7Ozs7YUFOSzs7QUFVTCxtQkFDSTs7a0JBQUssV0FBVSxXQUFWLEVBQUw7Z0JBQ0k7O3NCQUFHLE1BQUssUUFBTCxFQUFjLFdBQVUsaUNBQVYsRUFBNEMsZUFBWSxVQUFaLEVBQTdEO29CQUNJOzs7d0JBQU8sS0FBSyxxQkFBTCxDQUEyQixjQUEzQixFQUEyQyxPQUEzQyxDQUFQO3FCQURKO29CQUVJLHdDQUFNLFdBQVUsT0FBVixFQUFOLENBRko7aUJBREo7Z0JBS0k7O3NCQUFJLFdBQVUsZUFBVixFQUFKO29CQUNLLFdBREw7aUJBTEo7YUFESixDQVZLOzs7O1dBcEJQOzs7QUE0Q04sa0JBQWtCLFNBQWxCLEdBQThCLEVBQTlCOztrQkFHZSIsImZpbGUiOiJCdXR0b25XaXRoT3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYW5pZWsvcHJvamVjdC9vcGVuc2hpZnQvZW5nbGlzaHRhYmxlIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vLi4vLi4vLi4vLi4vdHlwaW5ncy9tYWluLmQudHNcIiAvPlxuXG5pbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cblxuY2xhc3MgQnV0dG9uV2l0aE9wdGlvbnMgZXh0ZW5kcyBDb21wb25lbnRcbntcbiAgICBjcmVhdGVPcHRpb24ob3B0aW9uKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIG9uQ2hhbmdlZCxcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGEga2V5PXsgb3B0aW9uLmtleSB9IG9uQ2xpY2s9eyAoZSkgPT4gb25DaGFuZ2VkKG9wdGlvbi5rZXkpIH0+XG4gICAgICAgICAgICAgICAgPGxpPntvcHRpb24udGV4dH08L2xpPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldFNlbGVjdGVkT3B0aW9uVGV4dChzZWxlY3RlZE9wdGlvbiwgb3B0aW9ucykge1xuICAgICAgICBsZXQgb3B0aW9uID0gb3B0aW9ucy5maW5kKHYgPT4gdi5rZXkgPT0gc2VsZWN0ZWRPcHRpb24pO1xuXG4gICAgICAgIHJldHVybiBvcHRpb24udGV4dDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgXG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbiwgb3B0aW9ucywgb25DaGFuZ2VkLFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBsZXQgbWVudU9wdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIG1lbnVPcHRpb25zLnB1c2godGhpcy5jcmVhdGVPcHRpb24ob3B0aW9uKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J0bi1ncm91cCc+XG4gICAgICAgICAgICAgICAgPGEgdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeSBkcm9wZG93bi10b2dnbGUnIGRhdGEtdG9nZ2xlPSdkcm9wZG93bic+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLmdldFNlbGVjdGVkT3B0aW9uVGV4dChzZWxlY3RlZE9wdGlvbiwgb3B0aW9ucyl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NhcmV0JyAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdkcm9wZG93bi1tZW51Jz5cbiAgICAgICAgICAgICAgICAgICAge21lbnVPcHRpb25zfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xufVxuXG5CdXR0b25XaXRoT3B0aW9ucy5wcm9wVHlwZXMgPSB7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25XaXRoT3B0aW9ucztcbiJdfQ==

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _reactRedux = __webpack_require__(4);
	
	var _dictionary = __webpack_require__(46);
	
	var _InputTabs = __webpack_require__(55);
	
	var _InputTabs2 = _interopRequireDefault(_InputTabs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapStateToProps = function mapStateToProps(state) {
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = Object.keys(state)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var key = _step.value;
	
	            console.log(key);
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	
	    console.log(state);
	    console.log(state.dictionary.input);
	    return {
	        items: state.dictionary.input
	    };
	}; /// <reference path="./../../../../typings/main.d.ts" />
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	    return {
	        onTabChanged: function onTabChanged(selectedTab, previousTab) {
	            console.log('Selected tab: ' + selectedTab + ', previous tab: ' + previousTab + '.');
	        },
	
	        onTextInputChanged: function onTextInputChanged(input) {
	            return console.log('New text input ' + input + '.');
	        },
	
	        onTableInputChanged: function onTableInputChanged(rowId, sourceWord, destinationWord) {
	            console.log('New text input ' + sourceWord + ', ' + destinationWord + '.');
	            dispatch((0, _dictionary.tableInputChanged)({ rowId: rowId, sourceWord: sourceWord, destinationWord: destinationWord }));
	        },
	
	        onRemoveRowBtnClicked: function onRemoveRowBtnClicked(rowId) {
	            return dispatch((0, _dictionary.rowRemoved)({ rowId: rowId }));
	        },
	
	        onNewRowBtnClicked: function onNewRowBtnClicked() {
	            return dispatch((0, _dictionary.newRowAdded)());
	        }
	    };
	};
	
	var Input = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_InputTabs2.default);
	
	exports.default = Input;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvY29udGFpbmVycy9JbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQTs7QUFFQTs7QUFLQTs7Ozs7O0FBRUEsSUFBTSxrQkFBa0IsU0FBbEIsZUFBa0IsQ0FBQyxLQUFELEVBQVc7Ozs7OztBQUMvQiw2QkFBZSxPQUFPLElBQVAsQ0FBWSxLQUFaLDJCQUFmLG9HQUFtQztnQkFBM0Isa0JBQTJCOztBQUMvQixvQkFBUSxHQUFSLENBQVksR0FBWixFQUQrQjtTQUFuQzs7Ozs7Ozs7Ozs7Ozs7S0FEK0I7O0FBSS9CLFlBQVEsR0FBUixDQUFZLEtBQVosRUFKK0I7QUFLL0IsWUFBUSxHQUFSLENBQVksTUFBTSxVQUFOLENBQWlCLEtBQWpCLENBQVosQ0FMK0I7QUFNL0IsV0FBTztBQUNILGVBQU8sTUFBTSxVQUFOLENBQWlCLEtBQWpCO0tBRFgsQ0FOK0I7Q0FBWDs7QUFXeEIsSUFBTSxxQkFBcUIsU0FBckIsa0JBQXFCLENBQUMsUUFBRCxFQUFjO0FBQ3JDLFdBQU87QUFDSCxzQkFBYyxzQkFBQyxXQUFELEVBQWMsV0FBZCxFQUE4QjtBQUN4QyxvQkFBUSxHQUFSLG9CQUE2QixtQ0FBOEIsaUJBQTNELEVBRHdDO1NBQTlCOztBQUlkLDRCQUFvQiw0QkFBQyxLQUFEO21CQUFXLFFBQVEsR0FBUixxQkFBOEIsV0FBOUI7U0FBWDs7QUFFcEIsNkJBQXFCLDZCQUFDLEtBQUQsRUFBUSxVQUFSLEVBQW9CLGVBQXBCLEVBQXdDO0FBQ3pELG9CQUFRLEdBQVIscUJBQThCLG9CQUFlLHFCQUE3QyxFQUR5RDtBQUV6RCxxQkFBUyxtQ0FBa0IsRUFBQyxZQUFELEVBQVEsc0JBQVIsRUFBb0IsZ0NBQXBCLEVBQWxCLENBQVQsRUFGeUQ7U0FBeEM7O0FBS3JCLCtCQUF3QiwrQkFBQyxLQUFEO21CQUFXLFNBQVMsNEJBQVcsRUFBQyxZQUFELEVBQVgsQ0FBVDtTQUFYOztBQUV4Qiw0QkFBb0I7bUJBQU0sU0FBUyw4QkFBVDtTQUFOO0tBZHhCLENBRHFDO0NBQWQ7O0FBbUIzQixJQUFNLFFBQVEseUJBQ1YsZUFEVSxFQUVWLGtCQUZVLHNCQUFSOztrQkFLUyIsImZpbGUiOiJJbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYW5pZWsvcHJvamVjdC9vcGVuc2hpZnQvZW5nbGlzaHRhYmxlIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vLi4vLi4vLi4vLi4vdHlwaW5ncy9tYWluLmQudHNcIiAvPlxuXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHtcbiAgICBuZXdSb3dBZGRlZCxcbiAgICByb3dSZW1vdmVkLFxuICAgIHRhYmxlSW5wdXRDaGFuZ2VkXG59IGZyb20gJy4uL3JlZHVjZXJzL2RpY3Rpb25hcnknO1xuaW1wb3J0IElucHV0VGFicyBmcm9tICcuLy4uL2NvbXBvbmVudHMvSW5wdXRUYWJzJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgZm9yKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoc3RhdGUpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGtleSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcbiAgICBjb25zb2xlLmxvZyhzdGF0ZS5kaWN0aW9uYXJ5LmlucHV0KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBpdGVtczogc3RhdGUuZGljdGlvbmFyeS5pbnB1dFxuICAgIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBvblRhYkNoYW5nZWQ6IChzZWxlY3RlZFRhYiwgcHJldmlvdXNUYWIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTZWxlY3RlZCB0YWI6ICR7c2VsZWN0ZWRUYWJ9LCBwcmV2aW91cyB0YWI6ICR7cHJldmlvdXNUYWJ9LmApO1xuICAgICAgICB9LFxuXG4gICAgICAgIG9uVGV4dElucHV0Q2hhbmdlZDogKGlucHV0KSA9PiBjb25zb2xlLmxvZyhgTmV3IHRleHQgaW5wdXQgJHtpbnB1dH0uYCksXG5cbiAgICAgICAgb25UYWJsZUlucHV0Q2hhbmdlZDogKHJvd0lkLCBzb3VyY2VXb3JkLCBkZXN0aW5hdGlvbldvcmQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBOZXcgdGV4dCBpbnB1dCAke3NvdXJjZVdvcmR9LCAke2Rlc3RpbmF0aW9uV29yZH0uYCk7XG4gICAgICAgICAgICBkaXNwYXRjaCh0YWJsZUlucHV0Q2hhbmdlZCh7cm93SWQsIHNvdXJjZVdvcmQsIGRlc3RpbmF0aW9uV29yZH0pKTtcbiAgICAgICAgfSxcblxuICAgICAgICBvblJlbW92ZVJvd0J0bkNsaWNrZWQgOiAocm93SWQpID0+IGRpc3BhdGNoKHJvd1JlbW92ZWQoe3Jvd0lkfSkpLFxuXG4gICAgICAgIG9uTmV3Um93QnRuQ2xpY2tlZDogKCkgPT4gZGlzcGF0Y2gobmV3Um93QWRkZWQoKSlcbiAgICB9O1xufTtcblxuY29uc3QgSW5wdXQgPSBjb25uZWN0KFxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoSW5wdXRUYWJzKTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG5cbiJdfQ==

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.InputTabs = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactTabs = __webpack_require__(56);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TextInput = __webpack_require__(66);
	
	var _TextInput2 = _interopRequireDefault(_TextInput);
	
	var _TableInput = __webpack_require__(67);
	
	var _TableInput2 = _interopRequireDefault(_TableInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /// <reference path="./../../../../typings/main.d.ts" />
	
	var InputTabs = exports.InputTabs = function (_Component) {
	    _inherits(InputTabs, _Component);
	
	    function InputTabs() {
	        _classCallCheck(this, InputTabs);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(InputTabs).apply(this, arguments));
	    }
	
	    _createClass(InputTabs, [{
	        key: 'handleSelect',
	        value: function handleSelect(currentTab, previousTab) {
	            console.log('current tab ' + currentTab + ', prevous tab' + previousTab);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _reactTabs.Tabs,
	                { onSelect: this.handleSelect },
	                _react2.default.createElement(
	                    _reactTabs.TabList,
	                    null,
	                    _react2.default.createElement(
	                        _reactTabs.Tab,
	                        null,
	                        'text'
	                    ),
	                    _react2.default.createElement(
	                        _reactTabs.Tab,
	                        null,
	                        'table'
	                    )
	                ),
	                _react2.default.createElement(
	                    _reactTabs.TabPanel,
	                    null,
	                    _react2.default.createElement(_TableInput2.default, {
	                        onInputChanged: this.props.onTableInputChanged,
	                        items: this.props.items,
	                        onRemoveRowClicked: this.props.onRemoveRowBtnClicked,
	                        onNewRowBtnClicked: this.props.onNewRowBtnClicked
	                    })
	                ),
	                _react2.default.createElement(
	                    _reactTabs.TabPanel,
	                    null,
	                    _react2.default.createElement(_TextInput2.default, { onInputChanged: this.props.onTextInputChanged })
	                )
	            );
	        }
	    }]);
	
	    return InputTabs;
	}(_react.Component);
	
	;
	
	InputTabs.propTypes = {
	    onTabChanged: _react.PropTypes.func.isRequired,
	    onTextInputChanged: _react.PropTypes.func.isRequired,
	
	    onTableInputChanged: _react.PropTypes.func.isRequired,
	    onRemoveRowBtnClicked: _react.PropTypes.func.isRequired,
	    onNewRowBtnClicked: _react.PropTypes.func.isRequired,
	    items: _react.PropTypes.array.isRequired
	};
	
	exports.default = InputTabs;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvY29tcG9uZW50cy9JbnB1dFRhYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFYTs7Ozs7Ozs7Ozs7cUNBQ0ksWUFBWSxhQUFhO0FBQ2xDLG9CQUFRLEdBQVIsQ0FBWSxpQkFBaUIsVUFBakIsR0FBOEIsZUFBOUIsR0FBZ0QsV0FBaEQsQ0FBWixDQURrQzs7OztpQ0FJN0I7QUFDTCxtQkFDSTs7a0JBQU0sVUFBVSxLQUFLLFlBQUwsRUFBaEI7Z0JBQ0k7OztvQkFDSTs7OztxQkFESjtvQkFFSTs7OztxQkFGSjtpQkFESjtnQkFLSTs7O29CQUNJO0FBQ0ksd0NBQWdCLEtBQUssS0FBTCxDQUFXLG1CQUFYO0FBQ2hCLCtCQUFPLEtBQUssS0FBTCxDQUFXLEtBQVg7QUFDUCw0Q0FBb0IsS0FBSyxLQUFMLENBQVcscUJBQVg7QUFDcEIsNENBQW9CLEtBQUssS0FBTCxDQUFXLGtCQUFYO3FCQUp4QixDQURKO2lCQUxKO2dCQWFJOzs7b0JBQ0kscURBQVcsZ0JBQWdCLEtBQUssS0FBTCxDQUFXLGtCQUFYLEVBQTNCLENBREo7aUJBYko7YUFESixDQURLOzs7O1dBTEE7OztBQTJCYjs7QUFFQSxVQUFVLFNBQVYsR0FBc0I7QUFDbEIsa0JBQWMsaUJBQVUsSUFBVixDQUFlLFVBQWY7QUFDZCx3QkFBb0IsaUJBQVUsSUFBVixDQUFlLFVBQWY7O0FBRXBCLHlCQUFxQixpQkFBVSxJQUFWLENBQWUsVUFBZjtBQUNyQiwyQkFBdUIsaUJBQVUsSUFBVixDQUFlLFVBQWY7QUFDdkIsd0JBQW9CLGlCQUFVLElBQVYsQ0FBZSxVQUFmO0FBQ3BCLFdBQU8saUJBQVUsS0FBVixDQUFnQixVQUFoQjtDQVBYOztrQkFVZSIsImZpbGUiOiJJbnB1dFRhYnMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbWFuaWVrL3Byb2plY3Qvb3BlbnNoaWZ0L2VuZ2xpc2h0YWJsZSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLy4uLy4uLy4uLy4uL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cblxuaW1wb3J0IHtUYWIsIFRhYnMsIFRhYkxpc3QsIFRhYlBhbmVsfSBmcm9tICdyZWFjdC10YWJzJztcbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcywgQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGV4dElucHV0IGZyb20gJy4vVGV4dElucHV0JztcbmltcG9ydCBUYWJsZUlucHV0IGZyb20gJy4vVGFibGVJbnB1dCc7XG5cbmV4cG9ydCBjbGFzcyBJbnB1dFRhYnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGhhbmRsZVNlbGVjdChjdXJyZW50VGFiLCBwcmV2aW91c1RhYikge1xuICAgICAgICBjb25zb2xlLmxvZygnY3VycmVudCB0YWIgJyArIGN1cnJlbnRUYWIgKyAnLCBwcmV2b3VzIHRhYicgKyBwcmV2aW91c1RhYik7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRhYnMgb25TZWxlY3Q9e3RoaXMuaGFuZGxlU2VsZWN0fT5cbiAgICAgICAgICAgICAgICA8VGFiTGlzdD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYj50ZXh0PC9UYWI+XG4gICAgICAgICAgICAgICAgICAgIDxUYWI+dGFibGU8L1RhYj5cbiAgICAgICAgICAgICAgICA8L1RhYkxpc3Q+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZWQ9e3RoaXMucHJvcHMub25UYWJsZUlucHV0Q2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXt0aGlzLnByb3BzLml0ZW1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmVSb3dDbGlja2VkPXt0aGlzLnByb3BzLm9uUmVtb3ZlUm93QnRuQ2xpY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTmV3Um93QnRuQ2xpY2tlZD17dGhpcy5wcm9wcy5vbk5ld1Jvd0J0bkNsaWNrZWR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXQgb25JbnB1dENoYW5nZWQ9e3RoaXMucHJvcHMub25UZXh0SW5wdXRDaGFuZ2VkfS8+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgKTtcbiAgICB9O1xufVxuO1xuXG5JbnB1dFRhYnMucHJvcFR5cGVzID0ge1xuICAgIG9uVGFiQ2hhbmdlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblRleHRJbnB1dENoYW5nZWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICBvblRhYmxlSW5wdXRDaGFuZ2VkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uUmVtb3ZlUm93QnRuQ2xpY2tlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbk5ld1Jvd0J0bkNsaWNrZWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dFRhYnM7XG5cbiJdfQ==

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  Tabs: __webpack_require__(57),
	  TabList: __webpack_require__(63),
	  Tab: __webpack_require__(62),
	  TabPanel: __webpack_require__(65)
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _classnames = __webpack_require__(58);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _jsStylesheet = __webpack_require__(59);
	
	var _jsStylesheet2 = _interopRequireDefault(_jsStylesheet);
	
	var _helpersUuid = __webpack_require__(60);
	
	var _helpersUuid2 = _interopRequireDefault(_helpersUuid);
	
	var _helpersChildrenPropType = __webpack_require__(61);
	
	var _helpersChildrenPropType2 = _interopRequireDefault(_helpersChildrenPropType);
	
	// Determine if a node from event.target is a Tab element
	function isTabNode(node) {
	  return node.nodeName === 'LI' && node.getAttribute('role') === 'tab';
	}
	
	// Determine if a tab node is disabled
	function isTabDisabled(node) {
	  return node.getAttribute('aria-disabled') === 'true';
	}
	
	var useDefaultStyles = true;
	
	module.exports = _react2['default'].createClass({
	  displayName: 'Tabs',
	
	  propTypes: {
	    className: _react.PropTypes.string,
	    selectedIndex: _react.PropTypes.number,
	    onSelect: _react.PropTypes.func,
	    focus: _react.PropTypes.bool,
	    children: _helpersChildrenPropType2['default'],
	    forceRenderTabPanel: _react.PropTypes.bool
	  },
	
	  childContextTypes: {
	    forceRenderTabPanel: _react.PropTypes.bool
	  },
	
	  statics: {
	    setUseDefaultStyles: function setUseDefaultStyles(use) {
	      useDefaultStyles = use;
	    }
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      selectedIndex: -1,
	      focus: false,
	      forceRenderTabPanel: false
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return this.copyPropsToState(this.props);
	  },
	
	  getChildContext: function getChildContext() {
	    return {
	      forceRenderTabPanel: this.props.forceRenderTabPanel
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    if (useDefaultStyles) {
	      (0, _jsStylesheet2['default'])(__webpack_require__(64));
	    }
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
	    this.setState(this.copyPropsToState(newProps));
	  },
	
	  handleClick: function handleClick(e) {
	    var node = e.target;
	    do {
	      if (isTabNode(node)) {
	        if (isTabDisabled(node)) {
	          return;
	        }
	
	        var index = [].slice.call(node.parentNode.children).indexOf(node);
	        this.setSelected(index);
	        return;
	      }
	    } while ((node = node.parentNode) !== null);
	  },
	
	  handleKeyDown: function handleKeyDown(e) {
	    if (isTabNode(e.target)) {
	      var index = this.state.selectedIndex;
	      var preventDefault = false;
	
	      // Select next tab to the left
	      if (e.keyCode === 37 || e.keyCode === 38) {
	        index = this.getPrevTab(index);
	        preventDefault = true;
	      }
	      // Select next tab to the right
	      /* eslint brace-style:0 */
	      else if (e.keyCode === 39 || e.keyCode === 40) {
	          index = this.getNextTab(index);
	          preventDefault = true;
	        }
	
	      // This prevents scrollbars from moving around
	      if (preventDefault) {
	        e.preventDefault();
	      }
	
	      this.setSelected(index, true);
	    }
	  },
	
	  setSelected: function setSelected(index, focus) {
	    // Don't do anything if nothing has changed
	    if (index === this.state.selectedIndex) return;
	    // Check index boundary
	    if (index < 0 || index >= this.getTabsCount()) return;
	
	    // Keep reference to last index for event handler
	    var last = this.state.selectedIndex;
	
	    // Update selected index
	    this.setState({ selectedIndex: index, focus: focus === true });
	
	    // Call change event handler
	    if (typeof this.props.onSelect === 'function') {
	      this.props.onSelect(index, last);
	    }
	  },
	
	  getNextTab: function getNextTab(index) {
	    var count = this.getTabsCount();
	
	    // Look for non-disabled tab from index to the last tab on the right
	    for (var i = index + 1; i < count; i++) {
	      var tab = this.getTab(i);
	      if (!isTabDisabled((0, _reactDom.findDOMNode)(tab))) {
	        return i;
	      }
	    }
	
	    // If no tab found, continue searching from first on left to index
	    for (var i = 0; i < index; i++) {
	      var tab = this.getTab(i);
	      if (!isTabDisabled((0, _reactDom.findDOMNode)(tab))) {
	        return i;
	      }
	    }
	
	    // No tabs are disabled, return index
	    return index;
	  },
	
	  getPrevTab: function getPrevTab(index) {
	    var i = index;
	
	    // Look for non-disabled tab from index to first tab on the left
	    while (i--) {
	      var tab = this.getTab(i);
	      if (!isTabDisabled((0, _reactDom.findDOMNode)(tab))) {
	        return i;
	      }
	    }
	
	    // If no tab found, continue searching from last tab on right to index
	    i = this.getTabsCount();
	    while (i-- > index) {
	      var tab = this.getTab(i);
	      if (!isTabDisabled((0, _reactDom.findDOMNode)(tab))) {
	        return i;
	      }
	    }
	
	    // No tabs are disabled, return index
	    return index;
	  },
	
	  getTabsCount: function getTabsCount() {
	    return this.props.children && this.props.children[0] ? _react2['default'].Children.count(this.props.children[0].props.children) : 0;
	  },
	
	  getPanelsCount: function getPanelsCount() {
	    return _react2['default'].Children.count(this.props.children.slice(1));
	  },
	
	  getTabList: function getTabList() {
	    return this.refs.tablist;
	  },
	
	  getTab: function getTab(index) {
	    return this.refs['tabs-' + index];
	  },
	
	  getPanel: function getPanel(index) {
	    return this.refs['panels-' + index];
	  },
	
	  getChildren: function getChildren() {
	    var index = 0;
	    var count = 0;
	    var children = this.props.children;
	    var state = this.state;
	    var tabIds = this.tabIds = this.tabIds || [];
	    var panelIds = this.panelIds = this.panelIds || [];
	    var diff = this.tabIds.length - this.getTabsCount();
	
	    // Add ids if new tabs have been added
	    // Don't bother removing ids, just keep them in case they are added again
	    // This is more efficient, and keeps the uuid counter under control
	    while (diff++ < 0) {
	      tabIds.push((0, _helpersUuid2['default'])());
	      panelIds.push((0, _helpersUuid2['default'])());
	    }
	
	    // Map children to dynamically setup refs
	    return _react2['default'].Children.map(children, function (child) {
	      // null happens when conditionally rendering TabPanel/Tab
	      // see https://github.com/rackt/react-tabs/issues/37
	      if (child === null) {
	        return null;
	      }
	
	      var result = null;
	
	      // Clone TabList and Tab components to have refs
	      if (count++ === 0) {
	        // TODO try setting the uuid in the "constructor" for `Tab`/`TabPanel`
	        result = (0, _react.cloneElement)(child, {
	          ref: 'tablist',
	          children: _react2['default'].Children.map(child.props.children, function (tab) {
	            // null happens when conditionally rendering TabPanel/Tab
	            // see https://github.com/rackt/react-tabs/issues/37
	            if (tab === null) {
	              return null;
	            }
	
	            var ref = 'tabs-' + index;
	            var id = tabIds[index];
	            var panelId = panelIds[index];
	            var selected = state.selectedIndex === index;
	            var focus = selected && state.focus;
	
	            index++;
	
	            return (0, _react.cloneElement)(tab, {
	              ref: ref,
	              id: id,
	              panelId: panelId,
	              selected: selected,
	              focus: focus
	            });
	          })
	        });
	
	        // Reset index for panels
	        index = 0;
	      }
	      // Clone TabPanel components to have refs
	      else {
	          var ref = 'panels-' + index;
	          var id = panelIds[index];
	          var tabId = tabIds[index];
	          var selected = state.selectedIndex === index;
	
	          index++;
	
	          result = (0, _react.cloneElement)(child, {
	            ref: ref,
	            id: id,
	            tabId: tabId,
	            selected: selected
	          });
	        }
	
	      return result;
	    });
	  },
	
	  render: function render() {
	    var _this = this;
	
	    // This fixes an issue with focus management.
	    //
	    // Ultimately, when focus is true, and an input has focus,
	    // and any change on that input causes a state change/re-render,
	    // focus gets sent back to the active tab, and input loses focus.
	    //
	    // Since the focus state only needs to be remembered
	    // for the current render, we can reset it once the
	    // render has happened.
	    //
	    // Don't use setState, because we don't want to re-render.
	    //
	    // See https://github.com/rackt/react-tabs/pull/7
	    if (this.state.focus) {
	      setTimeout(function () {
	        _this.state.focus = false;
	      }, 0);
	    }
	
	    return _react2['default'].createElement(
	      'div',
	      {
	        className: (0, _classnames2['default'])('ReactTabs', 'react-tabs', this.props.className),
	        onClick: this.handleClick,
	        onKeyDown: this.handleKeyDown
	      },
	      this.getChildren()
	    );
	  },
	
	  // This is an anti-pattern, so sue me
	  copyPropsToState: function copyPropsToState(props) {
	    var selectedIndex = props.selectedIndex;
	
	    // If no selectedIndex prop was supplied, then try
	    // preserving the existing selectedIndex from state.
	    // If the state has not selectedIndex, default
	    // to the first tab in the TabList.
	    //
	    // TODO: Need automation testing around this
	    // Manual testing can be done using examples/focus
	    // See 'should preserve selectedIndex when typing' in specs/Tabs.spec.js
	    if (selectedIndex === -1) {
	      if (this.state && this.state.selectedIndex) {
	        selectedIndex = this.state.selectedIndex;
	      } else {
	        selectedIndex = 0;
	      }
	    }
	
	    return {
	      selectedIndex: selectedIndex,
	      focus: props.focus
	    };
	  }
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	!(function() {
	  function jss(blocks) {
	    var css = [];
	    for (var block in blocks)
	      css.push(createStyleBlock(block, blocks[block]));
	    injectCSS(css);
	  }
	
	  function createStyleBlock(selector, rules) {
	    return selector + ' {\n' + parseRules(rules) + '\n}';
	  }
	
	  function parseRules(rules) {
	    var css = [];
	    for (var rule in rules)
	      css.push('  '+rule+': '+rules[rule]+';');
	    return css.join('\n');
	  }
	
	  function injectCSS(css) {
	    var style = document.getElementById('jss-styles');
	    if (!style) {
	      style = document.createElement('style');
	      style.setAttribute('id', 'jss-styles');
	      var head = document.getElementsByTagName('head')[0];
	      head.insertBefore(style, head.firstChild);
	    }
	    var node = document.createTextNode(css.join('\n\n'));
	    style.appendChild(node);
	  }
	
	  if (true)
	    module.exports = jss;
	  else
	    window.jss = jss;
	
	})();
	


/***/ },
/* 60 */
/***/ function(module, exports) {

	// Get a universally unique identifier
	'use strict';
	
	var count = 0;
	module.exports = function uuid() {
	  return 'react-tabs-' + count++;
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _componentsTab = __webpack_require__(62);
	
	var _componentsTab2 = _interopRequireDefault(_componentsTab);
	
	var _componentsTabList = __webpack_require__(63);
	
	var _componentsTabList2 = _interopRequireDefault(_componentsTabList);
	
	module.exports = function childrenPropTypes(props, propName) {
	  var error = undefined;
	  var tabsCount = 0;
	  var panelsCount = 0;
	  var children = props[propName];
	
	  _react2['default'].Children.forEach(children, function (child) {
	    // null happens when conditionally rendering TabPanel/Tab
	    // see https://github.com/rackt/react-tabs/issues/37
	    if (child === null) {
	      return;
	    }
	
	    if (child.type === _componentsTabList2['default']) {
	      _react2['default'].Children.forEach(child.props.children, function (c) {
	        // null happens when conditionally rendering TabPanel/Tab
	        // see https://github.com/rackt/react-tabs/issues/37
	        if (c === null) {
	          return;
	        }
	
	        if (c.type === _componentsTab2['default']) {
	          tabsCount++;
	        } else {
	          error = new Error('Expected `Tab` but found `' + (c.type.displayName || c.type) + '`');
	        }
	      });
	    } else if (child.type.displayName === 'TabPanel') {
	      panelsCount++;
	    } else {
	      error = new Error('Expected `TabList` or `TabPanel` but found `' + (child.type.displayName || child.type) + '`');
	    }
	  });
	
	  if (tabsCount !== panelsCount) {
	    error = new Error('There should be an equal number of `Tabs` and `TabPanels`. ' + 'Received ' + tabsCount + ' `Tabs` and ' + panelsCount + ' `TabPanels`.');
	  }
	
	  return error;
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _classnames = __webpack_require__(58);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function syncNodeAttributes(node, props) {
	  if (props.selected) {
	    node.setAttribute('tabindex', 0);
	    node.setAttribute('selected', 'selected');
	    if (props.focus) {
	      node.focus();
	    }
	  } else {
	    node.removeAttribute('tabindex');
	    node.removeAttribute('selected');
	  }
	}
	
	module.exports = _react2['default'].createClass({
	  displayName: 'Tab',
	
	  propTypes: {
	    className: _react.PropTypes.string,
	    id: _react.PropTypes.string,
	    selected: _react.PropTypes.bool,
	    disabled: _react.PropTypes.bool,
	    panelId: _react.PropTypes.string,
	    children: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object, _react.PropTypes.string])
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      focus: false,
	      selected: false,
	      id: null,
	      panelId: null
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    syncNodeAttributes((0, _reactDom.findDOMNode)(this), this.props);
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    syncNodeAttributes((0, _reactDom.findDOMNode)(this), this.props);
	  },
	
	  render: function render() {
	    return _react2['default'].createElement(
	      'li',
	      {
	        className: (0, _classnames2['default'])('ReactTabs__Tab', this.props.className, {
	          'ReactTabs__Tab--selected': this.props.selected,
	          'ReactTabs__Tab--disabled': this.props.disabled
	        }),
	        role: 'tab',
	        id: this.props.id,
	        'aria-selected': this.props.selected ? 'true' : 'false',
	        'aria-expanded': this.props.selected ? 'true' : 'false',
	        'aria-disabled': this.props.disabled ? 'true' : 'false',
	        'aria-controls': this.props.panelId
	      },
	      this.props.children
	    );
	  }
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(58);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	module.exports = _react2['default'].createClass({
	  displayName: 'TabList',
	
	  propTypes: {
	    className: _react.PropTypes.string,
	    children: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.array])
	  },
	
	  render: function render() {
	    return _react2['default'].createElement(
	      'ul',
	      {
	        className: (0, _classnames2['default'])('ReactTabs__TabList', this.props.className),
	        role: 'tablist'
	      },
	      this.props.children
	    );
	  }
	});

/***/ },
/* 64 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  '.react-tabs [role=tablist]': {
	    'border-bottom': '1px solid #aaa',
	    'margin': '0 0 10px',
	    'padding': '0'
	  },
	
	  '.react-tabs [role=tab]': {
	    'display': 'inline-block',
	    'border': '1px solid transparent',
	    'border-bottom': 'none',
	    'bottom': '-1px',
	    'position': 'relative',
	    'list-style': 'none',
	    'padding': '6px 12px',
	    'cursor': 'pointer'
	  },
	
	  '.react-tabs [role=tab][aria-selected=true]': {
	    'background': '#fff',
	    'border-color': '#aaa',
	    'color': 'black',
	    'border-radius': '5px 5px 0 0',
	    '-moz-border-radius': '5px 5px 0 0',
	    '-webkit-border-radius': '5px 5px 0 0'
	  },
	
	  '.react-tabs [role=tab][aria-disabled=true]': {
	    'color': 'GrayText',
	    'cursor': 'default'
	  },
	
	  '.react-tabs [role=tab]:focus': {
	    'box-shadow': '0 0 5px hsl(208, 99%, 50%)',
	    'border-color': 'hsl(208, 99%, 50%)',
	    'outline': 'none'
	  },
	
	  '.react-tabs [role=tab]:focus:after': {
	    'content': '""',
	    'position': 'absolute',
	    'height': '5px',
	    'left': '-4px',
	    'right': '-4px',
	    'bottom': '-5px',
	    'background': '#fff'
	  }
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(58);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	module.exports = _react2['default'].createClass({
	  displayName: 'TabPanel',
	
	  propTypes: {
	    className: _react.PropTypes.string,
	    selected: _react.PropTypes.bool,
	    id: _react.PropTypes.string,
	    tabId: _react.PropTypes.string,
	    children: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object, _react.PropTypes.string])
	  },
	
	  contextTypes: {
	    forceRenderTabPanel: _react.PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      selected: false,
	      id: null,
	      tabId: null
	    };
	  },
	
	  render: function render() {
	    var children = this.context.forceRenderTabPanel || this.props.selected ? this.props.children : null;
	
	    return _react2['default'].createElement(
	      'div',
	      {
	        className: (0, _classnames2['default'])('ReactTabs__TabPanel', this.props.className, {
	          'ReactTabs__TabPanel--selected': this.props.selected
	        }),
	        role: 'tabpanel',
	        id: this.props.id,
	        'aria-labelledby': this.props.tabId,
	        style: { display: this.props.selected ? null : 'none' }
	      },
	      children
	    );
	  }
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TextInput = function TextInput(_ref) {
	    var onInputChanged = _ref.onInputChanged;
	
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement('textarea', { onChange: function onChange(e) {
	                    return onInputChanged(e.target.value);
	                } })
	        )
	    );
	};
	
	TextInput.propTypes = {
	    onInputChanged: _react.PropTypes.any.isRequired
	};
	
	exports.default = TextInput;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvY29tcG9uZW50cy9UZXh0SW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU0sWUFBWSxTQUFaLFNBQVksT0FBd0I7UUFBckIscUNBQXFCOztBQUN0QyxXQUNJOzs7UUFDSTs7O1lBQ0ksNENBQVUsVUFBVTsyQkFBSyxlQUFlLEVBQUUsTUFBRixDQUFTLEtBQVQ7aUJBQXBCLEVBQXBCLENBREo7U0FESjtLQURKLENBRHNDO0NBQXhCOztBQVVsQixVQUFVLFNBQVYsR0FBc0I7QUFDbEIsb0JBQWdCLGlCQUFVLEdBQVYsQ0FBYyxVQUFkO0NBRHBCOztrQkFJZSIsImZpbGUiOiJUZXh0SW5wdXQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbWFuaWVrL3Byb2plY3Qvb3BlbnNoaWZ0L2VuZ2xpc2h0YWJsZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFRleHRJbnB1dCA9ICh7IG9uSW5wdXRDaGFuZ2VkIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgb25DaGFuZ2U9e2UgPT4gb25JbnB1dENoYW5nZWQoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5UZXh0SW5wdXQucHJvcFR5cGVzID0ge1xuICAgIG9uSW5wdXRDaGFuZ2VkOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRJbnB1dDtcbiJdfQ==

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TableInput = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TableInputRow = __webpack_require__(68);
	
	var _TableInputRow2 = _interopRequireDefault(_TableInputRow);
	
	var _Button = __webpack_require__(69);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /// <reference path="./../../../../typings/main.d.ts" />
	
	var TableInput = exports.TableInput = function (_Component) {
	    _inherits(TableInput, _Component);
	
	    function TableInput() {
	        _classCallCheck(this, TableInput);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TableInput).apply(this, arguments));
	    }
	
	    _createClass(TableInput, [{
	        key: 'render',
	        value: function render() {
	            var rows = this.getRows();
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_Button2.default, { content: 'Add', onClick: this.props.onNewRowBtnClicked }),
	                _react2.default.createElement(
	                    'table',
	                    { className: 'table' },
	                    _react2.default.createElement(
	                        'thead',
	                        null,
	                        _react2.default.createElement(
	                            'tr',
	                            null,
	                            _react2.default.createElement(
	                                'th',
	                                null,
	                                'Original'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'tr',
	                            null,
	                            _react2.default.createElement(
	                                'th',
	                                null,
	                                'Translated'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'tbody',
	                        null,
	                        rows
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'getRows',
	        value: function getRows() {
	            var _props = this.props;
	            var items = _props.items;
	            var onRemoveRowClicked = _props.onRemoveRowClicked;
	            var onNewRowBtnClicked = _props.onNewRowBtnClicked;
	            var _onInputChanged = _props.onInputChanged;
	
	            var result = [];
	            items.map(function (item) {
	                result.push(_react2.default.createElement(_TableInputRow2.default, {
	                    key: item.rowId,
	                    sourceWord: item.sourceWord,
	                    destinationWord: item.destinationWord,
	                    onRemoveBtnClicked: function onRemoveBtnClicked() {
	                        return onRemoveRowClicked(item.rowId);
	                    },
	                    onInputChanged: function onInputChanged(source, destination) {
	                        return _onInputChanged(item.rowId, source, destination);
	                    }
	                }));
	            });
	
	            return result;
	        }
	    }]);
	
	    return TableInput;
	}(_react.Component);
	
	TableInput.propTypes = {
	    items: _react.PropTypes.array.isRequired,
	    onRemoveRowClicked: _react.PropTypes.func.isRequired,
	    onNewRowBtnClicked: _react.PropTypes.func.isRequired,
	    onInputChanged: _react.PropTypes.func.isRequired
	};
	
	exports.default = TableInput;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvY29tcG9uZW50cy9UYWJsZUlucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRWE7Ozs7Ozs7Ozs7O2lDQUNBO0FBQ0wsZ0JBQUksT0FBTyxLQUFLLE9BQUwsRUFBUCxDQURDO0FBRUwsbUJBQ0k7OztnQkFDSSxrREFBSyxTQUFTLEtBQVQsRUFBZ0IsU0FBUyxLQUFLLEtBQUwsQ0FBVyxrQkFBWCxFQUE5QixDQURKO2dCQUVJOztzQkFBTyxXQUFVLE9BQVYsRUFBUDtvQkFDSTs7O3dCQUNBOzs7NEJBQ0k7Ozs7NkJBREo7eUJBREE7d0JBSUE7Ozs0QkFDSTs7Ozs2QkFESjt5QkFKQTtxQkFESjtvQkFTSTs7O3dCQUNDLElBREQ7cUJBVEo7aUJBRko7YUFESixDQUZLOzs7O2tDQXNCQzt5QkFDZ0UsS0FBSyxLQUFMLENBRGhFO2dCQUNELHFCQURDO2dCQUNNLCtDQUROO2dCQUMwQiwrQ0FEMUI7Z0JBQzhDLHdDQUQ5Qzs7QUFFTixnQkFBSSxTQUFTLEVBQVQsQ0FGRTtBQUdOLGtCQUFNLEdBQU4sQ0FBVSxVQUFDLElBQUQsRUFBVTtBQUNoQix1QkFBTyxJQUFQLENBQ0k7QUFDSSx5QkFBSyxLQUFLLEtBQUw7QUFDTCxnQ0FBWSxLQUFLLFVBQUw7QUFDWixxQ0FBaUIsS0FBSyxlQUFMO0FBQ2pCLHdDQUFvQjsrQkFBTSxtQkFBbUIsS0FBSyxLQUFMO3FCQUF6QjtBQUNwQixvQ0FBZ0Isd0JBQUMsTUFBRCxFQUFTLFdBQVQ7K0JBQXlCLGdCQUFlLEtBQUssS0FBTCxFQUFZLE1BQTNCLEVBQW1DLFdBQW5DO3FCQUF6QjtpQkFMcEIsQ0FESixFQURnQjthQUFWLENBQVYsQ0FITTs7QUFnQk4sbUJBQU8sTUFBUCxDQWhCTTs7OztXQXZCRDs7O0FBMkNiLFdBQVcsU0FBWCxHQUF1QjtBQUNuQixXQUFPLGlCQUFVLEtBQVYsQ0FBZ0IsVUFBaEI7QUFDUCx3QkFBb0IsaUJBQVUsSUFBVixDQUFlLFVBQWY7QUFDcEIsd0JBQW9CLGlCQUFVLElBQVYsQ0FBZSxVQUFmO0FBQ3BCLG9CQUFnQixpQkFBVSxJQUFWLENBQWUsVUFBZjtDQUpwQjs7a0JBT2UiLCJmaWxlIjoiVGFibGVJbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYW5pZWsvcHJvamVjdC9vcGVuc2hpZnQvZW5nbGlzaHRhYmxlIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vLi4vLi4vLi4vLi4vdHlwaW5ncy9tYWluLmQudHNcIiAvPlxuXG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMsIENvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRhYmxlSW5wdXRSb3cgZnJvbSAnLi9UYWJsZUlucHV0Um93JztcbmltcG9ydCBCdG4gZnJvbSAnLi9CdXR0b24nO1xuXG5leHBvcnQgY2xhc3MgVGFibGVJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgcm93cyA9IHRoaXMuZ2V0Um93cygpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8QnRuIGNvbnRlbnQ9eydBZGQnfSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uTmV3Um93QnRuQ2xpY2tlZH0vPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5PcmlnaW5hbDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UcmFuc2xhdGVkPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7cm93c31cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGdldFJvd3MoKSB7XG4gICAgICAgIGxldCB7aXRlbXMsIG9uUmVtb3ZlUm93Q2xpY2tlZCwgb25OZXdSb3dCdG5DbGlja2VkLCBvbklucHV0Q2hhbmdlZH0gPSB0aGlzLnByb3BzO1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goXG4gICAgICAgICAgICAgICAgPFRhYmxlSW5wdXRSb3dcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLnJvd0lkfVxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VXb3JkPXtpdGVtLnNvdXJjZVdvcmR9XG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uV29yZD17aXRlbS5kZXN0aW5hdGlvbldvcmR9XG4gICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlQnRuQ2xpY2tlZD17KCkgPT4gb25SZW1vdmVSb3dDbGlja2VkKGl0ZW0ucm93SWQpfVxuICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlZD17KHNvdXJjZSwgZGVzdGluYXRpb24pID0+IG9uSW5wdXRDaGFuZ2VkKGl0ZW0ucm93SWQsIHNvdXJjZSwgZGVzdGluYXRpb24pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufVxuXG5UYWJsZUlucHV0LnByb3BUeXBlcyA9IHtcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgb25SZW1vdmVSb3dDbGlja2VkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uTmV3Um93QnRuQ2xpY2tlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbklucHV0Q2hhbmdlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGVJbnB1dDtcbiJdfQ==

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TableInputRow = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__(69);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /// <reference path="./../../../../typings/main.d.ts" />
	
	var TableInputRow = exports.TableInputRow = function (_Component) {
	    _inherits(TableInputRow, _Component);
	
	    function TableInputRow() {
	        _classCallCheck(this, TableInputRow);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TableInputRow).apply(this, arguments));
	    }
	
	    _createClass(TableInputRow, [{
	        key: 'onSourceWordChanged',
	        value: function onSourceWordChanged(e) {
	            var _props = this.props;
	            var onInputChanged = _props.onInputChanged;
	            var destinationWord = _props.destinationWord;
	
	            onInputChanged(e.target.value, destinationWord);
	        }
	    }, {
	        key: 'onDestinationWordChanged',
	        value: function onDestinationWordChanged(e) {
	            var _props2 = this.props;
	            var onInputChanged = _props2.onInputChanged;
	            var sourceWord = _props2.sourceWord;
	
	            onInputChanged(sourceWord, e.target.value);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var _props3 = this.props;
	            var sourceWord = _props3.sourceWord;
	            var destinationWord = _props3.destinationWord;
	            var onRemoveBtnClicked = _props3.onRemoveBtnClicked;
	
	
	            return _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                    'td',
	                    null,
	                    _react2.default.createElement('input', {
	                        className: 'source-word',
	                        type: 'textbox',
	                        'data-ph': 'Orginal word',
	                        onChange: function onChange(e) {
	                            return _this2.onSourceWordChanged(e);
	                        },
	                        value: sourceWord })
	                ),
	                _react2.default.createElement(
	                    'td',
	                    null,
	                    _react2.default.createElement('input', {
	                        className: 'destination-word',
	                        type: 'textbox',
	                        'data-ph': 'Transalted word',
	                        onChange: function onChange(e) {
	                            return _this2.onDestinationWordChanged(e);
	                        },
	                        value: destinationWord })
	                ),
	                _react2.default.createElement(
	                    'td',
	                    null,
	                    _react2.default.createElement(_Button2.default, { onClick: onRemoveBtnClicked, content: "delete" })
	                )
	            );
	        }
	    }]);
	
	    return TableInputRow;
	}(_react.Component);
	
	TableInputRow.propTypes = {
	    sourceWord: _react.PropTypes.string.isRequired,
	    destinationWord: _react.PropTypes.string.isRequired,
	    onRemoveBtnClicked: _react.PropTypes.func.isRequired,
	    onInputChanged: _react.PropTypes.func.isRequired
	};
	
	exports.default = TableInputRow;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvY29tcG9uZW50cy9UYWJsZUlucHV0Um93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVhOzs7Ozs7Ozs7Ozs0Q0FDVyxHQUFHO3lCQUN1QixLQUFLLEtBQUwsQ0FEdkI7Z0JBQ1osdUNBRFk7Z0JBQ0kseUNBREo7O0FBRW5CLDJCQUFlLEVBQUUsTUFBRixDQUFTLEtBQVQsRUFBZ0IsZUFBL0IsRUFGbUI7Ozs7aURBS0UsR0FBRzswQkFDYSxLQUFLLEtBQUwsQ0FEYjtnQkFDakIsd0NBRGlCO2dCQUNELGdDQURDOztBQUV4QiwyQkFBZSxVQUFmLEVBQTJCLEVBQUUsTUFBRixDQUFTLEtBQVQsQ0FBM0IsQ0FGd0I7Ozs7aUNBS25COzs7MEJBQ21ELEtBQUssS0FBTCxDQURuRDtnQkFDRSxnQ0FERjtnQkFDYywwQ0FEZDtnQkFDK0IsZ0RBRC9COzs7QUFHTCxtQkFDSTs7O2dCQUNJOzs7b0JBQ0k7QUFDSSxtQ0FBVSxhQUFWO0FBQ0EsOEJBQUssU0FBTDtBQUNBLG1DQUFRLGNBQVI7QUFDQSxrQ0FBVTttQ0FBSyxPQUFLLG1CQUFMLENBQXlCLENBQXpCO3lCQUFMO0FBQ1YsK0JBQU8sVUFBUCxFQUxKLENBREo7aUJBREo7Z0JBU0k7OztvQkFDSTtBQUNJLG1DQUFVLGtCQUFWO0FBQ0EsOEJBQUssU0FBTDtBQUNBLG1DQUFRLGlCQUFSO0FBQ0Esa0NBQVU7bUNBQUssT0FBSyx3QkFBTCxDQUE4QixDQUE5Qjt5QkFBTDtBQUNWLCtCQUFPLGVBQVAsRUFMSixDQURKO2lCQVRKO2dCQWlCSTs7O29CQUNJLGtEQUFRLFNBQVMsa0JBQVQsRUFBNkIsU0FBUyxRQUFULEVBQXJDLENBREo7aUJBakJKO2FBREosQ0FISzs7OztXQVhBOzs7QUF3Q2IsY0FBYyxTQUFkLEdBQTBCO0FBQ3RCLGdCQUFZLGlCQUFVLE1BQVYsQ0FBaUIsVUFBakI7QUFDWixxQkFBaUIsaUJBQVUsTUFBVixDQUFpQixVQUFqQjtBQUNqQix3QkFBb0IsaUJBQVUsSUFBVixDQUFlLFVBQWY7QUFDcEIsb0JBQWdCLGlCQUFVLElBQVYsQ0FBZSxVQUFmO0NBSnBCOztrQkFPZSIsImZpbGUiOiJUYWJsZUlucHV0Um93LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21hbmllay9wcm9qZWN0L29wZW5zaGlmdC9lbmdsaXNodGFibGUiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi8uLi8uLi8uLi8uLi90eXBpbmdzL21haW4uZC50c1wiIC8+XG5cbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcywgQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcblxuZXhwb3J0IGNsYXNzIFRhYmxlSW5wdXRSb3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIG9uU291cmNlV29yZENoYW5nZWQoZSkge1xuICAgICAgICBjb25zdCB7b25JbnB1dENoYW5nZWQsIGRlc3RpbmF0aW9uV29yZH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBvbklucHV0Q2hhbmdlZChlLnRhcmdldC52YWx1ZSwgZGVzdGluYXRpb25Xb3JkKTtcbiAgICB9XG5cbiAgICBvbkRlc3RpbmF0aW9uV29yZENoYW5nZWQoZSkge1xuICAgICAgICBjb25zdCB7b25JbnB1dENoYW5nZWQsIHNvdXJjZVdvcmR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgb25JbnB1dENoYW5nZWQoc291cmNlV29yZCwgZS50YXJnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3NvdXJjZVdvcmQsIGRlc3RpbmF0aW9uV29yZCwgb25SZW1vdmVCdG5DbGlja2VkfT10aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvdXJjZS13b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0Ym94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcGg9XCJPcmdpbmFsIHdvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5vblNvdXJjZVdvcmRDaGFuZ2VkKGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NvdXJjZVdvcmR9Lz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZXN0aW5hdGlvbi13b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0Ym94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcGg9XCJUcmFuc2FsdGVkIHdvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5vbkRlc3RpbmF0aW9uV29yZENoYW5nZWQoZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzdGluYXRpb25Xb3JkfS8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25SZW1vdmVCdG5DbGlja2VkfSBjb250ZW50PXtcImRlbGV0ZVwifS8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5UYWJsZUlucHV0Um93LnByb3BUeXBlcyA9IHtcbiAgICBzb3VyY2VXb3JkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZGVzdGluYXRpb25Xb3JkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgb25SZW1vdmVCdG5DbGlja2VkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uSW5wdXRDaGFuZ2VkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUlucHV0Um93O1xuIl19

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Button = function Button(_ref) {
	    var content = _ref.content;
	    var onClick = _ref.onClick;
	
	    return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	            "button",
	            { type: "button", onClick: onClick },
	            content
	        )
	    );
	};
	
	Button.propTypes = {
	    content: _react.PropTypes.any.isRequired
	};
	
	exports.default = Button;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvY29tcG9uZW50cy9CdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU0sU0FBUyxTQUFULE1BQVMsT0FBMEI7UUFBdkIsdUJBQXVCO1FBQWQsdUJBQWM7O0FBQ3JDLFdBQ0E7OztRQUNJOztjQUFRLE1BQUssUUFBTCxFQUFjLFNBQVMsT0FBVCxFQUF0QjtZQUNLLE9BREw7U0FESjtLQURBLENBRHFDO0NBQTFCOztBQVVmLE9BQU8sU0FBUCxHQUFtQjtBQUNqQixhQUFTLGlCQUFVLEdBQVYsQ0FBYyxVQUFkO0NBRFg7O2tCQUllIiwiZmlsZSI6IkJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYW5pZWsvcHJvamVjdC9vcGVuc2hpZnQvZW5nbGlzaHRhYmxlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQnV0dG9uID0gKHsgY29udGVudCwgb25DbGljayB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgY29udGVudDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiJdfQ==

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _reactRedux = __webpack_require__(4);
	
	var _Table = __webpack_require__(71);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	var _conversions = __webpack_require__(72);
	
	var _configuration = __webpack_require__(32);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var toRows = function toRows(sourceWords, destinationWords) {
	    if (sourceWords.length !== destinationWords.length) {
	        throw 'Source words collection has different size then destination words collection';
	    }
	
	    var result = [];
	    for (var i = 0; i < sourceWords.length; i++) {
	        result.push({
	            no: i + 1,
	            sourceWord: sourceWords[i],
	            destinationWord: destinationWords[i]
	        });
	    }
	
	    return result;
	};
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    return {
	        headers: (0, _conversions.toArray)(state.configuration, 'key'),
	        rows: toRows(state.dictionary.output.sourceWords, state.dictionary.output.destinationWords)
	    };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	    return {
	        onOptionChanged: function onOptionChanged(data) {
	            return dispatch((0, _configuration.configurationColumnTypeChanged)(data.columnId, data.optionId));
	        },
	        onColumnNameChanged: function onColumnNameChanged(id, name) {
	            return dispatch((0, _configuration.configurationColumnNameChanged)(id, name));
	        }
	    };
	};
	
	var Configuration = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Table2.default);
	
	exports.default = Configuration;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvY29udGFpbmVycy9Db25maWd1cmF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFFQSxJQUFNLFNBQVMsU0FBVCxNQUFTLENBQUMsV0FBRCxFQUFjLGdCQUFkLEVBQW1DO0FBQzlDLFFBQUcsWUFBWSxNQUFaLEtBQXVCLGlCQUFpQixNQUFqQixFQUF5QjtBQUMvQyxjQUFNLDhFQUFOLENBRCtDO0tBQW5EOztBQUlBLFFBQUksU0FBUyxFQUFULENBTDBDO0FBTTlDLFNBQUksSUFBSSxJQUFJLENBQUosRUFBTyxJQUFFLFlBQVksTUFBWixFQUFvQixHQUFyQyxFQUEwQztBQUN0QyxlQUFPLElBQVAsQ0FBWTtBQUNSLGdCQUFJLElBQUcsQ0FBSDtBQUNKLHdCQUFZLFlBQVksQ0FBWixDQUFaO0FBQ0EsNkJBQWlCLGlCQUFpQixDQUFqQixDQUFqQjtTQUhKLEVBRHNDO0tBQTFDOztBQVFBLFdBQU8sTUFBUCxDQWQ4QztDQUFuQzs7QUFpQmYsSUFBTSxrQkFBa0IsU0FBbEIsZUFBa0IsQ0FBQyxLQUFELEVBQVEsUUFBUixFQUFxQjtBQUN6QyxXQUFPO0FBQ0gsaUJBQVMsMEJBQVEsTUFBTSxhQUFOLEVBQXFCLEtBQTdCLENBQVQ7QUFDQSxjQUFNLE9BQU8sTUFBTSxVQUFOLENBQWlCLE1BQWpCLENBQXdCLFdBQXhCLEVBQW9DLE1BQU0sVUFBTixDQUFpQixNQUFqQixDQUF3QixnQkFBeEIsQ0FBakQ7S0FGSixDQUR5QztDQUFyQjs7QUFPeEIsSUFBTSxxQkFBcUIsU0FBckIsa0JBQXFCLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBd0I7QUFDL0MsV0FBTztBQUNILHlCQUFpQix5QkFBQyxJQUFEO21CQUFVLFNBQVMsbURBQStCLEtBQUssUUFBTCxFQUFlLEtBQUssUUFBTCxDQUF2RDtTQUFWO0FBQ2pCLDZCQUFxQiw2QkFBQyxFQUFELEVBQUssSUFBTDttQkFBYyxTQUFTLG1EQUErQixFQUEvQixFQUFtQyxJQUFuQyxDQUFUO1NBQWQ7S0FGekIsQ0FEK0M7Q0FBeEI7O0FBTzNCLElBQU0sZ0JBQWdCLHlCQUNsQixlQURrQixFQUVsQixrQkFGa0Isa0JBQWhCOztrQkFLUyIsImZpbGUiOiJDb25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21hbmllay9wcm9qZWN0L29wZW5zaGlmdC9lbmdsaXNodGFibGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4vLi4vY29tcG9uZW50cy9UYWJsZSc7XG5pbXBvcnQge3RvQXJyYXl9IGZyb20gJy4vLi4vLi4vLi4vVXRpbHMvY29udmVyc2lvbnMnO1xuXG5pbXBvcnQge2NvbmZpZ3VyYXRpb25Db2x1bW5UeXBlQ2hhbmdlZCwgY29uZmlndXJhdGlvbkNvbHVtbk5hbWVDaGFuZ2VkfSBmcm9tICcuLy4uL3JlZHVjZXJzL2NvbmZpZ3VyYXRpb24nO1xuXG5jb25zdCB0b1Jvd3MgPSAoc291cmNlV29yZHMsIGRlc3RpbmF0aW9uV29yZHMpID0+IHtcbiAgICBpZihzb3VyY2VXb3Jkcy5sZW5ndGggIT09IGRlc3RpbmF0aW9uV29yZHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93ICdTb3VyY2Ugd29yZHMgY29sbGVjdGlvbiBoYXMgZGlmZmVyZW50IHNpemUgdGhlbiBkZXN0aW5hdGlvbiB3b3JkcyBjb2xsZWN0aW9uJztcbiAgICB9XG4gICAgXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDA7IGk8c291cmNlV29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgbm86IGkgKzEsXG4gICAgICAgICAgICBzb3VyY2VXb3JkOiBzb3VyY2VXb3Jkc1tpXSxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uV29yZDogZGVzdGluYXRpb25Xb3Jkc1tpXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBoZWFkZXJzOiB0b0FycmF5KHN0YXRlLmNvbmZpZ3VyYXRpb24sICdrZXknKSxcbiAgICAgICAgcm93czogdG9Sb3dzKHN0YXRlLmRpY3Rpb25hcnkub3V0cHV0LnNvdXJjZVdvcmRzLHN0YXRlLmRpY3Rpb25hcnkub3V0cHV0LmRlc3RpbmF0aW9uV29yZHMpXG4gICAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCwgb3duUHJvcHMpID0+IHtcbiAgICByZXR1cm4geyBcbiAgICAgICAgb25PcHRpb25DaGFuZ2VkOiAoZGF0YSkgPT4gZGlzcGF0Y2goY29uZmlndXJhdGlvbkNvbHVtblR5cGVDaGFuZ2VkKGRhdGEuY29sdW1uSWQsIGRhdGEub3B0aW9uSWQpKSxcbiAgICAgICAgb25Db2x1bW5OYW1lQ2hhbmdlZDogKGlkLCBuYW1lKSA9PiBkaXNwYXRjaChjb25maWd1cmF0aW9uQ29sdW1uTmFtZUNoYW5nZWQoaWQsIG5hbWUpKSxcbiAgICB9O1xufTtcblxuY29uc3QgQ29uZmlndXJhdGlvbiA9IGNvbm5lY3QoXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShUYWJsZSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZ3VyYXRpb247Il19

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ButtonWithOptions = __webpack_require__(53);
	
	var _ButtonWithOptions2 = _interopRequireDefault(_ButtonWithOptions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /// <reference path="./../../../../typings/main.d.ts" />
	
	var Table = function (_Component) {
	    _inherits(Table, _Component);
	
	    function Table() {
	        _classCallCheck(this, Table);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Table).apply(this, arguments));
	    }
	
	    _createClass(Table, [{
	        key: 'createOptionChangedHandler',
	        value: function createOptionChangedHandler(columnId) {
	            var onOptionChanged = this.props.onOptionChanged;
	
	            return function (optionId) {
	                onOptionChanged({
	                    columnId: columnId,
	                    optionId: optionId
	                });
	            };
	        }
	    }, {
	        key: 'tableHeaderColumns',
	        value: function tableHeaderColumns() {
	            var _this2 = this;
	
	            var _props = this.props;
	            var headers = _props.headers;
	            var onColumnNameChanged = _props.onColumnNameChanged;
	
	
	            return headers.map(function (h) {
	                var handleColumnNameChanged = function handleColumnNameChanged(text) {
	                    onColumnNameChanged(h.key, text);
	                };
	
	                return _react2.default.createElement(
	                    'th',
	                    { key: h.key },
	                    _react2.default.createElement('input', { className: 'column-name-input', type: 'text', placeholder: 'column name',
	                        onChange: function onChange(e) {
	                            return handleColumnNameChanged(e.target.value);
	                        } }),
	                    _react2.default.createElement(_ButtonWithOptions2.default, { selectedOption: h.selectedOption, options: h.options,
	                        onChanged: _this2.createOptionChangedHandler(h.key) })
	                );
	            });
	        }
	    }, {
	        key: 'tableRows',
	        value: function tableRows() {
	            var _props2 = this.props;
	            var headers = _props2.headers;
	            var rows = _props2.rows;
	
	            return Array.from(rows.map(function (r) {
	                return Table.createRow(headers, r);
	            }));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'table',
	                { className: 'table' },
	                _react2.default.createElement(
	                    'thead',
	                    null,
	                    _react2.default.createElement(
	                        'tr',
	                        null,
	                        this.tableHeaderColumns()
	                    )
	                ),
	                _react2.default.createElement(
	                    'tbody',
	                    null,
	                    this.tableRows()
	                )
	            );
	        }
	    }], [{
	        key: 'createRow',
	        value: function createRow(headers, row) {
	            var columns = [];
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = headers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var header = _step.value;
	
	                    switch (header.selectedOption) {
	                        case 1:
	                            columns.push(_react2.default.createElement(
	                                'td',
	                                { key: header.key },
	                                row.sourceWord.text
	                            ));
	                            break;
	                        case 2:
	                            columns.push(_react2.default.createElement(
	                                'td',
	                                { key: header.key },
	                                row.destinationWord.text
	                            ));
	                            break;
	                        default:
	                            columns.push(_react2.default.createElement('td', { key: header.key }));
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            console.log(row.no);
	            return _react2.default.createElement(
	                'tr',
	                { key: row.no },
	                columns
	            );
	        }
	    }]);
	
	    return Table;
	}(_react.Component);
	
	Table.propTypes = {
	    headers: _react.PropTypes.any.isRequired,
	    rows: _react.PropTypes.array.isRequired
	};
	
	exports.default = Table;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvY29tcG9uZW50cy9UYWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztJQUVNOzs7Ozs7Ozs7OzttREFDeUIsVUFBVTtnQkFDMUIsa0JBQW1CLEtBQUssS0FBTCxDQUFuQixnQkFEMEI7O0FBRWpDLG1CQUFPLFVBQUMsUUFBRCxFQUFjO0FBQ2pCLGdDQUFnQjtBQUNaLDhCQUFVLFFBQVY7QUFDQSw4QkFBVSxRQUFWO2lCQUZKLEVBRGlCO2FBQWQsQ0FGMEI7Ozs7NkNBVWhCOzs7eUJBQ3NCLEtBQUssS0FBTCxDQUR0QjtnQkFDVix5QkFEVTtnQkFDRCxpREFEQzs7O0FBR2pCLG1CQUFPLFFBQVEsR0FBUixDQUFZLFVBQUMsQ0FBRCxFQUFPO0FBQ3RCLG9CQUFJLDBCQUEwQixTQUExQix1QkFBMEIsQ0FBQyxJQUFELEVBQVU7QUFDcEMsd0NBQW9CLEVBQUUsR0FBRixFQUFPLElBQTNCLEVBRG9DO2lCQUFWLENBRFI7O0FBS3RCLHVCQUNJOztzQkFBSSxLQUFLLEVBQUUsR0FBRixFQUFUO29CQUNJLHlDQUFPLFdBQVUsbUJBQVYsRUFBOEIsTUFBSyxNQUFMLEVBQVksYUFBWSxhQUFaO0FBQzFDLGtDQUFVLGtCQUFDLENBQUQ7bUNBQU8sd0JBQXdCLEVBQUUsTUFBRixDQUFTLEtBQVQ7eUJBQS9CLEVBRGpCLENBREo7b0JBR0ksNkRBQWdCLGdCQUFnQixFQUFFLGNBQUYsRUFBa0IsU0FBUyxFQUFFLE9BQUY7QUFDM0MsbUNBQVcsT0FBSywwQkFBTCxDQUFnQyxFQUFFLEdBQUYsQ0FBM0MsRUFEaEIsQ0FISjtpQkFESixDQUxzQjthQUFQLENBQW5CLENBSGlCOzs7O29DQTBDVDswQkFDZ0IsS0FBSyxLQUFMLENBRGhCO2dCQUNELDBCQURDO2dCQUNRLG9CQURSOztBQUVSLG1CQUFPLE1BQU0sSUFBTixDQUFXLEtBQUssR0FBTCxDQUFTO3VCQUFLLE1BQU0sU0FBTixDQUFnQixPQUFoQixFQUF5QixDQUF6QjthQUFMLENBQXBCLENBQVAsQ0FGUTs7OztpQ0FLSDtBQUNMLG1CQUNJOztrQkFBTyxXQUFVLE9BQVYsRUFBUDtnQkFDSTs7O29CQUNBOzs7d0JBQ0ssS0FBSyxrQkFBTCxFQURMO3FCQURBO2lCQURKO2dCQU1JOzs7b0JBQ0MsS0FBSyxTQUFMLEVBREQ7aUJBTko7YUFESixDQURLOzs7O2tDQTVCUSxTQUFTLEtBQUs7QUFDM0IsZ0JBQUksVUFBVSxFQUFWLENBRHVCOzs7Ozs7QUFFM0IscUNBQW1CLGlDQUFuQixvR0FBNEI7d0JBQW5CLHFCQUFtQjs7QUFDeEIsNEJBQVEsT0FBTyxjQUFQO0FBQ0osNkJBQUssQ0FBTDtBQUNJLG9DQUFRLElBQVIsQ0FBYTs7a0NBQUksS0FBSyxPQUFPLEdBQVAsRUFBVDtnQ0FBc0IsSUFBSSxVQUFKLENBQWUsSUFBZjs2QkFBbkMsRUFESjtBQUVJLGtDQUZKO0FBREosNkJBSVMsQ0FBTDtBQUNJLG9DQUFRLElBQVIsQ0FBYTs7a0NBQUksS0FBSyxPQUFPLEdBQVAsRUFBVDtnQ0FBc0IsSUFBSSxlQUFKLENBQW9CLElBQXBCOzZCQUFuQyxFQURKO0FBRUksa0NBRko7QUFKSjtBQVFRLG9DQUFRLElBQVIsQ0FBYSxzQ0FBSSxLQUFLLE9BQU8sR0FBUCxFQUFULENBQWIsRUFESjtBQVBKLHFCQUR3QjtpQkFBNUI7Ozs7Ozs7Ozs7Ozs7O2FBRjJCOztBQWUzQixvQkFBUSxHQUFSLENBQVksSUFBSSxFQUFKLENBQVosQ0FmMkI7QUFnQjNCLG1CQUNJOztrQkFBSSxLQUFLLElBQUksRUFBSixFQUFUO2dCQUNLLE9BREw7YUFESixDQWhCMkI7Ozs7V0E5QjdCOzs7QUEwRU4sTUFBTSxTQUFOLEdBQWtCO0FBQ2QsYUFBUyxpQkFBVSxHQUFWLENBQWMsVUFBZDtBQUNULFVBQU0saUJBQVUsS0FBVixDQUFnQixVQUFoQjtDQUZWOztrQkFLZSIsImZpbGUiOiJUYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYW5pZWsvcHJvamVjdC9vcGVuc2hpZnQvZW5nbGlzaHRhYmxlIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vLi4vLi4vLi4vLi4vdHlwaW5ncy9tYWluLmQudHNcIiAvPlxuXG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMsIENvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQnRuV2l0aE9wdGlvbnMgZnJvbSAnLi8uLi9jb21wb25lbnRzL0J1dHRvbldpdGhPcHRpb25zJztcblxuY2xhc3MgVGFibGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNyZWF0ZU9wdGlvbkNoYW5nZWRIYW5kbGVyKGNvbHVtbklkKSB7XG4gICAgICAgIGNvbnN0IHtvbk9wdGlvbkNoYW5nZWR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChvcHRpb25JZCkgPT4ge1xuICAgICAgICAgICAgb25PcHRpb25DaGFuZ2VkKHtcbiAgICAgICAgICAgICAgICBjb2x1bW5JZDogY29sdW1uSWQsXG4gICAgICAgICAgICAgICAgb3B0aW9uSWQ6IG9wdGlvbklkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB0YWJsZUhlYWRlckNvbHVtbnMoKSB7XG4gICAgICAgIGNvbnN0IHtoZWFkZXJzLCBvbkNvbHVtbk5hbWVDaGFuZ2VkfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIGhlYWRlcnMubWFwKChoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaGFuZGxlQ29sdW1uTmFtZUNoYW5nZWQgPSAodGV4dCkgPT4ge1xuICAgICAgICAgICAgICAgIG9uQ29sdW1uTmFtZUNoYW5nZWQoaC5rZXksIHRleHQpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dGgga2V5PXtoLmtleX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjb2x1bW4tbmFtZS1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJjb2x1bW4gbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNvbHVtbk5hbWVDaGFuZ2VkKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgICAgICAgICA8QnRuV2l0aE9wdGlvbnMgc2VsZWN0ZWRPcHRpb249e2guc2VsZWN0ZWRPcHRpb259IG9wdGlvbnM9e2gub3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlZD17dGhpcy5jcmVhdGVPcHRpb25DaGFuZ2VkSGFuZGxlcihoLmtleSl9Lz5cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVJvdyhoZWFkZXJzLCByb3cpIHtcbiAgICAgICAgbGV0IGNvbHVtbnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaGVhZGVyIG9mIGhlYWRlcnMpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoaGVhZGVyLnNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zLnB1c2goPHRkIGtleT17aGVhZGVyLmtleX0+e3Jvdy5zb3VyY2VXb3JkLnRleHR9PC90ZD4pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnMucHVzaCg8dGQga2V5PXtoZWFkZXIua2V5fT57cm93LmRlc3RpbmF0aW9uV29yZC50ZXh0fTwvdGQ+KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgY29sdW1ucy5wdXNoKDx0ZCBrZXk9e2hlYWRlci5rZXl9Lz4pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhyb3cubm8pO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRyIGtleT17cm93Lm5vfT5cbiAgICAgICAgICAgICAgICB7Y29sdW1uc31cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgdGFibGVSb3dzKCkge1xuICAgICAgICBjb25zdCB7aGVhZGVycywgcm93c30gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShyb3dzLm1hcChyID0+IFRhYmxlLmNyZWF0ZVJvdyhoZWFkZXJzLCByKSkpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnRhYmxlSGVhZGVyQ29sdW1ucygpfVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAge3RoaXMudGFibGVSb3dzKCl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICk7XG4gICAgfTtcbn1cblxuVGFibGUucHJvcFR5cGVzID0ge1xuICAgIGhlYWRlcnM6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgICByb3dzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGU7XG4iXX0=

/***/ },
/* 72 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.toArray = toArray;
	function toArray(object) {
	    var keyName = arguments.length <= 1 || arguments[1] === undefined ? 'key' : arguments[1];
	
	    var result = [];
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = Object.keys(object)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var key = _step.value;
	
	            var o = object[key];
	            o[keyName] = key;
	            result.push(o);
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	
	    return result;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9VdGlscy9jb252ZXJzaW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztRQUNnQjtBQUFULFNBQVMsT0FBVCxDQUFpQixNQUFqQixFQUEwQztRQUFqQixnRUFBVSxxQkFBTzs7QUFDN0MsUUFBSSxTQUFTLEVBQVQsQ0FEeUM7Ozs7OztBQUU3Qyw2QkFBZ0IsT0FBTyxJQUFQLENBQVksTUFBWiwyQkFBaEIsb0dBQXFDO2dCQUE1QixrQkFBNEI7O0FBQ2pDLGdCQUFJLElBQUksT0FBTyxHQUFQLENBQUosQ0FENkI7QUFFakMsY0FBRSxPQUFGLElBQWEsR0FBYixDQUZpQztBQUdqQyxtQkFBTyxJQUFQLENBQVksQ0FBWixFQUhpQztTQUFyQzs7Ozs7Ozs7Ozs7Ozs7S0FGNkM7O0FBUTdDLFdBQU8sTUFBUCxDQVI2QztDQUExQyIsImZpbGUiOiJjb252ZXJzaW9ucy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYW5pZWsvcHJvamVjdC9vcGVuc2hpZnQvZW5nbGlzaHRhYmxlIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZnVuY3Rpb24gdG9BcnJheShvYmplY3QsIGtleU5hbWUgPSAna2V5Jykge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMob2JqZWN0KSkge1xuICAgICAgICB2YXIgbyA9IG9iamVjdFtrZXldO1xuICAgICAgICBvW2tleU5hbWVdID0ga2V5O1xuICAgICAgICByZXN1bHQucHVzaChvKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdfQ==

/***/ }
/******/ ]);
//# sourceMappingURL=table-index.bundle.js.map