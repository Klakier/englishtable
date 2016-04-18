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
	
	var _TableApp = __webpack_require__(33);
	
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
	
	var _reducers = __webpack_require__(31);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var loggerMiddleware = (0, _reduxLogger2.default)();
	
	function configureStore() {
	    return (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.compose)((0, _redux.applyMiddleware)(loggerMiddleware), window.devToolsExtension ? window.devToolsExtension() : function (f) {
	        return f;
	    }));
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvY29uZmlndXJlU3RvcmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBTXdCOztBQU54Qjs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNLG1CQUFtQiw0QkFBbkI7O0FBRVMsU0FBUyxjQUFULEdBQTBCO0FBQ3JDLFdBQU8sNENBQ08sRUFEUCxFQUVILG9CQUNJLDRCQUFpQixnQkFBakIsQ0FESixFQUVJLE9BQU8saUJBQVAsR0FBMkIsT0FBTyxpQkFBUCxFQUEzQixHQUF3RDtlQUFLO0tBQUwsQ0FKekQsQ0FBUCxDQURxQztDQUExQiIsImZpbGUiOiJjb25maWd1cmVTdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYW5pZWsvcHJvamVjdC9vcGVuc2hpZnQvZW5nbGlzaHRhYmxlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBjcmVhdGVMb2dnZXIgZnJvbSAncmVkdXgtbG9nZ2VyJztcbmltcG9ydCB0YWJsZUFwcCBmcm9tICcuL3JlZHVjZXJzJztcblxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9IGNyZWF0ZUxvZ2dlcigpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZSgpIHtcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgICAgIHRhYmxlQXBwLCB7fSxcbiAgICAgICAgY29tcG9zZShcbiAgICAgICAgICAgIGFwcGx5TWlkZGxld2FyZSggbG9nZ2VyTWlkZGxld2FyZSApLFxuICAgICAgICAgICAgd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uID8gd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uKCkgOiBmID0+IGZcbiAgICAgICAgKSk7XG59Il19

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
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.input = input;
	exports.configuration = configuration;
	exports.tableApp = tableApp;
	
	var _objectInspections = __webpack_require__(32);
	
	var objectInspections = _interopRequireWildcard(_objectInspections);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
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
	
	        key++;
	        availableOptions.push({
	            key: key,
	            text: options[option]
	        });
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
	        1: {
	            selectedOption: availableOptions[0],
	            options: availableOptions
	        },
	        2: {
	            selectedOption: availableOptions[0],
	            options: availableOptions
	        },
	        3: {
	            selectedOption: availableOptions[0],
	            options: availableOptions
	        },
	        4: {
	            selectedOption: availableOptions[0],
	            options: availableOptions
	        },
	        5: {
	            selectedOption: availableOptions[0],
	            options: availableOptions
	        }
	    };
	};
	
	function input(previousState, action) {
	    switch (action.type) {
	        case 'TEXT_INPUT_CHANGED':
	            return {
	                inputText: action.text
	            };
	    }
	    return previousState;
	}
	
	function configuration(state, action) {
	    if (!objectInspections.isDefined(state)) {
	        state = initialConfiguration();
	    }
	
	    switch (action.type) {
	        case 'CONFIGURATION_CHANGED':
	            var selectedOption = availableOptions.find(function (v) {
	                return v.key === action.optionId;
	            });
	            var column = _extends({}, state[action.columnId], { selectedOption: selectedOption });
	            var newState = _extends({}, state);
	            newState[action.columnId] = column;
	            return newState;
	    }
	
	    return state;
	}
	
	function tableApp(state, action) {
	    return {
	        input: input(state.input, action),
	        configuration: configuration(state.configuration, action)
	    };
	}
	
	exports.default = tableApp;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvcmVkdWNlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7UUEyQ2dCO1FBVUE7UUFpQkE7O0FBdEVoQjs7SUFBWTs7OztBQUNaLElBQUksVUFBVTtBQUNWLFdBQU8sT0FBUDtBQUNBLG9CQUFnQixnQkFBaEI7QUFDQSxpQkFBYSxjQUFiO0FBQ0EscUJBQWlCLGlCQUFqQjtDQUpBOztBQU9KLElBQUksTUFBTSxDQUFOO0FBQ0osSUFBSSxtQkFBbUIsRUFBbkI7Ozs7OztBQUNKLHlCQUFtQixPQUFPLElBQVAsQ0FBWSxPQUFaLDJCQUFuQixvR0FBeUM7WUFBaEMscUJBQWdDOztBQUNyQyxjQURxQztBQUVyQyx5QkFBaUIsSUFBakIsQ0FBc0I7QUFDbEIsaUJBQUssR0FBTDtBQUNBLGtCQUFNLFFBQVEsTUFBUixDQUFOO1NBRkosRUFGcUM7S0FBekM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxJQUFJLHVCQUF1QixTQUF2QixvQkFBdUIsR0FBTTtBQUM3QixXQUFPO0FBQ1AsV0FBRztBQUNLLDRCQUFnQixpQkFBaUIsQ0FBakIsQ0FBaEI7QUFDQSxxQkFBUyxnQkFBVDtTQUZSO0FBSUEsV0FBRztBQUNLLDRCQUFnQixpQkFBaUIsQ0FBakIsQ0FBaEI7QUFDQSxxQkFBUyxnQkFBVDtTQUZSO0FBSUEsV0FBRztBQUNLLDRCQUFnQixpQkFBaUIsQ0FBakIsQ0FBaEI7QUFDQSxxQkFBUyxnQkFBVDtTQUZSO0FBSUEsV0FBRztBQUNLLDRCQUFnQixpQkFBaUIsQ0FBakIsQ0FBaEI7QUFDQSxxQkFBUyxnQkFBVDtTQUZSO0FBSUEsV0FBRztBQUNLLDRCQUFnQixpQkFBaUIsQ0FBakIsQ0FBaEI7QUFDQSxxQkFBUyxnQkFBVDtTQUZSO0tBakJBLENBRDZCO0NBQU47O0FBeUJwQixTQUFTLEtBQVQsQ0FBZSxhQUFmLEVBQThCLE1BQTlCLEVBQXNDO0FBQ3pDLFlBQVEsT0FBTyxJQUFQO0FBQ0osYUFBSyxvQkFBTDtBQUNJLG1CQUFPO0FBQ0gsMkJBQVcsT0FBTyxJQUFQO2FBRGYsQ0FESjtBQURKLEtBRHlDO0FBT3pDLFdBQU8sYUFBUCxDQVB5QztDQUF0Qzs7QUFVQSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsRUFBOEIsTUFBOUIsRUFBc0M7QUFDekMsUUFBSSxDQUFDLGtCQUFrQixTQUFsQixDQUE0QixLQUE1QixDQUFELEVBQXFDO0FBQ3JDLGdCQUFRLHNCQUFSLENBRHFDO0tBQXpDOztBQUlBLFlBQVEsT0FBTyxJQUFQO0FBQ0osYUFBSyx1QkFBTDtBQUNJLGdCQUFJLGlCQUFpQixpQkFBaUIsSUFBakIsQ0FBc0I7dUJBQUssRUFBRSxHQUFGLEtBQVUsT0FBTyxRQUFQO2FBQWYsQ0FBdkMsQ0FEUjtBQUVJLGdCQUFJLHNCQUFhLE1BQU0sT0FBTyxRQUFQLEtBQWtCLGdCQUFnQixjQUFoQixHQUFyQyxDQUZSO0FBR0ksZ0JBQUksd0JBQWUsTUFBZixDQUhSO0FBSUkscUJBQVMsT0FBTyxRQUFQLENBQVQsR0FBNEIsTUFBNUIsQ0FKSjtBQUtJLG1CQUFPLFFBQVAsQ0FMSjtBQURKLEtBTHlDOztBQWN6QyxXQUFPLEtBQVAsQ0FkeUM7Q0FBdEM7O0FBaUJBLFNBQVMsUUFBVCxDQUFrQixLQUFsQixFQUF5QixNQUF6QixFQUFpQztBQUNwQyxXQUFPO0FBQ0gsZUFBTyxNQUFNLE1BQU0sS0FBTixFQUFhLE1BQW5CLENBQVA7QUFDQSx1QkFBZSxjQUFjLE1BQU0sYUFBTixFQUFxQixNQUFuQyxDQUFmO0tBRkosQ0FEb0M7Q0FBakM7O2tCQU9RIiwiZmlsZSI6InJlZHVjZXJzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21hbmllay9wcm9qZWN0L29wZW5zaGlmdC9lbmdsaXNodGFibGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBvYmplY3RJbnNwZWN0aW9ucyBmcm9tICcuLy4uLy4uL1V0aWxzL29iamVjdEluc3BlY3Rpb25zJztcbnZhciBvcHRpb25zID0ge1xuICAgIFNwYWNlOiAnRW1wdHknLFxuICAgIFNlcXVlbmNlTnVtYmVyOiAnU2VxdWVuY2VOdW1iZXInLFxuICAgIE9yZ2luYWxXb3JkOiAnT3JnaW5hbCB3b3JkJyxcbiAgICBUcmFuc2FsYXRlZFdvcmQ6ICdUcmFuc2FsdGVkIHdvcmQnLFxufTtcblxudmFyIGtleSA9IDA7XG52YXIgYXZhaWxhYmxlT3B0aW9ucyA9IFtdO1xuZm9yIChsZXQgb3B0aW9uIG9mIE9iamVjdC5rZXlzKG9wdGlvbnMpKSB7XG4gICAga2V5Kys7XG4gICAgYXZhaWxhYmxlT3B0aW9ucy5wdXNoKHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIHRleHQ6IG9wdGlvbnNbb3B0aW9uXVxuICAgIH0pO1xufVxuXG52YXIgaW5pdGlhbENvbmZpZ3VyYXRpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAxOiB7XG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbjogYXZhaWxhYmxlT3B0aW9uc1swXSxcbiAgICAgICAgICAgIG9wdGlvbnM6IGF2YWlsYWJsZU9wdGlvbnMsXG4gICAgICAgIH0sIFxuICAgIDI6IHtcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uOiBhdmFpbGFibGVPcHRpb25zWzBdLFxuICAgICAgICAgICAgb3B0aW9uczogYXZhaWxhYmxlT3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAzOiB7XG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbjogYXZhaWxhYmxlT3B0aW9uc1swXSxcbiAgICAgICAgICAgIG9wdGlvbnM6IGF2YWlsYWJsZU9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgNDoge1xuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb246IGF2YWlsYWJsZU9wdGlvbnNbMF0sXG4gICAgICAgICAgICBvcHRpb25zOiBhdmFpbGFibGVPcHRpb25zLFxuICAgICAgICB9LFxuICAgIDU6IHtcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uOiBhdmFpbGFibGVPcHRpb25zWzBdLFxuICAgICAgICAgICAgb3B0aW9uczogYXZhaWxhYmxlT3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlucHV0KHByZXZpb3VzU3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnVEVYVF9JTlBVVF9DSEFOR0VEJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaW5wdXRUZXh0OiBhY3Rpb24udGV4dCxcbiAgICAgICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBwcmV2aW91c1N0YXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJhdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKCFvYmplY3RJbnNwZWN0aW9ucy5pc0RlZmluZWQoc3RhdGUpKSB7XG4gICAgICAgIHN0YXRlID0gaW5pdGlhbENvbmZpZ3VyYXRpb24oKTtcbiAgICB9XG4gICAgXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdDT05GSUdVUkFUSU9OX0NIQU5HRUQnOlxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uID0gYXZhaWxhYmxlT3B0aW9ucy5maW5kKHYgPT4gdi5rZXkgPT09IGFjdGlvbi5vcHRpb25JZCk7XG4gICAgICAgICAgICB2YXIgY29sdW1uID0gey4uLnN0YXRlW2FjdGlvbi5jb2x1bW5JZF0sIHNlbGVjdGVkT3B0aW9uOiBzZWxlY3RlZE9wdGlvbn07XG4gICAgICAgICAgICB2YXIgbmV3U3RhdGUgPSB7Li4uc3RhdGV9O1xuICAgICAgICAgICAgbmV3U3RhdGVbYWN0aW9uLmNvbHVtbklkXSA9IGNvbHVtbjtcbiAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWJsZUFwcChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5wdXQ6IGlucHV0KHN0YXRlLmlucHV0LCBhY3Rpb24pLFxuICAgICAgICBjb25maWd1cmF0aW9uOiBjb25maWd1cmF0aW9uKHN0YXRlLmNvbmZpZ3VyYXRpb24sIGFjdGlvbilcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB0YWJsZUFwcDsiXX0=

/***/ },
/* 32 */
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(4);
	
	var _Header = __webpack_require__(34);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Input = __webpack_require__(36);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Configuration = __webpack_require__(40);
	
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
	                _react2.default.createElement(_Configuration2.default, null)
	            );
	        }
	    }]);
	
	    return TableApp;
	}(_react.Component);

	exports.default = TableApp;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvY29udGFpbmVycy9UYWJsZUFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUI7Ozs7Ozs7Ozs7O2lDQUNSO0FBQ0wsbUJBQ0k7OztnQkFDSSxrREFBUSxRQUFRLFFBQVIsRUFBUixDQURKO2dCQUVJLG9EQUZKO2dCQUdJLDREQUhKO2FBREosQ0FESzs7OztXQURRIiwiZmlsZSI6IlRhYmxlQXBwLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21hbmllay9wcm9qZWN0L29wZW5zaGlmdC9lbmdsaXNodGFibGUiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi8uLi8uLi8uLi8uLi90eXBpbmdzL21haW4uZC50c1wiIC8+XG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9jb250YWluZXJzL0lucHV0JztcbmltcG9ydCBDb25maWd1cmF0aW9uIGZyb20gJy4uL2NvbnRhaW5lcnMvQ29uZmlndXJhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgaGVhZGVyPXtcIkhFQURFUlwifSAvPlxuICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxuICAgICAgICAgICAgICAgIDxDb25maWd1cmF0aW9uIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ButtonWithOptions = __webpack_require__(35);
	
	var _ButtonWithOptions2 = _interopRequireDefault(_ButtonWithOptions);
	
	var _objectInspections = __webpack_require__(32);
	
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ButtonWithOptions = function ButtonWithOptions(_ref) {
	    var selectedOption = _ref.selectedOption;
	    var options = _ref.options;
	    var onChanged = _ref.onChanged;
	
	    var menuOptions = [];
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        var _loop = function _loop() {
	            var option = _step.value;
	
	            menuOptions.push(_react2.default.createElement(
	                'a',
	                { key: option.key, onClick: function onClick(e) {
	                        return onChanged(option.key);
	                    } },
	                _react2.default.createElement(
	                    'li',
	                    null,
	                    option.text
	                )
	            ));
	        };
	
	        for (var _iterator = options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            _loop();
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
	
	    ;
	
	    return _react2.default.createElement(
	        'div',
	        { className: 'btn-group' },
	        _react2.default.createElement(
	            'a',
	            { type: 'button', className: 'btn btn-primary dropdown-toggle', 'data-toggle': 'dropdown' },
	            _react2.default.createElement(
	                'span',
	                null,
	                selectedOption.text
	            ),
	            _react2.default.createElement('span', { className: 'caret' })
	        ),
	        _react2.default.createElement(
	            'ul',
	            { className: 'dropdown-menu' },
	            menuOptions
	        )
	    );
	};
	
	ButtonWithOptions.propTypes = {
	    content: _react.PropTypes.any.isRequired
	};
	
	exports.default = ButtonWithOptions;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvY29tcG9uZW50cy9CdXR0b25XaXRoT3B0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTSxvQkFBb0IsU0FBcEIsaUJBQW9CLE9BQTBDO1FBQXhDLHFDQUF3QztRQUF4Qix1QkFBd0I7UUFBZiwyQkFBZTs7QUFDaEUsUUFBSSxjQUFjLEVBQWQsQ0FENEQ7Ozs7Ozs7Z0JBRXZEOztBQUNMLHdCQUFZLElBQVosQ0FDSTs7a0JBQUcsS0FBTSxPQUFPLEdBQVAsRUFBYSxTQUFVLGlCQUFDLENBQUQ7K0JBQU8sVUFBVSxPQUFPLEdBQVA7cUJBQWpCLEVBQWhDO2dCQUNJOzs7b0JBQUssT0FBTyxJQUFQO2lCQURUO2FBREo7OztBQURKLDZCQUFtQixpQ0FBbkIsb0dBQTRCOztTQUE1Qjs7Ozs7Ozs7Ozs7Ozs7S0FGZ0U7O0FBUS9ELEtBUitEOztBQVVoRSxXQUNBOztVQUFLLFdBQVUsV0FBVixFQUFMO1FBQ0k7O2NBQUcsTUFBSyxRQUFMLEVBQWMsV0FBVSxpQ0FBVixFQUE0QyxlQUFZLFVBQVosRUFBN0Q7WUFDSTs7O2dCQUFPLGVBQWUsSUFBZjthQURYO1lBRUksd0NBQU0sV0FBVSxPQUFWLEVBQU4sQ0FGSjtTQURKO1FBS0k7O2NBQUksV0FBVSxlQUFWLEVBQUo7WUFDSyxXQURMO1NBTEo7S0FEQSxDQVZnRTtDQUExQzs7QUF1QjFCLGtCQUFrQixTQUFsQixHQUE4QjtBQUMxQixhQUFTLGlCQUFVLEdBQVYsQ0FBYyxVQUFkO0NBRGI7O2tCQUllIiwiZmlsZSI6IkJ1dHRvbldpdGhPcHRpb25zLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21hbmllay9wcm9qZWN0L29wZW5zaGlmdC9lbmdsaXNodGFibGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBCdXR0b25XaXRoT3B0aW9ucyA9ICh7c2VsZWN0ZWRPcHRpb24sIG9wdGlvbnMsIG9uQ2hhbmdlZH0pID0+IHtcbiAgICBsZXQgbWVudU9wdGlvbnMgPSBbXTtcbiAgICBmb3IgKGxldCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgICAgICBtZW51T3B0aW9ucy5wdXNoKFxuICAgICAgICAgICAgPGEga2V5PXsgb3B0aW9uLmtleSB9IG9uQ2xpY2s9eyAoZSkgPT4gb25DaGFuZ2VkKG9wdGlvbi5rZXkpIH0+XG4gICAgICAgICAgICAgICAgPGxpPntvcHRpb24udGV4dH08L2xpPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgKTtcbiAgICB9O1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2J0bi1ncm91cCc+XG4gICAgICAgIDxhIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnkgZHJvcGRvd24tdG9nZ2xlJyBkYXRhLXRvZ2dsZT0nZHJvcGRvd24nPlxuICAgICAgICAgICAgPHNwYW4+e3NlbGVjdGVkT3B0aW9uLnRleHR9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjYXJldCcgLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdkcm9wZG93bi1tZW51Jz5cbiAgICAgICAgICAgIHttZW51T3B0aW9uc31cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuQnV0dG9uV2l0aE9wdGlvbnMucHJvcFR5cGVzID0ge1xuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbldpdGhPcHRpb25zO1xuIl19

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(4);
	
	var _actions = __webpack_require__(37);
	
	var _TextInput = __webpack_require__(38);
	
	var _TextInput2 = _interopRequireDefault(_TextInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/// <reference path="./../../../../typings/main.d.ts" />
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    return {
	        text: state.inputText
	    };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	    return {
	        onInputAccepted: function onInputAccepted() {
	            return dispatch((0, _actions.inputAccepted)());
	        },
	        onChange: function onChange(text) {
	            return dispatch((0, _actions.textInputChanged)(text));
	        }
	    };
	};
	
	var Input = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_TextInput2.default);
	
	exports.default = Input;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvY29udGFpbmVycy9JbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU0sa0JBQWtCLFNBQWxCLGVBQWtCLENBQUMsS0FBRCxFQUFRLFFBQVIsRUFBcUI7QUFDekMsV0FBTztBQUNILGNBQU0sTUFBTSxTQUFOO0tBRFYsQ0FEeUM7Q0FBckI7O0FBTXhCLElBQU0scUJBQXFCLFNBQXJCLGtCQUFxQixDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXdCO0FBQy9DLFdBQU87QUFDSCx5QkFBaUI7bUJBQU0sU0FBUyw2QkFBVDtTQUFOO0FBQ2pCLGtCQUFVLGtCQUFDLElBQUQ7bUJBQVUsU0FBUywrQkFBaUIsSUFBakIsQ0FBVDtTQUFWO0tBRmQsQ0FEK0M7Q0FBeEI7O0FBUTNCLElBQU0sUUFBUSx5QkFDVixlQURVLEVBRVYsa0JBRlUsc0JBQVI7O2tCQUtTIiwiZmlsZSI6IklucHV0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21hbmllay9wcm9qZWN0L29wZW5zaGlmdC9lbmdsaXNodGFibGUiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi8uLi8uLi8uLi8uLi90eXBpbmdzL21haW4uZC50c1wiIC8+XG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB0ZXh0SW5wdXRDaGFuZ2VkLCAgaW5wdXRBY2NlcHRlZCB9IGZyb20gJy4vLi4vYWN0aW9ucyc7XG5pbXBvcnQgVGV4dElucHV0IGZyb20gJy4vLi4vY29tcG9uZW50cy9UZXh0SW5wdXQnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogc3RhdGUuaW5wdXRUZXh0LFxuICAgIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiB7XG4gICAgcmV0dXJuIHsgXG4gICAgICAgIG9uSW5wdXRBY2NlcHRlZDogKCkgPT4gZGlzcGF0Y2goaW5wdXRBY2NlcHRlZCgpKSxcbiAgICAgICAgb25DaGFuZ2U6ICh0ZXh0KSA9PiBkaXNwYXRjaCh0ZXh0SW5wdXRDaGFuZ2VkKHRleHQpKVxuICAgIH07XG59O1xuXG5cbmNvbnN0IElucHV0ID0gY29ubmVjdChcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKFRleHRJbnB1dCk7XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuXG4iXX0=

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var textInputChanged = exports.textInputChanged = function textInputChanged(text) {
	    return {
	        type: 'TEXT_INPUT_CHANGED',
	        text: text
	    };
	};
	
	var inputAccepted = exports.inputAccepted = function inputAccepted() {
	    return {
	        type: 'INPUT_ACCEPTED'
	    };
	};
	
	var configurationChanged = exports.configurationChanged = function configurationChanged(columnId, optionId) {
	    return {
	        type: 'CONFIGURATION_CHANGED',
	        columnId: columnId,
	        optionId: optionId
	    };
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvYWN0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFPLElBQU0sOENBQW1CLFNBQW5CLGdCQUFtQixDQUFDLElBQUQsRUFBVTtBQUN0QyxXQUFPO0FBQ0gsY0FBTSxvQkFBTjtBQUNBLGNBQU0sSUFBTjtLQUZKLENBRHNDO0NBQVY7O0FBT3pCLElBQU0sd0NBQWdCLFNBQWhCLGFBQWdCLEdBQU07QUFDL0IsV0FBTztBQUNILGNBQU0sZ0JBQU47S0FESixDQUQrQjtDQUFOOztBQU10QixJQUFNLHNEQUF1QixTQUF2QixvQkFBdUIsQ0FBQyxRQUFELEVBQVcsUUFBWCxFQUF3QjtBQUN4RCxXQUFPO0FBQ0gsY0FBTSx1QkFBTjtBQUNBLGtCQUFVLFFBQVY7QUFDQSxrQkFBVSxRQUFWO0tBSEosQ0FEd0Q7Q0FBeEIiLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYW5pZWsvcHJvamVjdC9vcGVuc2hpZnQvZW5nbGlzaHRhYmxlIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHRleHRJbnB1dENoYW5nZWQgPSAodGV4dCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdURVhUX0lOUFVUX0NIQU5HRUQnLFxuICAgICAgICB0ZXh0OiB0ZXh0LFxuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgaW5wdXRBY2NlcHRlZCA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnSU5QVVRfQUNDRVBURUQnLFxuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgY29uZmlndXJhdGlvbkNoYW5nZWQgPSAoY29sdW1uSWQsIG9wdGlvbklkKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ0NPTkZJR1VSQVRJT05fQ0hBTkdFRCcsXG4gICAgICAgIGNvbHVtbklkOiBjb2x1bW5JZCxcbiAgICAgICAgb3B0aW9uSWQ6IG9wdGlvbklkLFxuICAgIH07XG59O1xuIl19

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__(39);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TextInput = function TextInput(_ref) {
	    var _onChange = _ref.onChange;
	    var onInputAccepted = _ref.onInputAccepted;
	
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement('textarea', { onChange: function onChange(e) {
	                    return _onChange(e.target.value);
	                } })
	        ),
	        _react2.default.createElement(_Button2.default, { content: 'Accept', onClick: onInputAccepted })
	    );
	};
	
	TextInput.propTypes = {
	    onChange: _react.PropTypes.func.isRequired,
	    onInputAccepted: _react.PropTypes.func.isRequired
	};
	
	exports.default = TextInput;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvY29tcG9uZW50cy9UZXh0SW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxZQUFZLFNBQVosU0FBWSxPQUFtQztRQUFoQywwQkFBZ0M7UUFBdEIsdUNBQXNCOztBQUNqRCxXQUNBOzs7UUFDSTs7O1lBQ0ksNENBQVUsVUFBVTsyQkFBSyxVQUFTLEVBQUUsTUFBRixDQUFTLEtBQVQ7aUJBQWQsRUFBcEIsQ0FESjtTQURKO1FBSUksa0RBQUssU0FBUyxRQUFULEVBQW1CLFNBQVMsZUFBVCxFQUF4QixDQUpKO0tBREEsQ0FEaUQ7Q0FBbkM7O0FBV2xCLFVBQVUsU0FBVixHQUFzQjtBQUNwQixjQUFVLGlCQUFVLElBQVYsQ0FBZSxVQUFmO0FBQ1YscUJBQWlCLGlCQUFVLElBQVYsQ0FBZSxVQUFmO0NBRm5COztrQkFLZSIsImZpbGUiOiJUZXh0SW5wdXQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbWFuaWVrL3Byb2plY3Qvb3BlbnNoaWZ0L2VuZ2xpc2h0YWJsZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnRuIGZyb20gJy4vQnV0dG9uJztcblxuY29uc3QgVGV4dElucHV0ID0gKHsgb25DaGFuZ2UsIG9uSW5wdXRBY2NlcHRlZCB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHRleHRhcmVhIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxCdG4gY29udGVudD17J0FjY2VwdCd9IG9uQ2xpY2s9e29uSW5wdXRBY2NlcHRlZH0gLz5cbiAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuVGV4dElucHV0LnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uSW5wdXRBY2NlcHRlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0SW5wdXQ7XG4iXX0=

/***/ },
/* 39 */
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _reactRedux = __webpack_require__(4);
	
	var _Table = __webpack_require__(41);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	var _conversions = __webpack_require__(42);
	
	var _actions = __webpack_require__(37);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    return {
	        headers: (0, _conversions.toArray)(state.configuration, 'key'),
	        rows: []
	    };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	    return {
	        onHeaderChanged: function onHeaderChanged(data) {
	            return dispatch((0, _actions.configurationChanged)(data.columnId, data.optionId));
	        }
	    };
	};
	
	var Configuration = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Table2.default);
	
	exports.default = Configuration;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvY29udGFpbmVycy9Db25maWd1cmF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFFQSxJQUFNLGtCQUFrQixTQUFsQixlQUFrQixDQUFDLEtBQUQsRUFBUSxRQUFSLEVBQXFCO0FBQ3pDLFdBQU87QUFDSCxpQkFBUywwQkFBUSxNQUFNLGFBQU4sRUFBcUIsS0FBN0IsQ0FBVDtBQUNBLGNBQU0sRUFBTjtLQUZKLENBRHlDO0NBQXJCOztBQU94QixJQUFNLHFCQUFxQixTQUFyQixrQkFBcUIsQ0FBQyxRQUFELEVBQVcsUUFBWCxFQUF3QjtBQUMvQyxXQUFPO0FBQ0gseUJBQWlCLHlCQUFDLElBQUQ7bUJBQVUsU0FBUyxtQ0FBcUIsS0FBSyxRQUFMLEVBQWUsS0FBSyxRQUFMLENBQTdDO1NBQVY7S0FEckIsQ0FEK0M7Q0FBeEI7O0FBTTNCLElBQU0sZ0JBQWdCLHlCQUNsQixlQURrQixFQUVsQixrQkFGa0Isa0JBQWhCOztrQkFLUyIsImZpbGUiOiJDb25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21hbmllay9wcm9qZWN0L29wZW5zaGlmdC9lbmdsaXNodGFibGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4vLi4vY29tcG9uZW50cy9UYWJsZSc7XG5pbXBvcnQge3RvQXJyYXl9IGZyb20gJy4vLi4vLi4vLi4vVXRpbHMvY29udmVyc2lvbnMnO1xuXG5pbXBvcnQge2NvbmZpZ3VyYXRpb25DaGFuZ2VkfSBmcm9tICcuLy4uL2FjdGlvbnMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZGVyczogdG9BcnJheShzdGF0ZS5jb25maWd1cmF0aW9uLCAna2V5JyksXG4gICAgICAgIHJvd3M6IFtdXG4gICAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCwgb3duUHJvcHMpID0+IHtcbiAgICByZXR1cm4geyBcbiAgICAgICAgb25IZWFkZXJDaGFuZ2VkOiAoZGF0YSkgPT4gZGlzcGF0Y2goY29uZmlndXJhdGlvbkNoYW5nZWQoZGF0YS5jb2x1bW5JZCwgZGF0YS5vcHRpb25JZCkpLFxuICAgIH07XG59O1xuXG5jb25zdCBDb25maWd1cmF0aW9uID0gY29ubmVjdChcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKFRhYmxlKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlndXJhdGlvbjsiXX0=

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ButtonWithOptions = __webpack_require__(35);
	
	var _ButtonWithOptions2 = _interopRequireDefault(_ButtonWithOptions);
	
	var _objectInspections = __webpack_require__(32);
	
	var objectInspection = _interopRequireWildcard(_objectInspections);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Table = function Table(_ref) {
	    var headers = _ref.headers;
	    var rows = _ref.rows;
	    var onHeaderChanged = _ref.onHeaderChanged;
	
	    var optionChanged = function optionChanged(columnId) {
	        return function (optionId) {
	            console.log('change' + columnId + optionId);
	            onHeaderChanged({
	                columnId: columnId,
	                optionId: optionId
	            });
	        };
	    };
	
	    var tableHeaderColumn = headers.map(function (h) {
	        return _react2.default.createElement(
	            'th',
	            { key: h.key },
	            _react2.default.createElement(_ButtonWithOptions2.default, { selectedOption: h.selectedOption, options: h.options, onChanged: optionChanged(h.key) })
	        );
	    });
	
	    var children = [];
	
	    return _react2.default.createElement(
	        'table',
	        null,
	        _react2.default.createElement(
	            'thead',
	            null,
	            _react2.default.createElement(
	                'tr',
	                null,
	                tableHeaderColumn
	            )
	        ),
	        _react2.default.createElement(
	            'tbody',
	            null,
	            children
	        )
	    );
	};
	
	/*const Table = () => {
	    return (
	        <div> foobar </div>
	    );
	}*/
	
	/// <reference path="./../../../../typings/main.d.ts" />
	
	Table.propTypes = {
	    headers: _react.PropTypes.any.isRequired
	};
	
	exports.default = Table;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvY29tcG9uZW50cy9UYWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVk7Ozs7OztBQUVaLElBQU0sUUFBUSxTQUFSLEtBQVEsT0FBd0M7UUFBckMsdUJBQXFDO1FBQTVCLGlCQUE0QjtRQUF0Qix1Q0FBc0I7O0FBQ2xELFFBQUksZ0JBQWdCLFNBQWhCLGFBQWdCLENBQUMsUUFBRCxFQUFjO0FBQzlCLGVBQU8sVUFBQyxRQUFELEVBQWM7QUFDakIsb0JBQVEsR0FBUixDQUFZLFdBQVcsUUFBWCxHQUFzQixRQUF0QixDQUFaLENBRGlCO0FBRWpCLDRCQUFnQjtBQUNaLDBCQUFVLFFBQVY7QUFDQSwwQkFBVSxRQUFWO2FBRkosRUFGaUI7U0FBZCxDQUR1QjtLQUFkLENBRDhCOztBQVdsRCxRQUFJLG9CQUFvQixRQUFRLEdBQVIsQ0FBYSxVQUFDLENBQUQsRUFBTztBQUN4QyxlQUNBOztjQUFJLEtBQUssRUFBRSxHQUFGLEVBQVQ7WUFDSSw2REFBZ0IsZ0JBQWdCLEVBQUUsY0FBRixFQUFrQixTQUFTLEVBQUUsT0FBRixFQUFXLFdBQVcsY0FBYyxFQUFFLEdBQUYsQ0FBekIsRUFBdEUsQ0FESjtTQURBLENBRHdDO0tBQVAsQ0FBakMsQ0FYOEM7O0FBbUJsRCxRQUFJLFdBQVcsRUFBWCxDQW5COEM7O0FBcUJsRCxXQUNJOzs7UUFDSTs7O1lBQ0k7OztnQkFDSyxpQkFETDthQURKO1NBREo7UUFNSTs7O1lBQ0ssUUFETDtTQU5KO0tBREosQ0FyQmtEO0NBQXhDOzs7Ozs7Ozs7O0FBMENkLE1BQU0sU0FBTixHQUFrQjtBQUNoQixhQUFTLGlCQUFVLEdBQVYsQ0FBYyxVQUFkO0NBRFg7O2tCQUllIiwiZmlsZSI6IlRhYmxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21hbmllay9wcm9qZWN0L29wZW5zaGlmdC9lbmdsaXNodGFibGUiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi8uLi8uLi8uLi8uLi90eXBpbmdzL21haW4uZC50c1wiIC8+XG5cbmltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnRuV2l0aE9wdGlvbnMgZnJvbSAnLi9CdXR0b25XaXRoT3B0aW9ucyc7XG5pbXBvcnQgKiBhcyBvYmplY3RJbnNwZWN0aW9uIGZyb20gJy4vLi4vLi4vLi4vVXRpbHMvb2JqZWN0SW5zcGVjdGlvbnMnO1xuXG5jb25zdCBUYWJsZSA9ICh7IGhlYWRlcnMsIHJvd3MsIG9uSGVhZGVyQ2hhbmdlZCB9KSA9PiB7XG4gICAgbGV0IG9wdGlvbkNoYW5nZWQgPSAoY29sdW1uSWQpID0+IHtcbiAgICAgICAgcmV0dXJuIChvcHRpb25JZCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoYW5nZScgKyBjb2x1bW5JZCArIG9wdGlvbklkKTtcbiAgICAgICAgICAgIG9uSGVhZGVyQ2hhbmdlZCh7XG4gICAgICAgICAgICAgICAgY29sdW1uSWQ6IGNvbHVtbklkLFxuICAgICAgICAgICAgICAgIG9wdGlvbklkOiBvcHRpb25JZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBcbiAgICBsZXQgdGFibGVIZWFkZXJDb2x1bW4gPSBoZWFkZXJzLm1hcCggKGgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgPHRoIGtleT17aC5rZXl9PlxuICAgICAgICAgICAgPEJ0bldpdGhPcHRpb25zIHNlbGVjdGVkT3B0aW9uPXtoLnNlbGVjdGVkT3B0aW9ufSBvcHRpb25zPXtoLm9wdGlvbnN9IG9uQ2hhbmdlZD17b3B0aW9uQ2hhbmdlZChoLmtleSl9IC8+XG4gICAgICAgIDwvdGg+XG4gICAgICAgICk7XG4gICAgfSk7XG4gICAgXG4gICAgbGV0IGNoaWxkcmVuID0gW107XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAge3RhYmxlSGVhZGVyQ29sdW1ufVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgKTtcbn07XG5cblxuLypjb25zdCBUYWJsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PiBmb29iYXIgPC9kaXY+XG4gICAgKTtcbn0qL1xuXG5UYWJsZS5wcm9wVHlwZXMgPSB7XG4gIGhlYWRlcnM6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZTtcbiJdfQ==

/***/ },
/* 42 */
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