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
	
	var _TableApp = __webpack_require__(47);
	
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
	
	var _input = __webpack_require__(46);
	
	var _input2 = _interopRequireDefault(_input);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function tableApp(state, action) {
	    return {
	        input: (0, _input2.default)(state.input, action),
	        configuration: (0, _configuration2.default)(state.configuration, action)
	    };
	}
	
	exports.default = tableApp;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvcmVkdWNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztRQUdnQjs7QUFIaEI7Ozs7QUFDQTs7Ozs7O0FBRU8sU0FBUyxRQUFULENBQWtCLEtBQWxCLEVBQXlCLE1BQXpCLEVBQWlDO0FBQ3BDLFdBQU87QUFDSCxlQUFPLHFCQUFhLE1BQU0sS0FBTixFQUFhLE1BQTFCLENBQVA7QUFDQSx1QkFBZSw2QkFBcUIsTUFBTSxhQUFOLEVBQXFCLE1BQTFDLENBQWY7S0FGSixDQURvQztDQUFqQzs7a0JBT1EiLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYW5pZWsvcHJvamVjdC9vcGVuc2hpZnQvZW5nbGlzaHRhYmxlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZ3VyYXRpb25SZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvY29uZmlndXJhdGlvbic7XG5pbXBvcnQgaW5wdXRSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvaW5wdXQnO1xuXG5leHBvcnQgZnVuY3Rpb24gdGFibGVBcHAoc3RhdGUsIGFjdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGlucHV0OiBpbnB1dFJlZHVjZXIoc3RhdGUuaW5wdXQsIGFjdGlvbiksXG4gICAgICAgIGNvbmZpZ3VyYXRpb246IGNvbmZpZ3VyYXRpb25SZWR1Y2VyKHN0YXRlLmNvbmZpZ3VyYXRpb24sIGFjdGlvbilcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB0YWJsZUFwcDsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvcmVkdWNlcnMvY29uZmlndXJhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7UUE2RWdCOztBQTNFaEI7O0lBQVk7O0FBQ1o7Ozs7OztBQUlPLElBQU0sZ0ZBQW9DLG1DQUFwQztBQUNOLElBQU0sZ0ZBQW9DLG1DQUFwQzs7QUFFTixJQUFNLDBFQUFpQyxnQ0FDMUMsaUNBRDBDLEVBRTFDLFVBQUMsUUFBRCxFQUFXLFFBQVgsRUFBd0I7QUFDcEIsV0FBTztBQUNILDBCQURHO0FBRUgsMEJBRkc7S0FBUCxDQURvQjtDQUF4QixDQUZTOztBQVVOLElBQU0sMEVBQWlDLGdDQUMxQyxpQ0FEMEMsRUFFMUMsVUFBQyxRQUFELEVBQVcsSUFBWCxFQUFvQjtBQUNoQixXQUFPO0FBQ0gsMEJBREc7QUFFSCxrQkFGRztLQUFQLENBRGdCO0NBQXBCLENBRlM7O0FBU2IsSUFBSSxVQUFVO0FBQ1YsV0FBTyxPQUFQO0FBQ0Esb0JBQWdCLGdCQUFoQjtBQUNBLGlCQUFhLGNBQWI7QUFDQSxxQkFBaUIsaUJBQWpCO0NBSkE7O0FBT0osSUFBSSxNQUFNLENBQU47QUFDSixJQUFJLG1CQUFtQixFQUFuQjs7Ozs7O0FBQ0oseUJBQW1CLE9BQU8sSUFBUCxDQUFZLE9BQVosMkJBQW5CLG9HQUF5QztZQUFoQyxxQkFBZ0M7O0FBQ3JDLHlCQUFpQixJQUFqQixDQUFzQjtBQUNsQixpQkFBSyxHQUFMO0FBQ0Esa0JBQU0sUUFBUSxNQUFSLENBQU47U0FGSixFQURxQztBQUtyQyxjQUxxQztLQUF6Qzs7Ozs7Ozs7Ozs7Ozs7OztBQVFBLElBQUksdUJBQXVCLFNBQXZCLG9CQUF1QixHQUFNO0FBQzdCLFdBQU87QUFDSCxXQUFHO0FBQ0MsNEJBQWdCLENBQWhCO0FBQ0Esd0JBQVksRUFBWjtBQUNBLHFCQUFTLGdCQUFUO1NBSEo7QUFLQSxXQUFHOztBQUVDLDRCQUFnQixDQUFoQjtBQUNBLHdCQUFZLEVBQVo7QUFDQSxxQkFBUyxnQkFBVDtTQUpKO0FBTUEsV0FBRztBQUNDLDRCQUFnQixDQUFoQjtBQUNBLHdCQUFZLEVBQVo7QUFDQSxxQkFBUyxnQkFBVDtTQUhKO0FBS0EsV0FBRztBQUNDLDRCQUFnQixDQUFoQjtBQUNBLHdCQUFZLEVBQVo7QUFDQSxxQkFBUyxnQkFBVDtTQUhKO0FBS0EsV0FBRztBQUNDLDRCQUFnQixDQUFoQjtBQUNBLHdCQUFZLEVBQVo7QUFDQSxxQkFBUyxnQkFBVDtTQUhKO0tBdEJKLENBRDZCO0NBQU47O0FBK0JwQixTQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0IsTUFBeEIsRUFBZ0M7QUFDbkMsUUFBSSxDQUFDLGtCQUFrQixTQUFsQixDQUE0QixLQUE1QixDQUFELEVBQXFDO0FBQ3JDLGdCQUFRLHNCQUFSLENBRHFDO0tBQXpDOztBQUlBLFFBQUksZUFBZSxTQUFmLFlBQWUsQ0FBQyxHQUFELEVBQU0sS0FBTixFQUFnQjtBQUMvQixZQUFJLFNBQVMsRUFBVCxDQUQyQjtBQUUvQixlQUFPLEdBQVAsSUFBYyxLQUFkLENBRitCO0FBRy9CLGVBQU8sTUFBUCxDQUgrQjtLQUFoQixDQUxnQjs7QUFXbkMsWUFBUSxPQUFPLElBQVA7QUFDSixhQUFLLGlDQUFMO0FBQ0ksZ0JBQUksS0FBSyxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLE1BQU0sT0FBTyxPQUFQLENBQWUsUUFBZixDQUF4QixFQUFrRDtBQUN2RCxnQ0FBZ0IsT0FBTyxPQUFQLENBQWUsUUFBZjthQURYLENBQUwsQ0FEUjtBQUlJLG1CQUFPLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBbEIsRUFBeUIsYUFBYSxPQUFPLE9BQVAsQ0FBZSxRQUFmLEVBQXlCLEVBQXRDLENBQXpCLENBQVAsQ0FKSjtBQURKLGFBTVMsaUNBQUw7QUFDSSxnQkFBSSxLQUFLLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsTUFBTSxPQUFPLE9BQVAsQ0FBZSxRQUFmLENBQXhCLEVBQWtEO0FBQ3ZELDRCQUFZLE9BQU8sT0FBUCxDQUFlLElBQWY7YUFEUCxDQUFMLENBRFI7QUFJSSxtQkFBTyxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQWxCLEVBQXlCLGFBQWEsT0FBTyxPQUFQLENBQWUsUUFBZixFQUF5QixFQUF0QyxDQUF6QixDQUFQLENBSko7QUFOSixLQVhtQzs7QUF3Qm5DLFdBQU8sS0FBUCxDQXhCbUM7Q0FBaEM7O2tCQTJCUSIsImZpbGUiOiJjb25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21hbmllay9wcm9qZWN0L29wZW5zaGlmdC9lbmdsaXNodGFibGUiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi8uLi8uLi8uLi8uLi90eXBpbmdzL21haW4uZC50c1wiIC8+XG5cbmltcG9ydCAqIGFzIG9iamVjdEluc3BlY3Rpb25zIGZyb20gJy4vLi4vLi4vLi4vVXRpbHMvb2JqZWN0SW5zcGVjdGlvbnMnO1xuaW1wb3J0IHtcbiAgICBjcmVhdGVBY3Rpb25cbn0gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBDT05GSUdVUkFUSU9OX0NPTFVNTl9UWVBFX0NIQU5HRUQgPSAnQ09ORklHVVJBVElPTl9DT0xVTU5fVFlQRV9DSEFOR0VEJztcbmV4cG9ydCBjb25zdCBDT05GSUdVUkFUSU9OX0NPTFVNTl9OQU1FX0NIQU5HRUQgPSAnQ09ORklHVVJBVElPTl9DT0xVTU5fTkFNRV9DSEFOR0VEJztcblxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyYXRpb25Db2x1bW5UeXBlQ2hhbmdlZCA9IGNyZWF0ZUFjdGlvbihcbiAgICBDT05GSUdVUkFUSU9OX0NPTFVNTl9UWVBFX0NIQU5HRUQsXG4gICAgKGNvbHVtbklkLCBvcHRpb25JZCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29sdW1uSWQsXG4gICAgICAgICAgICBvcHRpb25JZCxcbiAgICAgICAgfTtcbiAgICB9XG4pO1xuXG5leHBvcnQgY29uc3QgY29uZmlndXJhdGlvbkNvbHVtbk5hbWVDaGFuZ2VkID0gY3JlYXRlQWN0aW9uKFxuICAgIENPTkZJR1VSQVRJT05fQ09MVU1OX05BTUVfQ0hBTkdFRCxcbiAgICAoY29sdW1uSWQsIG5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbHVtbklkLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgfTtcbiAgICB9KTtcblxudmFyIG9wdGlvbnMgPSB7XG4gICAgU3BhY2U6ICdFbXB0eScsXG4gICAgU2VxdWVuY2VOdW1iZXI6ICdTZXF1ZW5jZU51bWJlcicsXG4gICAgT3JnaW5hbFdvcmQ6ICdPcmdpbmFsIHdvcmQnLFxuICAgIFRyYW5zYWxhdGVkV29yZDogJ1RyYW5zYWx0ZWQgd29yZCcsXG59O1xuXG52YXIga2V5ID0gMDtcbnZhciBhdmFpbGFibGVPcHRpb25zID0gW107XG5mb3IgKGxldCBvcHRpb24gb2YgT2JqZWN0LmtleXMob3B0aW9ucykpIHtcbiAgICBhdmFpbGFibGVPcHRpb25zLnB1c2goe1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgdGV4dDogb3B0aW9uc1tvcHRpb25dXG4gICAgfSk7XG4gICAga2V5Kys7XG59XG5cbnZhciBpbml0aWFsQ29uZmlndXJhdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICAwOiB7XG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbjogMSxcbiAgICAgICAgICAgIGNvbHVtbk5hbWU6ICcnLFxuICAgICAgICAgICAgb3B0aW9uczogYXZhaWxhYmxlT3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAgMToge1xuICAgICAgICAgICAgLy8gVE9EIElkIHNob3VsZCBiZSB1c2VkLlxuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb246IDEsXG4gICAgICAgICAgICBjb2x1bW5OYW1lOiAnJyxcbiAgICAgICAgICAgIG9wdGlvbnM6IGF2YWlsYWJsZU9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIDI6IHtcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uOiAxLFxuICAgICAgICAgICAgY29sdW1uTmFtZTogJycsXG4gICAgICAgICAgICBvcHRpb25zOiBhdmFpbGFibGVPcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgICAzOiB7XG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbjogMSxcbiAgICAgICAgICAgIGNvbHVtbk5hbWU6ICcnLFxuICAgICAgICAgICAgb3B0aW9uczogYXZhaWxhYmxlT3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAgNDoge1xuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb246IDEsXG4gICAgICAgICAgICBjb2x1bW5OYW1lOiAnJyxcbiAgICAgICAgICAgIG9wdGlvbnM6IGF2YWlsYWJsZU9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBpZiAoIW9iamVjdEluc3BlY3Rpb25zLmlzRGVmaW5lZChzdGF0ZSkpIHtcbiAgICAgICAgc3RhdGUgPSBpbml0aWFsQ29uZmlndXJhdGlvbigpO1xuICAgIH1cblxuICAgIGxldCBjcmVhdGVPYmplY3QgPSAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBDT05GSUdVUkFUSU9OX0NPTFVNTl9UWVBFX0NIQU5HRUQ6XG4gICAgICAgICAgICBsZXQgYzEgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZVthY3Rpb24ucGF5bG9hZC5jb2x1bW5JZF0sIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbjogYWN0aW9uLnBheWxvYWQub3B0aW9uSWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBjcmVhdGVPYmplY3QoYWN0aW9uLnBheWxvYWQuY29sdW1uSWQsIGMxKSk7XG4gICAgICAgIGNhc2UgQ09ORklHVVJBVElPTl9DT0xVTU5fTkFNRV9DSEFOR0VEOlxuICAgICAgICAgICAgbGV0IGMyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVbYWN0aW9uLnBheWxvYWQuY29sdW1uSWRdLCB7XG4gICAgICAgICAgICAgICAgY29sdW1uTmFtZTogYWN0aW9uLnBheWxvYWQubmFtZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIGNyZWF0ZU9iamVjdChhY3Rpb24ucGF5bG9hZC5jb2x1bW5JZCwgYzIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il19

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
	exports.tableInputChanged = exports.InputTextChanged = exports.TABLE_INPUT_CHANGED = exports.INPUT_TEXT_CHANGED = undefined;
	exports.reducer = reducer;
	
	var _reduxActions = __webpack_require__(34);
	
	var INPUT_TEXT_CHANGED = exports.INPUT_TEXT_CHANGED = 'INPUT_TEXT_CHANGED'; /// <reference path="./../../../../typings/main.d.ts" />
	
	var TABLE_INPUT_CHANGED = exports.TABLE_INPUT_CHANGED = 'TABLE_INPUT_CHANGED';
	
	var InputTextChanged = exports.InputTextChanged = (0, _reduxActions.createAction)(INPUT_TEXT_CHANGED);
	var tableInputChanged = exports.tableInputChanged = (0, _reduxActions.createAction)(tableInputChanged);
	
	function reducer(state, action) {
	    switch (action.type) {
	        case INPUT_TEXT_CHANGED:
	            return state;
	        case TABLE_INPUT_CHANGED:
	            return state;
	    }
	}
	
	exports.default = reducer;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvcmVkdWNlcnMvaW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O1FBVWdCOztBQVJoQjs7QUFFTyxJQUFNLGtEQUFxQixvQkFBckI7O0FBQ04sSUFBTSxvREFBc0IscUJBQXRCOztBQUVOLElBQU0sOENBQW1CLGdDQUFhLGtCQUFiLENBQW5CO0FBQ04sSUFBTSxnREFBb0IsZ0NBQWEsaUJBQWIsQ0FBcEI7O0FBRU4sU0FBUyxPQUFULENBQWlCLEtBQWpCLEVBQXdCLE1BQXhCLEVBQWdDO0FBQ25DLFlBQVEsT0FBTyxJQUFQO0FBQ0osYUFBSyxrQkFBTDtBQUNJLG1CQUFPLEtBQVAsQ0FESjtBQURKLGFBR1MsbUJBQUw7QUFDSSxtQkFBTyxLQUFQLENBREo7QUFISixLQURtQztDQUFoQzs7a0JBU1EiLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbWFuaWVrL3Byb2plY3Qvb3BlbnNoaWZ0L2VuZ2xpc2h0YWJsZSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLy4uLy4uLy4uLy4uL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cblxuaW1wb3J0IHtjcmVhdGVBY3Rpb259IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgSU5QVVRfVEVYVF9DSEFOR0VEID0gJ0lOUFVUX1RFWFRfQ0hBTkdFRCc7XG5leHBvcnQgY29uc3QgVEFCTEVfSU5QVVRfQ0hBTkdFRCA9ICdUQUJMRV9JTlBVVF9DSEFOR0VEJztcblxuZXhwb3J0IGNvbnN0IElucHV0VGV4dENoYW5nZWQgPSBjcmVhdGVBY3Rpb24oSU5QVVRfVEVYVF9DSEFOR0VEKTtcbmV4cG9ydCBjb25zdCB0YWJsZUlucHV0Q2hhbmdlZCA9IGNyZWF0ZUFjdGlvbih0YWJsZUlucHV0Q2hhbmdlZCk7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgSU5QVVRfVEVYVF9DSEFOR0VEOlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBjYXNlIFRBQkxFX0lOUFVUX0NIQU5HRUQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIl19

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(4);
	
	var _Header = __webpack_require__(48);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Input = __webpack_require__(50);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Configuration = __webpack_require__(66);
	
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ButtonWithOptions = __webpack_require__(49);
	
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
/* 49 */
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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(4);
	
	var _input = __webpack_require__(46);
	
	var _InputTabs = __webpack_require__(51);
	
	var _InputTabs2 = _interopRequireDefault(_InputTabs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/// <reference path="./../../../../typings/main.d.ts" />
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    return {
	        text: state.inputText
	    };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	    return {
	        onTabChanged: function onTabChanged(selectedTab, previousTab) {
	            console.log('Selected tab: ' + selectedTab + ', previous tab: ' + previousTab + '.');
	        },
	
	        onTextInputChanged: function onTextInputChanged(input) {
	            return console.log('New text input ' + input + '.');
	        },
	
	        onTableInputChanged: function onTableInputChanged(input) {
	            return console.log('New text input ' + input + '.');
	        }
	    };
	};
	
	var Input = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_InputTabs2.default);
	
	exports.default = Input;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvY29udGFpbmVycy9JbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQTs7OztBQUNBOztBQUVBOztBQUNBOzs7Ozs7OztBQUVBLElBQU0sa0JBQWtCLFNBQWxCLGVBQWtCLENBQUMsS0FBRCxFQUFRLFFBQVIsRUFBcUI7QUFDekMsV0FBTztBQUNILGNBQU0sTUFBTSxTQUFOO0tBRFYsQ0FEeUM7Q0FBckI7O0FBTXhCLElBQU0scUJBQXFCLFNBQXJCLGtCQUFxQixDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXdCO0FBQy9DLFdBQU87QUFDSCxzQkFBYyxzQkFBQyxXQUFELEVBQWMsV0FBZCxFQUE4QjtBQUN4QyxvQkFBUSxHQUFSLG9CQUE2QixtQ0FBOEIsaUJBQTNELEVBRHdDO1NBQTlCOztBQUlkLDRCQUFvQiw0QkFBQyxLQUFEO21CQUFXLFFBQVEsR0FBUixxQkFBOEIsV0FBOUI7U0FBWDs7QUFFcEIsNkJBQXFCLDZCQUFDLEtBQUQ7bUJBQVcsUUFBUSxHQUFSLHFCQUE4QixXQUE5QjtTQUFYO0tBUHpCLENBRCtDO0NBQXhCOztBQVkzQixJQUFNLFFBQVEseUJBQ1YsZUFEVSxFQUVWLGtCQUZVLHNCQUFSOztrQkFLUyIsImZpbGUiOiJJbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYW5pZWsvcHJvamVjdC9vcGVuc2hpZnQvZW5nbGlzaHRhYmxlIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vLi4vLi4vLi4vLi4vdHlwaW5ncy9tYWluLmQudHNcIiAvPlxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBjb25maWd1cmF0aW9uQ29sdW1uVHlwZUNoYW5nZWQsIGNvbmZpZ3VyYXRpb25Db2x1bW5OYW1lQ2hhbmdlZH0gZnJvbSAnLi8uLi9yZWR1Y2Vycy9pbnB1dCc7XG5pbXBvcnQgSW5wdXRUYWJzIGZyb20gJy4vLi4vY29tcG9uZW50cy9JbnB1dFRhYnMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogc3RhdGUuaW5wdXRUZXh0LFxuICAgIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb25UYWJDaGFuZ2VkOiAoc2VsZWN0ZWRUYWIsIHByZXZpb3VzVGFiKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgU2VsZWN0ZWQgdGFiOiAke3NlbGVjdGVkVGFifSwgcHJldmlvdXMgdGFiOiAke3ByZXZpb3VzVGFifS5gKTtcbiAgICAgICAgfSxcblxuICAgICAgICBvblRleHRJbnB1dENoYW5nZWQ6IChpbnB1dCkgPT4gY29uc29sZS5sb2coYE5ldyB0ZXh0IGlucHV0ICR7aW5wdXR9LmApLFxuXG4gICAgICAgIG9uVGFibGVJbnB1dENoYW5nZWQ6IChpbnB1dCkgPT4gY29uc29sZS5sb2coYE5ldyB0ZXh0IGlucHV0ICR7aW5wdXR9LmApLFxuICAgIH07XG59O1xuXG5jb25zdCBJbnB1dCA9IGNvbm5lY3QoXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShJbnB1dFRhYnMpO1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcblxuIl19

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.InputTabs = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactTabs = __webpack_require__(52);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TextInput = __webpack_require__(62);
	
	var _TextInput2 = _interopRequireDefault(_TextInput);
	
	var _TableInput = __webpack_require__(63);
	
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
	                    _react2.default.createElement(_TextInput2.default, { onInputChanged: this.onTexInputChanged })
	                ),
	                _react2.default.createElement(
	                    _reactTabs.TabPanel,
	                    null,
	                    _react2.default.createElement(_TableInput2.default, { onInputChanged: this.onTableInputChanged })
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
	    onTableInputChanged: _react.PropTypes.func.isRequired
	};
	
	exports.default = InputTabs;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvY29tcG9uZW50cy9JbnB1dFRhYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFYTs7Ozs7Ozs7Ozs7cUNBQ0ksWUFBWSxhQUFZO0FBQ2pDLG9CQUFRLEdBQVIsQ0FBWSxpQkFBaUIsVUFBakIsR0FBOEIsZUFBOUIsR0FBZ0QsV0FBaEQsQ0FBWixDQURpQzs7OztpQ0FHNUI7QUFDTCxtQkFDSTs7a0JBQU0sVUFBVSxLQUFLLFlBQUwsRUFBaEI7Z0JBQ0E7OztvQkFDSTs7OztxQkFESjtvQkFFSTs7OztxQkFGSjtpQkFEQTtnQkFLQTs7O29CQUNJLHFEQUFXLGdCQUFnQixLQUFLLGlCQUFMLEVBQTNCLENBREo7aUJBTEE7Z0JBUUE7OztvQkFDSSxzREFBWSxnQkFBZ0IsS0FBSyxtQkFBTCxFQUE1QixDQURKO2lCQVJBO2FBREosQ0FESzs7OztXQUpBOzs7QUFvQlo7O0FBRUQsVUFBVSxTQUFWLEdBQXNCO0FBQ2xCLGtCQUFjLGlCQUFVLElBQVYsQ0FBZSxVQUFmO0FBQ2Qsd0JBQW9CLGlCQUFVLElBQVYsQ0FBZSxVQUFmO0FBQ3BCLHlCQUFxQixpQkFBVSxJQUFWLENBQWUsVUFBZjtDQUh6Qjs7a0JBTWUiLCJmaWxlIjoiSW5wdXRUYWJzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21hbmllay9wcm9qZWN0L29wZW5zaGlmdC9lbmdsaXNodGFibGUiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi8uLi8uLi8uLi8uLi90eXBpbmdzL21haW4uZC50c1wiIC8+XG5cbmltcG9ydCB7VGFiLCBUYWJzLCBUYWJMaXN0LCBUYWJQYW5lbCB9IGZyb20gJ3JlYWN0LXRhYnMnO1xuaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuL1RleHRJbnB1dCc7XG5pbXBvcnQgVGFibGVJbnB1dCBmcm9tICcuL1RhYmxlSW5wdXQnO1xuXG5leHBvcnQgY2xhc3MgSW5wdXRUYWJzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBoYW5kbGVTZWxlY3QoY3VycmVudFRhYiwgcHJldmlvdXNUYWIpe1xuICAgICAgICBjb25zb2xlLmxvZygnY3VycmVudCB0YWIgJyArIGN1cnJlbnRUYWIgKyAnLCBwcmV2b3VzIHRhYicgKyBwcmV2aW91c1RhYik7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUYWJzIG9uU2VsZWN0PXt0aGlzLmhhbmRsZVNlbGVjdH0+XG4gICAgICAgICAgICA8VGFiTGlzdD5cbiAgICAgICAgICAgICAgICA8VGFiPnRleHQ8L1RhYj5cbiAgICAgICAgICAgICAgICA8VGFiPnRhYmxlPC9UYWI+XG4gICAgICAgICAgICA8L1RhYkxpc3Q+XG4gICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRleHRJbnB1dCBvbklucHV0Q2hhbmdlZD17dGhpcy5vblRleElucHV0Q2hhbmdlZH0gLz5cbiAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRhYmxlSW5wdXQgb25JbnB1dENoYW5nZWQ9e3RoaXMub25UYWJsZUlucHV0Q2hhbmdlZH0gLz5cbiAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICk7XG4gICAgfTtcbn07XG5cbklucHV0VGFicy5wcm9wVHlwZXMgPSB7XG4gICAgb25UYWJDaGFuZ2VkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uVGV4dElucHV0Q2hhbmdlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblRhYmxlSW5wdXRDaGFuZ2VkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRUYWJzO1xuXG4iXX0=

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  Tabs: __webpack_require__(53),
	  TabList: __webpack_require__(59),
	  Tab: __webpack_require__(58),
	  TabPanel: __webpack_require__(61)
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _classnames = __webpack_require__(54);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _jsStylesheet = __webpack_require__(55);
	
	var _jsStylesheet2 = _interopRequireDefault(_jsStylesheet);
	
	var _helpersUuid = __webpack_require__(56);
	
	var _helpersUuid2 = _interopRequireDefault(_helpersUuid);
	
	var _helpersChildrenPropType = __webpack_require__(57);
	
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
	      (0, _jsStylesheet2['default'])(__webpack_require__(60));
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
/* 54 */
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
/* 55 */
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
/* 56 */
/***/ function(module, exports) {

	// Get a universally unique identifier
	'use strict';
	
	var count = 0;
	module.exports = function uuid() {
	  return 'react-tabs-' + count++;
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _componentsTab = __webpack_require__(58);
	
	var _componentsTab2 = _interopRequireDefault(_componentsTab);
	
	var _componentsTabList = __webpack_require__(59);
	
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _classnames = __webpack_require__(54);
	
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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(54);
	
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
/* 60 */
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(54);
	
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
/* 62 */
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
	    onInputChanged: _react.PropTypes.func.isRequired
	};
	
	exports.default = TextInput;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvY29tcG9uZW50cy9UZXh0SW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU0sWUFBWSxTQUFaLFNBQVksT0FBd0I7UUFBckIscUNBQXFCOztBQUN0QyxXQUNJOzs7UUFDSTs7O1lBQ0ksNENBQVUsVUFBVTsyQkFBSyxlQUFlLEVBQUUsTUFBRixDQUFTLEtBQVQ7aUJBQXBCLEVBQXBCLENBREo7U0FESjtLQURKLENBRHNDO0NBQXhCOztBQVVsQixVQUFVLFNBQVYsR0FBc0I7QUFDbEIsb0JBQWdCLGlCQUFVLElBQVYsQ0FBZSxVQUFmO0NBRHBCOztrQkFJZSIsImZpbGUiOiJUZXh0SW5wdXQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbWFuaWVrL3Byb2plY3Qvb3BlbnNoaWZ0L2VuZ2xpc2h0YWJsZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFRleHRJbnB1dCA9ICh7IG9uSW5wdXRDaGFuZ2VkIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgb25DaGFuZ2U9e2UgPT4gb25JbnB1dENoYW5nZWQoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5UZXh0SW5wdXQucHJvcFR5cGVzID0ge1xuICAgIG9uSW5wdXRDaGFuZ2VkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dElucHV0O1xuIl19

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TableInput = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TableInputRow = __webpack_require__(64);
	
	var _TableInputRow2 = _interopRequireDefault(_TableInputRow);
	
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
	                'table',
	                null,
	                _react2.default.createElement(
	                    'thead',
	                    null,
	                    _react2.default.createElement(
	                        'tr',
	                        null,
	                        'Original'
	                    ),
	                    _react2.default.createElement(
	                        'tr',
	                        null,
	                        'Translated'
	                    )
	                ),
	                _react2.default.createElement(
	                    'tbody',
	                    null,
	                    rows
	                )
	            );
	        }
	    }, {
	        key: 'getRows',
	        value: function getRows() {
	            var _props = this.props;
	            var items = _props.items;
	            var onRemoveRowClicked = _props.onRemoveRowClicked;
	            var onTableInputChanged = _props.onTableInputChanged;
	
	            var result = [];
	            items.map(function (item) {
	                result.push(_react2.default.createElement(_TableInputRow2.default, {
	                    key: item.key,
	                    sourceWord: item.sourceWord,
	                    destinationWord: item.destinationWord,
	                    onRemoveBtnClicked: function onRemoveBtnClicked() {
	                        return onRemoveRowClicked(item.key);
	                    },
	                    onInputChanged: function onInputChanged(source, destination) {
	                        return onTableInputChanged(item.key, source, destination);
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
	    onTableInputChanged: _react.PropTypes.func.isRequired
	};
	
	exports.default = TableInput;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvY29tcG9uZW50cy9UYWJsZUlucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVhOzs7Ozs7Ozs7OztpQ0FDQTtBQUNMLGdCQUFJLE9BQU8sS0FBSyxPQUFMLEVBQVAsQ0FEQztBQUVMLG1CQUNJOzs7Z0JBQ0k7OztvQkFDSTs7OztxQkFESjtvQkFJSTs7OztxQkFKSjtpQkFESjtnQkFTSTs7O29CQUNLLElBREw7aUJBVEo7YUFESixDQUZLOzs7O2tDQW1CQzt5QkFDaUQsS0FBSyxLQUFMLENBRGpEO2dCQUNELHFCQURDO2dCQUNNLCtDQUROO2dCQUMwQixpREFEMUI7O0FBRU4sZ0JBQUksU0FBUyxFQUFULENBRkU7QUFHTixrQkFBTSxHQUFOLENBQVUsVUFBQyxJQUFELEVBQVU7QUFDaEIsdUJBQU8sSUFBUCxDQUNJO0FBQ0kseUJBQUssS0FBSyxHQUFMO0FBQ0wsZ0NBQVksS0FBSyxVQUFMO0FBQ1oscUNBQWlCLEtBQUssZUFBTDtBQUNqQix3Q0FBb0I7K0JBQU0sbUJBQW1CLEtBQUssR0FBTDtxQkFBekI7QUFDcEIsb0NBQWdCLHdCQUFDLE1BQUQsRUFBUyxXQUFUOytCQUF5QixvQkFBb0IsS0FBSyxHQUFMLEVBQVUsTUFBOUIsRUFBc0MsV0FBdEM7cUJBQXpCO2lCQUxwQixDQURKLEVBRGdCO2FBQVYsQ0FBVixDQUhNOztBQWdCTixtQkFBTyxNQUFQLENBaEJNOzs7O1dBcEJEOzs7QUF3Q2IsV0FBVyxTQUFYLEdBQXVCO0FBQ25CLFdBQU8saUJBQVUsS0FBVixDQUFnQixVQUFoQjtBQUNQLHdCQUFvQixpQkFBVSxJQUFWLENBQWUsVUFBZjtBQUNwQix5QkFBcUIsaUJBQVUsSUFBVixDQUFlLFVBQWY7Q0FIekI7O2tCQU1lIiwiZmlsZSI6IlRhYmxlSW5wdXQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbWFuaWVrL3Byb2plY3Qvb3BlbnNoaWZ0L2VuZ2xpc2h0YWJsZSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLy4uLy4uLy4uLy4uL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cblxuaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRhYmxlSW5wdXRSb3cgZnJvbSAnLi9UYWJsZUlucHV0Um93J1xuXG5leHBvcnQgY2xhc3MgVGFibGVJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgcm93cyA9IHRoaXMuZ2V0Um93cygpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgT3JpZ2luYWxcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNsYXRlZFxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7cm93c31cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgKTtcbiAgICB9O1xuICAgIFxuICAgIGdldFJvd3MoKSB7XG4gICAgICAgIGxldCB7aXRlbXMsIG9uUmVtb3ZlUm93Q2xpY2tlZCwgb25UYWJsZUlucHV0Q2hhbmdlZH0gPSB0aGlzLnByb3BzO1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goXG4gICAgICAgICAgICAgICAgPFRhYmxlSW5wdXRSb3cgXG4gICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5rZXl9XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVdvcmQ9e2l0ZW0uc291cmNlV29yZH1cbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25Xb3JkPXtpdGVtLmRlc3RpbmF0aW9uV29yZH1cbiAgICAgICAgICAgICAgICAgICAgb25SZW1vdmVCdG5DbGlja2VkPXsoKSA9PiBvblJlbW92ZVJvd0NsaWNrZWQoaXRlbS5rZXkpfVxuICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlZD17KHNvdXJjZSwgZGVzdGluYXRpb24pID0+IG9uVGFibGVJbnB1dENoYW5nZWQoaXRlbS5rZXksIHNvdXJjZSwgZGVzdGluYXRpb24pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgIH0gKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59XG5cblRhYmxlSW5wdXQucHJvcFR5cGVzID0ge1xuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICBvblJlbW92ZVJvd0NsaWNrZWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25UYWJsZUlucHV0Q2hhbmdlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGVJbnB1dDtcbiJdfQ==

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TableInputRow = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__(65);
	
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
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var sourceWord = _props.sourceWord;
	            var destinationWord = _props.destinationWord;
	            var onRemoveBtnClicked = _props.onRemoveBtnClicked;
	
	
	            return _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                    'td',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'source-word', contentEditable: 'true', 'data-ph': 'Original word' },
	                        sourceWord
	                    )
	                ),
	                _react2.default.createElement(
	                    'td',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'destination-word', contentEditable: 'true', 'data-ph': 'Translted word' },
	                        destinationWord
	                    )
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
	    onRemoveBtnClicked: _react.PropTypes.func.isRequired
	};
	
	exports.default = TableInputRow;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvY29tcG9uZW50cy9UYWJsZUlucHV0Um93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVhOzs7Ozs7Ozs7OztpQ0FDQTt5QkFDbUQsS0FBSyxLQUFMLENBRG5EO2dCQUNFLCtCQURGO2dCQUNjLHlDQURkO2dCQUMrQiwrQ0FEL0I7OztBQUdMLG1CQUNJOzs7Z0JBQ0k7OztvQkFDSTs7MEJBQUssV0FBVSxhQUFWLEVBQXdCLGlCQUFnQixNQUFoQixFQUF1QixXQUFRLGVBQVIsRUFBcEQ7d0JBQ0ssVUFETDtxQkFESjtpQkFESjtnQkFNSTs7O29CQUNJOzswQkFBSyxXQUFVLGtCQUFWLEVBQTZCLGlCQUFnQixNQUFoQixFQUF1QixXQUFRLGdCQUFSLEVBQXpEO3dCQUNLLGVBREw7cUJBREo7aUJBTko7Z0JBV0k7OztvQkFDSSxrREFBUSxTQUFTLGtCQUFULEVBQTZCLFNBQVMsUUFBVCxFQUFyQyxDQURKO2lCQVhKO2FBREosQ0FISzs7OztXQURBOzs7QUF3QmIsY0FBYyxTQUFkLEdBQTBCO0FBQ3RCLGdCQUFZLGlCQUFVLE1BQVYsQ0FBaUIsVUFBakI7QUFDWixxQkFBaUIsaUJBQVUsTUFBVixDQUFpQixVQUFqQjtBQUNqQix3QkFBb0IsaUJBQVUsSUFBVixDQUFlLFVBQWY7Q0FIeEI7O2tCQU1lIiwiZmlsZSI6IlRhYmxlSW5wdXRSb3cuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbWFuaWVrL3Byb2plY3Qvb3BlbnNoaWZ0L2VuZ2xpc2h0YWJsZSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLy4uLy4uLy4uLy4uL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cblxuaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5cbmV4cG9ydCBjbGFzcyBUYWJsZUlucHV0Um93IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtzb3VyY2VXb3JkLCBkZXN0aW5hdGlvbldvcmQsIG9uUmVtb3ZlQnRuQ2xpY2tlZH09dGhpcy5wcm9wcztcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvdXJjZS13b3JkXCIgY29udGVudEVkaXRhYmxlPVwidHJ1ZVwiIGRhdGEtcGg9XCJPcmlnaW5hbCB3b3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c291cmNlV29yZH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzdGluYXRpb24td29yZFwiIGNvbnRlbnRFZGl0YWJsZT1cInRydWVcIiBkYXRhLXBoPVwiVHJhbnNsdGVkIHdvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtkZXN0aW5hdGlvbldvcmR9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uUmVtb3ZlQnRuQ2xpY2tlZH0gY29udGVudD17XCJkZWxldGVcIn0gLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblRhYmxlSW5wdXRSb3cucHJvcFR5cGVzID0ge1xuICAgIHNvdXJjZVdvcmQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBkZXN0aW5hdGlvbldvcmQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBvblJlbW92ZUJ0bkNsaWNrZWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlSW5wdXRSb3c7XG4iXX0=

/***/ },
/* 65 */
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _reactRedux = __webpack_require__(4);
	
	var _Table = __webpack_require__(67);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	var _conversions = __webpack_require__(68);
	
	var _configuration = __webpack_require__(32);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    return {
	        headers: (0, _conversions.toArray)(state.configuration, 'key'),
	        rows: []
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvY29udGFpbmVycy9Db25maWd1cmF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFFQSxJQUFNLGtCQUFrQixTQUFsQixlQUFrQixDQUFDLEtBQUQsRUFBUSxRQUFSLEVBQXFCO0FBQ3pDLFdBQU87QUFDSCxpQkFBUywwQkFBUSxNQUFNLGFBQU4sRUFBcUIsS0FBN0IsQ0FBVDtBQUNBLGNBQU0sRUFBTjtLQUZKLENBRHlDO0NBQXJCOztBQU94QixJQUFNLHFCQUFxQixTQUFyQixrQkFBcUIsQ0FBQyxRQUFELEVBQVcsUUFBWCxFQUF3QjtBQUMvQyxXQUFPO0FBQ0gseUJBQWlCLHlCQUFDLElBQUQ7bUJBQVUsU0FBUyxtREFBK0IsS0FBSyxRQUFMLEVBQWUsS0FBSyxRQUFMLENBQXZEO1NBQVY7QUFDakIsNkJBQXFCLDZCQUFDLEVBQUQsRUFBSyxJQUFMO21CQUFjLFNBQVMsbURBQStCLEVBQS9CLEVBQW1DLElBQW5DLENBQVQ7U0FBZDtLQUZ6QixDQUQrQztDQUF4Qjs7QUFPM0IsSUFBTSxnQkFBZ0IseUJBQ2xCLGVBRGtCLEVBRWxCLGtCQUZrQixrQkFBaEI7O2tCQUtTIiwiZmlsZSI6IkNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbWFuaWVrL3Byb2plY3Qvb3BlbnNoaWZ0L2VuZ2xpc2h0YWJsZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgVGFibGUgZnJvbSAnLi8uLi9jb21wb25lbnRzL1RhYmxlJztcbmltcG9ydCB7dG9BcnJheX0gZnJvbSAnLi8uLi8uLi8uLi9VdGlscy9jb252ZXJzaW9ucyc7XG5cbmltcG9ydCB7Y29uZmlndXJhdGlvbkNvbHVtblR5cGVDaGFuZ2VkLCBjb25maWd1cmF0aW9uQ29sdW1uTmFtZUNoYW5nZWR9IGZyb20gJy4vLi4vcmVkdWNlcnMvY29uZmlndXJhdGlvbic7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBoZWFkZXJzOiB0b0FycmF5KHN0YXRlLmNvbmZpZ3VyYXRpb24sICdrZXknKSxcbiAgICAgICAgcm93czogW11cbiAgICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoLCBvd25Qcm9wcykgPT4ge1xuICAgIHJldHVybiB7IFxuICAgICAgICBvbk9wdGlvbkNoYW5nZWQ6IChkYXRhKSA9PiBkaXNwYXRjaChjb25maWd1cmF0aW9uQ29sdW1uVHlwZUNoYW5nZWQoZGF0YS5jb2x1bW5JZCwgZGF0YS5vcHRpb25JZCkpLFxuICAgICAgICBvbkNvbHVtbk5hbWVDaGFuZ2VkOiAoaWQsIG5hbWUpID0+IGRpc3BhdGNoKGNvbmZpZ3VyYXRpb25Db2x1bW5OYW1lQ2hhbmdlZChpZCwgbmFtZSkpLFxuICAgIH07XG59O1xuXG5jb25zdCBDb25maWd1cmF0aW9uID0gY29ubmVjdChcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKFRhYmxlKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlndXJhdGlvbjsiXX0=

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ButtonWithOptions = __webpack_require__(49);
	
	var _ButtonWithOptions2 = _interopRequireDefault(_ButtonWithOptions);
	
	var _objectInspections = __webpack_require__(33);
	
	var objectInspection = _interopRequireWildcard(_objectInspections);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Table = function Table(_ref) {
	    var headers = _ref.headers;
	    var rows = _ref.rows;
	    var onOptionChanged = _ref.onOptionChanged;
	    var onColumnNameChanged = _ref.onColumnNameChanged;
	
	    var optionChanged = function optionChanged(columnId) {
	        return function (optionId) {
	            onOptionChanged({
	                columnId: columnId,
	                optionId: optionId
	            });
	        };
	    };
	
	    var tableHeaderColumn = headers.map(function (h) {
	        var handleColumnNameChanged = function handleColumnNameChanged(text) {
	            onColumnNameChanged(h.key, text);
	        };
	
	        return _react2.default.createElement(
	            'th',
	            { key: h.key },
	            _react2.default.createElement('input', { className: 'column-name-input', type: 'text', placeholder: 'column name', onChange: function onChange(e) {
	                    return handleColumnNameChanged(e.target.value);
	                } }),
	            _react2.default.createElement(_ButtonWithOptions2.default, { selectedOption: h.selectedOption, options: h.options, onChanged: optionChanged(h.key) })
	        );
	    });
	
	    var children = [];
	
	    return _react2.default.createElement(
	        'table',
	        { className: 'table' },
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvY29tcG9uZW50cy9UYWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVk7Ozs7OztBQUVaLElBQU0sUUFBUSxTQUFSLEtBQVEsT0FBMkQ7UUFBekQsdUJBQXlEO1FBQWhELGlCQUFnRDtRQUExQyx1Q0FBMEM7UUFBekIsK0NBQXlCOztBQUNyRSxRQUFJLGdCQUFnQixTQUFoQixhQUFnQixDQUFDLFFBQUQsRUFBYztBQUM5QixlQUFPLFVBQUMsUUFBRCxFQUFjO0FBQ2pCLDRCQUFnQjtBQUNaLDBCQUFVLFFBQVY7QUFDQSwwQkFBVSxRQUFWO2FBRkosRUFEaUI7U0FBZCxDQUR1QjtLQUFkLENBRGlEOztBQVVyRSxRQUFJLG9CQUFvQixRQUFRLEdBQVIsQ0FBWSxVQUFDLENBQUQsRUFBTztBQUN2QyxZQUFJLDBCQUEwQixTQUExQix1QkFBMEIsQ0FBQyxJQUFELEVBQVU7QUFDcEMsZ0NBQW9CLEVBQUUsR0FBRixFQUFPLElBQTNCLEVBRG9DO1NBQVYsQ0FEUzs7QUFLdkMsZUFDQTs7Y0FBSSxLQUFLLEVBQUUsR0FBRixFQUFUO1lBQ0kseUNBQU8sV0FBVSxtQkFBVixFQUE4QixNQUFLLE1BQUwsRUFBWSxhQUFZLGFBQVosRUFBMEIsVUFBVSxrQkFBQyxDQUFEOzJCQUFPLHdCQUF3QixFQUFFLE1BQUYsQ0FBUyxLQUFUO2lCQUEvQixFQUFyRixDQURKO1lBRUksNkRBQWdCLGdCQUFnQixFQUFFLGNBQUYsRUFBa0IsU0FBUyxFQUFFLE9BQUYsRUFBVyxXQUFXLGNBQWMsRUFBRSxHQUFGLENBQXpCLEVBQXRFLENBRko7U0FEQSxDQUx1QztLQUFQLENBQWhDLENBVmlFOztBQXVCckUsUUFBSSxXQUFXLEVBQVgsQ0F2QmlFOztBQXlCckUsV0FDSTs7VUFBTyxXQUFVLE9BQVYsRUFBUDtRQUNJOzs7WUFDSTs7O2dCQUNLLGlCQURMO2FBREo7U0FESjtRQU1JOzs7WUFDSyxRQURMO1NBTko7S0FESixDQXpCcUU7Q0FBM0Q7Ozs7Ozs7Ozs7QUE2Q2QsTUFBTSxTQUFOLEdBQWtCO0FBQ2hCLGFBQVMsaUJBQVUsR0FBVixDQUFjLFVBQWQ7Q0FEWDs7a0JBSWUiLCJmaWxlIjoiVGFibGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbWFuaWVrL3Byb2plY3Qvb3BlbnNoaWZ0L2VuZ2xpc2h0YWJsZSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLy4uLy4uLy4uLy4uL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cblxuaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdG5XaXRoT3B0aW9ucyBmcm9tICcuL0J1dHRvbldpdGhPcHRpb25zJztcbmltcG9ydCAqIGFzIG9iamVjdEluc3BlY3Rpb24gZnJvbSAnLi8uLi8uLi8uLi9VdGlscy9vYmplY3RJbnNwZWN0aW9ucyc7XG5cbmNvbnN0IFRhYmxlID0gKHtoZWFkZXJzLCByb3dzLCBvbk9wdGlvbkNoYW5nZWQsIG9uQ29sdW1uTmFtZUNoYW5nZWR9KSA9PiB7XG4gICAgbGV0IG9wdGlvbkNoYW5nZWQgPSAoY29sdW1uSWQpID0+IHtcbiAgICAgICAgcmV0dXJuIChvcHRpb25JZCkgPT4ge1xuICAgICAgICAgICAgb25PcHRpb25DaGFuZ2VkKHtcbiAgICAgICAgICAgICAgICBjb2x1bW5JZDogY29sdW1uSWQsXG4gICAgICAgICAgICAgICAgb3B0aW9uSWQ6IG9wdGlvbklkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFxuICAgIGxldCB0YWJsZUhlYWRlckNvbHVtbiA9IGhlYWRlcnMubWFwKChoKSA9PiB7XG4gICAgICAgIGxldCBoYW5kbGVDb2x1bW5OYW1lQ2hhbmdlZCA9ICh0ZXh0KSA9PiB7XG4gICAgICAgICAgICBvbkNvbHVtbk5hbWVDaGFuZ2VkKGgua2V5LCB0ZXh0KTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgIDx0aCBrZXk9e2gua2V5fT5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjb2x1bW4tbmFtZS1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJjb2x1bW4gbmFtZVwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ29sdW1uTmFtZUNoYW5nZWQoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICA8QnRuV2l0aE9wdGlvbnMgc2VsZWN0ZWRPcHRpb249e2guc2VsZWN0ZWRPcHRpb259IG9wdGlvbnM9e2gub3B0aW9uc30gb25DaGFuZ2VkPXtvcHRpb25DaGFuZ2VkKGgua2V5KX0gLz5cbiAgICAgICAgPC90aD5cbiAgICAgICAgKTtcbiAgICB9KTtcbiAgICBcbiAgICBsZXQgY2hpbGRyZW4gPSBbXTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIHt0YWJsZUhlYWRlckNvbHVtbn1cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICk7XG59O1xuXG4vKmNvbnN0IFRhYmxlID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+IGZvb2JhciA8L2Rpdj5cbiAgICApO1xufSovXG5cblRhYmxlLnByb3BUeXBlcyA9IHtcbiAgaGVhZGVyczogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlO1xuIl19

/***/ },
/* 68 */
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