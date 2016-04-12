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
	
	var _tableTableInput = __webpack_require__(1);
	
	var tableInput = _interopRequireWildcard(_tableTableInput);
	
	var _tableTextboxInput = __webpack_require__(2);
	
	var textboxInput = _interopRequireWildcard(_tableTextboxInput);
	
	var _tableConfiguration = __webpack_require__(5);
	
	var configuration = _interopRequireWildcard(_tableConfiguration);
	
	var _reactDom = __webpack_require__(7);
	
	var ReactDom = _interopRequireWildcard(_reactDom);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/// <reference path="../../../typings/main.d.ts" />
	__webpack_require__(8);
	__webpack_require__(12);
	__webpack_require__(14);
	
	var $ = __webpack_require__(15);
	var inputMethod = tableInput;
	var test = {
	    table: tableInput
	};
	
	var showError = function showError(status, errorText) {
	    $.notify({
	        icon: 'material-icons error',
	        title: 'Internal error occurs.',
	        message: status + errorText
	    }, {
	        type: 'danger',
	        template: '<div data-notify="container" class="alert">' + '<span class="material-icons">error</span>' + '<span data-notify="title">{1}</span>' + '<div data-notify="message">{2}</div>' + '</div>'
	    });
	};
	
	var switchInput = function switchInput(url, currentInputMethod, newInputMethod) {
	    return new Promise(function (resolve, reject) {
	        return $.ajax({
	            method: 'POST',
	            url: url,
	            data: {
	                dataType: currentInputMethod.getName(),
	                data: currentInputMethod.getData($)
	            },
	            dataType: 'html',
	            success: function success(result) {
	                inputMethod = newInputMethod;
	                $('#input').html(result);
	                newInputMethod.activate($);
	                resolve(result);
	            },
	            error: function error(jqHXR, textStatus, errorThrown) {
	                showError(textStatus, errorThrown);
	                reject(textStatus);
	            }
	        });
	    });
	};
	
	var activeteTab = function activeteTab(tab) {
	    $('.nav-tabs > li').removeClass('active');
	    $(tab).addClass('active');
	};
	
	$(document).ready(function () {
	    tableInput.activate($);
	    var $TABLE = $('#table');
	    var $shuffleBtn = $('#shuffle');
	    var $elementsPerPageValue = $('#elements-per-page-value');
	
	    $('.options li > a').click(function () {
	        var value = $(this).html();
	        $elementsPerPageValue.html(value);
	    });
	    var getElementsPerPage = function getElementsPerPage() {
	        return parseInt($elementsPerPageValue.html());
	    };
	
	    var getColumnNames = function getColumnNames() {
	        var result = [];
	        $('.column-name-input').each(function (number, element) {
	            var $element = $(element);
	            var name = '';
	            if ($element.val()) {
	                name = $element.val();
	            } else {
	                name = $element.attr('placeholder');
	            }
	
	            result.push({
	                name: name
	            });
	        });
	
	        return result;
	    };
	
	    $('#table-input-tab').click(function (event) {
	        switchInput('table//input/table', inputMethod, tableInput).then(function () {
	            return activeteTab(event.target.parentElement);
	        });
	    });
	
	    $('#table-input-textbox').click(function (event) {
	        switchInput('table/input/textbox', inputMethod, textboxInput).then(function () {
	            return activeteTab(event.target.parentElement);
	        });
	    });
	
	    $shuffleBtn.click(function () {
	        var dictionary = inputMethod.getData($);
	        var elementsPerPage = getElementsPerPage();
	        var columnNames = getColumnNames();
	        $.ajax({
	            method: 'POST',
	            url: 'table',
	            data: {
	                dictionary: dictionary,
	                elementsPerPage: elementsPerPage,
	                columnNames: columnNames
	            },
	            dataType: 'html',
	            success: function success(result) {
	                $('#result').html(result);
	            },
	            error: function error(jqHXR, textStatus, errorThrown) {
	                showError(textStatus, errorThrown);
	            }
	        });
	    });
	    ReactDom.render(React.createElement(configuration.columnConfiguration, null), document.getElementById('ReactTest'));
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvdGFibGUtaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFNQTs7SUFBWTs7QUFDWjs7SUFBWTs7QUFDWjs7SUFBWTs7QUFDWjs7SUFBWTs7Ozs7QUFSWixRQUFRLHdCQUFSO0FBQ0EsUUFBUSxzQkFBUjtBQUNBLFFBQVEsa0JBQVI7O0FBUUEsSUFBSSxJQUFJLFFBQVEsUUFBUixDQUFKO0FBQ0osSUFBSSxjQUFjLFVBQWQ7QUFDSixJQUFJLE9BQU87QUFDUCxXQUFPLFVBQVA7Q0FEQTs7QUFJSixJQUFJLFlBQVksU0FBWixTQUFZLENBQUMsTUFBRCxFQUFTLFNBQVQsRUFBdUI7QUFDbkMsTUFBRSxNQUFGLENBQVM7QUFDTCxjQUFNLHNCQUFOO0FBQ0EsZUFBTyx3QkFBUDtBQUNBLGlCQUFTLFNBQVMsU0FBVDtLQUhiLEVBSUc7QUFDQyxjQUFNLFFBQU47QUFDQSxrQkFBVSxnREFDTiwyQ0FETSxHQUVOLHNDQUZNLEdBR04sc0NBSE0sR0FJTixRQUpNO0tBTmQsRUFEbUM7Q0FBdkI7O0FBZWhCLElBQUksY0FBYyxTQUFkLFdBQWMsQ0FBQyxHQUFELEVBQU0sa0JBQU4sRUFBMEIsY0FBMUIsRUFBNkM7QUFDM0QsV0FBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWO2VBQ2YsRUFBRSxJQUFGLENBQU87QUFDSCxvQkFBUSxNQUFSO0FBQ0EsaUJBQUssR0FBTDtBQUNBLGtCQUFNO0FBQ0YsMEJBQVUsbUJBQW1CLE9BQW5CLEVBQVY7QUFDQSxzQkFBTSxtQkFBbUIsT0FBbkIsQ0FBMkIsQ0FBM0IsQ0FBTjthQUZKO0FBSUEsc0JBQVUsTUFBVjtBQUNBLHFCQUFTLGlCQUFDLE1BQUQsRUFBWTtBQUNqQiw4QkFBYyxjQUFkLENBRGlCO0FBRWpCLGtCQUFFLFFBQUYsRUFBWSxJQUFaLENBQWlCLE1BQWpCLEVBRmlCO0FBR2pCLCtCQUFlLFFBQWYsQ0FBd0IsQ0FBeEIsRUFIaUI7QUFJakIsd0JBQVEsTUFB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QWEsSUFBYixDQUFrQixNQUFsQixFQURzQjthQUFqQjtBQUdULG1CQUFPLGVBQUMsS0FBRCxFQUFRLFVBQVIsRUFBb0IsV0FBcEIsRUFBb0M7QUFDdkMsMEJBQVUsVUFBVixFQUFzQixXQUF0QixFQUR1QzthQUFwQztTQVpYLEVBSnlCO0tBQVgsQ0FBbEIsQ0EzQ29CO0FBZ0VwQixhQUFTLE1BQVQsQ0FBaUIsb0JBQUMsY0FBYyxtQkFBZixPQUFqQixFQUF3RCxTQUFTLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBeEQsRUFoRW9CO0NBQU4sQ0FBbEIiLCJmaWxlIjoidGFibGUtaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbWFuaWVrL3Byb2plY3Qvb3BlbnNoaWZ0L2VuZ2xpc2h0YWJsZSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL21haW4uZC50c1wiIC8+XG5yZXF1aXJlKCcuLi9jc3MvdGFibGUtaW5kZXguY3NzJyk7XG5yZXF1aXJlKCcuLi9jc3MvbWFpblN0eWxlLmNzcycpO1xucmVxdWlyZSgnYm9vdHN0cmFwLW5vdGlmeScpO1xuXG5cbmltcG9ydCAqIGFzIHRhYmxlSW5wdXQgZnJvbSAnLi90YWJsZS10YWJsZS1pbnB1dCc7XG5pbXBvcnQgKiBhcyB0ZXh0Ym94SW5wdXQgZnJvbSAnLi90YWJsZS10ZXh0Ym94LWlucHV0JztcbmltcG9ydCAqIGFzIGNvbmZpZ3VyYXRpb24gZnJvbSAnLi90YWJsZS1jb25maWd1cmF0aW9uLnJlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSc7XG5cbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG52YXIgaW5wdXRNZXRob2QgPSB0YWJsZUlucHV0O1xudmFyIHRlc3QgPSB7XG4gICAgdGFibGU6IHRhYmxlSW5wdXRcbn07XG5cbnZhciBzaG93RXJyb3IgPSAoc3RhdHVzLCBlcnJvclRleHQpID0+IHtcbiAgICAkLm5vdGlmeSh7XG4gICAgICAgIGljb246ICdtYXRlcmlhbC1pY29ucyBlcnJvcicsXG4gICAgICAgIHRpdGxlOiAnSW50ZXJuYWwgZXJyb3Igb2NjdXJzLicsXG4gICAgICAgIG1lc3NhZ2U6IHN0YXR1cyArIGVycm9yVGV4dFxuICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ2RhbmdlcicsXG4gICAgICAgIHRlbXBsYXRlOiAnPGRpdiBkYXRhLW5vdGlmeT1cImNvbnRhaW5lclwiIGNsYXNzPVwiYWxlcnRcIj4nICtcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3I8L3NwYW4+JyArXG4gICAgICAgICAgICAnPHNwYW4gZGF0YS1ub3RpZnk9XCJ0aXRsZVwiPnsxfTwvc3Bhbj4nICtcbiAgICAgICAgICAgICc8ZGl2IGRhdGEtbm90aWZ5PVwibWVzc2FnZVwiPnsyfTwvZGl2PicgK1xuICAgICAgICAgICAgJzwvZGl2PidcbiAgICB9KTtcbn07XG5cbnZhciBzd2l0Y2hJbnB1dCA9ICh1cmwsIGN1cnJlbnRJbnB1dE1ldGhvZCwgbmV3SW5wdXRNZXRob2QpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6IGN1cnJlbnRJbnB1dE1ldGhvZC5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgZGF0YTogY3VycmVudElucHV0TWV0aG9kLmdldERhdGEoJClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2h0bWwnLFxuICAgICAgICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlucHV0TWV0aG9kID0gbmV3SW5wdXRNZXRob2Q7XG4gICAgICAgICAgICAgICAgJCgnI2lucHV0JykuaHRtbChyZXN1bHQpO1xuICAgICAgICAgICAgICAgIG5ld0lucHV0TWV0aG9kLmFjdGl2YXRlKCQpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogKGpxSFhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgICAgICAgIHNob3dFcnJvcih0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgcmVqZWN0KHRleHRTdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG59O1xuXG52YXIgYWN0aXZldGVUYWIgPSAodGFiKSA9PiB7XG4gICAgJCgnLm5hdi10YWJzID4gbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCh0YWIpLmFkZENsYXNzKCdhY3RpdmUnKTtcbn07XG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbiAgICB0YWJsZUlucHV0LmFjdGl2YXRlKCQpO1xuICAgIHZhciAkVEFCTEUgPSAkKCcjdGFibGUnKTtcbiAgICB2YXIgJHNodWZmbGVCdG4gPSAkKCcjc2h1ZmZsZScpO1xuICAgIHZhciAkZWxlbWVudHNQZXJQYWdlVmFsdWUgPSAkKCcjZWxlbWVudHMtcGVyLXBhZ2UtdmFsdWUnKTtcblxuICAgICQoJy5vcHRpb25zIGxpID4gYScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSAkKHRoaXMpLmh0bWwoKTtcbiAgICAgICAgJGVsZW1lbnRzUGVyUGFnZVZhbHVlLmh0bWwodmFsdWUpO1xuICAgIH0pO1xuICAgIHZhciBnZXRFbGVtZW50c1BlclBhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KCRlbGVtZW50c1BlclBhZ2VWYWx1ZS5odG1sKCkpO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0Q29sdW1uTmFtZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICAkKCcuY29sdW1uLW5hbWUtaW5wdXQnKS5lYWNoKGZ1bmN0aW9uKG51bWJlciwgZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyICRlbGVtZW50ID0gJChlbGVtZW50KTtcbiAgICAgICAgICAgIHZhciBuYW1lID0gJyc7XG4gICAgICAgICAgICBpZiAoJGVsZW1lbnQudmFsKCkpIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gJGVsZW1lbnQudmFsKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5hbWUgPSAkZWxlbWVudC5hdHRyKCdwbGFjZWhvbGRlcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgICQoJyN0YWJsZS1pbnB1dC10YWInKS5jbGljaygoZXZlbnQpID0+IHtcbiAgICAgICAgc3dpdGNoSW5wdXQoJ3RhYmxlLy9pbnB1dC90YWJsZScsIGlucHV0TWV0aG9kLCB0YWJsZUlucHV0KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gYWN0aXZldGVUYWIoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQpKTtcbiAgICB9KTtcblxuICAgICQoJyN0YWJsZS1pbnB1dC10ZXh0Ym94JykuY2xpY2soKGV2ZW50KSA9PiB7XG4gICAgICAgIHN3aXRjaElucHV0KCd0YWJsZS9pbnB1dC90ZXh0Ym94JywgaW5wdXRNZXRob2QsIHRleHRib3hJbnB1dClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IGFjdGl2ZXRlVGFiKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50KSk7XG4gICAgfSk7XG5cbiAgICAkc2h1ZmZsZUJ0bi5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRpY3Rpb25hcnkgPSBpbnB1dE1ldGhvZC5nZXREYXRhKCQpO1xuICAgICAgICB2YXIgZWxlbWVudHNQZXJQYWdlID0gZ2V0RWxlbWVudHNQZXJQYWdlKCk7XG4gICAgICAgIHZhciBjb2x1bW5OYW1lcyA9IGdldENvbHVtbk5hbWVzKCk7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIHVybDogJ3RhYmxlJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBkaWN0aW9uYXJ5OiBkaWN0aW9uYXJ5LFxuICAgICAgICAgICAgICAgIGVsZW1lbnRzUGVyUGFnZTogZWxlbWVudHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgIGNvbHVtbk5hbWVzOiBjb2x1bW5OYW1lc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnaHRtbCcsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAkKCcjcmVzdWx0JykuaHRtbChyZXN1bHQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiAoanFIWFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yKHRleHRTdGF0dXMsIGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgUmVhY3REb20ucmVuZGVyKCA8Y29uZmlndXJhdGlvbi5jb2x1bW5Db25maWd1cmF0aW9uIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUmVhY3RUZXN0JykpO1xufSk7Il19

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getName = getName;
	exports.getData = getData;
	exports.activate = activate;
	/// <reference path="../../../typings/main.d.ts" />
	
	function getName() {
	    return 'table';
	}
	
	function getData($) {
	    var $rows = $('#table').find('tr:not(:hidden)');
	    var headers = [];
	    var data = [];
	
	    // Get the headers (add special header logic here)
	    $($rows.shift()).find('th:not(:empty)').each(function () {
	        headers.push($(this).text().toLowerCase());
	    });
	
	    // Turn all existing rows into a loopable array
	    $rows.each(function () {
	        var $td = $(this).find('td:not(:empty)');
	        var left = $td.first();
	        var right = $td.eq(1);
	        var h = {
	            left: left.text().trim(),
	            right: right.text().trim()
	        };
	
	        if (h.left !== '' || h.right !== '') {
	            data.push(h);
	        }
	    });
	
	    // Output the result
	    return data;
	}
	
	function activate($) {
	    var $table = $('#table');
	    var $rowTemplate = $table.find('tr.template');
	
	    $rowTemplate.find('.remove-row').click(function () {
	        $(this).parents('tr').detach();
	    });
	
	    $('.table-add').click(function () {
	        console.log('register click');
	        var $clone = $rowTemplate.clone(true).removeClass('template table-line');
	        $clone.addClass('items');
	        $table.find('table').append($clone);
	    });
	
	    $('.table-remove').click(function () {
	        $(this).parents('tr').detach();
	    });
	
	    // A few jQuery helpers for exporting only
	    $.fn.pop = [].pop;
	    $.fn.shift = [].shift;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvdGFibGUtdGFibGUtaW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFFZ0I7UUFJQTtRQTZCQTs7O0FBakNULFNBQVMsT0FBVCxHQUFtQjtBQUN0QixXQUFPLE9BQVAsQ0FEc0I7Q0FBbkI7O0FBSUEsU0FBUyxPQUFULENBQWlCLENBQWpCLEVBQW9CO0FBQ3ZCLFFBQUksUUFBUSxFQUFFLFFBQUYsRUFBWSxJQUFaLENBQWlCLGlCQUFqQixDQUFSLENBRG1CO0FBRXZCLFFBQUksVUFBVSxFQUFWLENBRm1CO0FBR3ZCLFFBQUksT0FBTyxFQUFQOzs7QUFIbUIsS0FNdkIsQ0FBRSxNQUFNLEtBQU4sRUFBRixFQUFpQixJQUFqQixDQUFzQixnQkFBdEIsRUFBd0MsSUFBeEMsQ0FBNkMsWUFBVztBQUNwRCxnQkFBUSxJQUFSLENBQWEsRUFBRSxJQUFGLEVBQVEsSUFBUixHQUFlLFdBQWYsRUFBYixFQURvRDtLQUFYLENBQTdDOzs7QUFOdUIsU0FXdkIsQ0FBTSxJQUFOLENBQVcsWUFBVztBQUNsQixZQUFJLE1BQU0sRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLGdCQUFiLENBQU4sQ0FEYztBQUVsQixZQUFJLE9BQU8sSUFBSSxLQUFKLEVBQVAsQ0FGYztBQUdsQixZQUFJLFFBQVEsSUFBSSxFQUFKLENBQU8sQ0FBUCxDQUFSLENBSGM7QUFJbEIsWUFBSSxJQUFJO0FBQ0osa0JBQU0sS0FBSyxJQUFMLEdBQVksSUFBWixFQUFOO0FBQ0EsbUJBQU8sTUFBTSxJQUFOLEdBQWEsSUFBYixFQUFQO1NBRkEsQ0FKYzs7QUFTbEIsWUFBSSxFQUFFLElBQUYsS0FBVyxFQUFYLElBQWlCLEVBQUUsS0FBRixLQUFZLEVBQVosRUFBZ0I7QUFDakMsaUJBQUssSUFBTCxDQUFVLENBQVYsRUFEaUM7U0FBckM7S0FUTyxDQUFYOzs7QUFYdUIsV0EwQmhCLElBQVAsQ0ExQnVCO0NBQXBCOztBQTZCQSxTQUFTLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUI7QUFDeEIsUUFBSSxTQUFTLEVBQUUsUUFBRixDQUFULENBRG9CO0FBRXhCLFFBQUksZUFBZSxPQUFPLElBQVAsQ0FBWSxhQUFaLENBQWYsQ0FGb0I7O0FBSXhCLGlCQUFhLElBQWIsQ0FBa0IsYUFBbEIsRUFBaUMsS0FBakMsQ0FBdUMsWUFBVztBQUM5QyxVQUFFLElBQUYsRUFBUSxPQUFSLENBQWdCLElBQWhCLEVBQXNCLE1BQXRCLEdBRDhDO0tBQVgsQ0FBdkMsQ0FKd0I7O0FBUXhCLE1BQUUsWUFBRixFQUFnQixLQUFoQixDQUFzQixZQUFXO0FBQzdCLGdCQUFRLEdBQVIsQ0FBWSxnQkFBWixFQUQ2QjtBQUU3QixZQUFJLFNBQVMsYUFBYSxLQUFiLENBQW1CLElBQW5CLEVBQXlCLFdBQXpCLENBQXFDLHFCQUFyQyxDQUFULENBRnlCO0FBRzdCLGVBQU8sUUFBUCxDQUFnQixPQUFoQixFQUg2QjtBQUk3QixlQUFPLElBQVAsQ0FBWSxPQUFaLEVBQXFCLE1BQXJCLENBQTRCLE1BQTVCLEVBSjZCO0tBQVgsQ0FBdEIsQ0FSd0I7O0FBZXhCLE1BQUUsZUFBRixFQUFtQixLQUFuQixDQUF5QixZQUFXO0FBQ2hDLFVBQUUsSUFBRixFQUFRLE9BQVIsQ0FBZ0IsSUFBaEIsRUFBc0IsTUFBdEIsR0FEZ0M7S0FBWCxDQUF6Qjs7O0FBZndCLEtBb0J4QixDQUFFLEVBQUYsQ0FBSyxHQUFMLEdBQVcsR0FBRyxHQUFILENBcEJhO0FBcUJ4QixNQUFFLEVBQUYsQ0FBSyxLQUFMLEdBQWEsR0FBRyxLQUFILENBckJXO0NBQXJCIiwiZmlsZSI6InRhYmxlLXRhYmxlLWlucHV0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21hbmllay9wcm9qZWN0L29wZW5zaGlmdC9lbmdsaXNodGFibGUiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9tYWluLmQudHNcIiAvPlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gJ3RhYmxlJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGEoJCkge1xuICAgIHZhciAkcm93cyA9ICQoJyN0YWJsZScpLmZpbmQoJ3RyOm5vdCg6aGlkZGVuKScpO1xuICAgIHZhciBoZWFkZXJzID0gW107XG4gICAgdmFyIGRhdGEgPSBbXTtcblxuICAgIC8vIEdldCB0aGUgaGVhZGVycyAoYWRkIHNwZWNpYWwgaGVhZGVyIGxvZ2ljIGhlcmUpXG4gICAgJCgkcm93cy5zaGlmdCgpKS5maW5kKCd0aDpub3QoOmVtcHR5KScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGhlYWRlcnMucHVzaCgkKHRoaXMpLnRleHQoKS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9KTtcblxuICAgIC8vIFR1cm4gYWxsIGV4aXN0aW5nIHJvd3MgaW50byBhIGxvb3BhYmxlIGFycmF5XG4gICAgJHJvd3MuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyICR0ZCA9ICQodGhpcykuZmluZCgndGQ6bm90KDplbXB0eSknKTtcbiAgICAgICAgdmFyIGxlZnQgPSAkdGQuZmlyc3QoKTtcbiAgICAgICAgdmFyIHJpZ2h0ID0gJHRkLmVxKDEpO1xuICAgICAgICB2YXIgaCA9IHtcbiAgICAgICAgICAgIGxlZnQ6IGxlZnQudGV4dCgpLnRyaW0oKSxcbiAgICAgICAgICAgIHJpZ2h0OiByaWdodC50ZXh0KCkudHJpbSgpXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGgubGVmdCAhPT0gJycgfHwgaC5yaWdodCAhPT0gJycpIHtcbiAgICAgICAgICAgIGRhdGEucHVzaChoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gT3V0cHV0IHRoZSByZXN1bHRcbiAgICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlKCQpIHtcbiAgICB2YXIgJHRhYmxlID0gJCgnI3RhYmxlJyk7XG4gICAgdmFyICRyb3dUZW1wbGF0ZSA9ICR0YWJsZS5maW5kKCd0ci50ZW1wbGF0ZScpO1xuXG4gICAgJHJvd1RlbXBsYXRlLmZpbmQoJy5yZW1vdmUtcm93JykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykucGFyZW50cygndHInKS5kZXRhY2goKTtcbiAgICB9KTtcblxuICAgICQoJy50YWJsZS1hZGQnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlZ2lzdGVyIGNsaWNrJyk7XG4gICAgICAgIHZhciAkY2xvbmUgPSAkcm93VGVtcGxhdGUuY2xvbmUodHJ1ZSkucmVtb3ZlQ2xhc3MoJ3RlbXBsYXRlIHRhYmxlLWxpbmUnKTtcbiAgICAgICAgJGNsb25lLmFkZENsYXNzKCdpdGVtcycpO1xuICAgICAgICAkdGFibGUuZmluZCgndGFibGUnKS5hcHBlbmQoJGNsb25lKTtcbiAgICB9KTtcblxuICAgICQoJy50YWJsZS1yZW1vdmUnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCd0cicpLmRldGFjaCgpO1xuICAgIH0pO1xuXG4gICAgLy8gQSBmZXcgalF1ZXJ5IGhlbHBlcnMgZm9yIGV4cG9ydGluZyBvbmx5XG4gICAgJC5mbi5wb3AgPSBbXS5wb3A7XG4gICAgJC5mbi5zaGlmdCA9IFtdLnNoaWZ0O1xufSJdfQ==

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getName = getName;
	exports.getData = getData;
	exports.activate = activate;
	
	var _modelTransformation = __webpack_require__(3);
	
	var modelTransformation = _interopRequireWildcard(_modelTransformation);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function getName() {
	    return 'textbox';
	}
	
	function getData($) {
	    var text = $('#texbox-input').val().trim();
	
	    return modelTransformation.toTable(text);
	}
	
	function activate($) {}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvdGFibGUtdGV4dGJveC1pbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztRQUVnQjtRQUlBO1FBTUE7O0FBWmhCOztJQUFZOzs7O0FBRUwsU0FBUyxPQUFULEdBQW1CO0FBQ3RCLFdBQU8sU0FBUCxDQURzQjtDQUFuQjs7QUFJQSxTQUFTLE9BQVQsQ0FBaUIsQ0FBakIsRUFBb0I7QUFDdkIsUUFBSSxPQUFPLEVBQUUsZUFBRixFQUFtQixHQUFuQixHQUF5QixJQUF6QixFQUFQLENBRG1COztBQUd2QixXQUFPLG9CQUFvQixPQUFwQixDQUE0QixJQUE1QixDQUFQLENBSHVCO0NBQXBCOztBQU1BLFNBQVMsUUFBVCxDQUFrQixDQUFsQixFQUFxQixFQUFyQiIsImZpbGUiOiJ0YWJsZS10ZXh0Ym94LWlucHV0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21hbmllay9wcm9qZWN0L29wZW5zaGlmdC9lbmdsaXNodGFibGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBtb2RlbFRyYW5zZm9ybWF0aW9uIGZyb20gJy4vLi4vLi4vVXRpbHMvbW9kZWwtdHJhbnNmb3JtYXRpb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gJ3RleHRib3gnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YSgkKSB7XG4gICAgbGV0IHRleHQgPSAkKCcjdGV4Ym94LWlucHV0JykudmFsKCkudHJpbSgpO1xuXG4gICAgcmV0dXJuIG1vZGVsVHJhbnNmb3JtYXRpb24udG9UYWJsZSh0ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlKCQpIHt9Il19

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.toTable = toTable;
	exports.toText = toText;
	
	var _objectInspections = __webpack_require__(4);
	
	var objectInspections = _interopRequireWildcard(_objectInspections);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var RowSeperator = '\n';
	var ColumnsSepartor = '\t';
	
	var isString = function isString(value) {
	    return typeof value === 'string' || value instanceof String;
	};
	
	var splitWithoutEmptyEntries = function splitWithoutEmptyEntries(array, separtor) {
	    return array.split(separtor).filter(function (v) {
	        return v;
	    });
	};
	var tryDeduceSeparator = function tryDeduceSeparator(value) {
	    var result = [];
	    var matches = value.match(/(\s+)/g);
	    matches.forEach(function (match) {
	        var isTab = match.indexOf('\t') !== -1;
	        result.push({
	            priority: isTab ? match.length * 4 : match.length,
	            value: match
	        });
	    });
	
	    result.sort(function (a, b) {
	        return a.priority < b.priority;
	    });
	
	    if (result.length === 0) {
	        throw 'Can not deduce separator';
	    }
	    var separtor = result[0];
	
	    return separtor.value;
	};
	
	var normalizeSpace = function normalizeSpace(value) {
	    return value.replace(/\s/g, ' ');
	};
	
	function toTable(input) {
	    if (objectInspections.isArray(input)) {
	        return input;
	    }
	
	    var result = [];
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = splitWithoutEmptyEntries(input, RowSeperator)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var row = _step.value;
	
	            var rowValue = row.trim();
	            if (rowValue === '') {
	                continue;
	            }
	            var separator = tryDeduceSeparator(rowValue);
	
	            var _splitWithoutEmptyEnt = splitWithoutEmptyEntries(row, separator);
	
	            var _splitWithoutEmptyEnt2 = _slicedToArray(_splitWithoutEmptyEnt, 2);
	
	            var left = _splitWithoutEmptyEnt2[0];
	            var right = _splitWithoutEmptyEnt2[1];
	
	            left = normalizeSpace(left);
	            right = normalizeSpace(right);
	
	            result.push({
	                left: left,
	                right: right
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
	
	    return result;
	}
	
	function toText(input) {
	    if (isString(input)) {
	        return input;
	    }
	
	    var result = '';
	
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;
	
	    try {
	        for (var _iterator2 = input[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var row = _step2.value;
	
	            result += row.left + ColumnsSepartor + row.right + RowSeperator;
	        }
	    } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	            }
	        } finally {
	            if (_didIteratorError2) {
	                throw _iteratorError2;
	            }
	        }
	    }
	
	    return result;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9VdGlscy9tb2RlbC10cmFuc2Zvcm1hdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQW9DZ0I7UUF5QkE7O0FBN0RoQjs7SUFBWTs7OztBQUNaLElBQU0sZUFBZSxJQUFmO0FBQ04sSUFBTSxrQkFBa0IsSUFBbEI7O0FBRU4sSUFBSSxXQUFXLFNBQVgsUUFBVyxDQUFDLEtBQUQsRUFBVztBQUN0QixXQUFRLE9BQU8sS0FBUCxLQUFpQixRQUFqQixJQUE2QixpQkFBaUIsTUFBakIsQ0FEZjtDQUFYOztBQUlmLElBQUksMkJBQTJCLFNBQTNCLHdCQUEyQixDQUFDLEtBQUQsRUFBUSxRQUFSLEVBQXFCO0FBQ2hELFdBQU8sTUFBTSxLQUFOLENBQVksUUFBWixFQUFzQixNQUF0QixDQUE2QjtlQUFLO0tBQUwsQ0FBcEMsQ0FEZ0Q7Q0FBckI7QUFHL0IsSUFBSSxxQkFBcUIsU0FBckIsa0JBQXFCLENBQUMsS0FBRCxFQUFXO0FBQ2hDLFFBQUksU0FBUyxFQUFULENBRDRCO0FBRWhDLFFBQUksVUFBVSxNQUFNLEtBQU4sQ0FBWSxRQUFaLENBQVYsQ0FGNEI7QUFHaEMsWUFBUSxPQUFSLENBQWdCLGlCQUFTO0FBQ3JCLFlBQUksUUFBUSxNQUFNLE9BQU4sQ0FBYyxJQUFkLE1BQXdCLENBQUMsQ0FBRCxDQURmO0FBRXJCLGVBQU8sSUFBUCxDQUFZO0FBQ1Isc0JBQVUsUUFBUSxNQUFNLE1BQU4sR0FBZSxDQUFmLEdBQW1CLE1BQU0sTUFBTjtBQUNyQyxtQkFBTyxLQUFQO1NBRkosRUFGcUI7S0FBVCxDQUFoQixDQUhnQzs7QUFXaEMsV0FBTyxJQUFQLENBQVksVUFBQyxDQUFELEVBQUksQ0FBSjtlQUFVLEVBQUUsUUFBRixHQUFhLEVBQUUsUUFBRjtLQUF2QixDQUFaLENBWGdDOztBQWFoQyxRQUFJLE9BQU8sTUFBUCxLQUFrQixDQUFsQixFQUFxQjtBQUNyQixjQUFNLDBCQUFOLENBRHFCO0tBQXpCO0FBR0EsUUFBSSxXQUFXLE9BQU8sQ0FBUCxDQUFYLENBaEI0Qjs7QUFrQmhDLFdBQU8sU0FBUyxLQUFULENBbEJ5QjtDQUFYOztBQXFCekIsSUFBSSxpQkFBaUIsU0FBakIsY0FBaUIsQ0FBQyxLQUFELEVBQVc7QUFDNUIsV0FBTyxNQUFNLE9BQU4sQ0FBYyxLQUFkLEVBQXFCLEdBQXJCLENBQVAsQ0FENEI7Q0FBWDs7QUFJZCxTQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0I7QUFDM0IsUUFBSSxrQkFBa0IsT0FBbEIsQ0FBMEIsS0FBMUIsQ0FBSixFQUFzQztBQUNsQyxlQUFPLEtBQVAsQ0FEa0M7S0FBdEM7O0FBSUEsUUFBSSxTQUFTLEVBQVQsQ0FMdUI7Ozs7OztBQU0zQiw2QkFBZ0IseUJBQXlCLEtBQXpCLEVBQWdDLFlBQWhDLDJCQUFoQixvR0FBK0Q7Z0JBQXRELGtCQUFzRDs7QUFDM0QsZ0JBQUksV0FBVyxJQUFJLElBQUosRUFBWCxDQUR1RDtBQUUzRCxnQkFBSSxhQUFhLEVBQWIsRUFBaUI7QUFDakIseUJBRGlCO2FBQXJCO0FBR0EsZ0JBQUksWUFBWSxtQkFBbUIsUUFBbkIsQ0FBWixDQUx1RDs7d0NBTXZDLHlCQUF5QixHQUF6QixFQUE4QixTQUE5QixFQU51Qzs7OztnQkFNdEQsaUNBTnNEO2dCQU1oRCxrQ0FOZ0Q7O0FBTzNELG1CQUFPLGVBQWUsSUFBZixDQUFQLENBUDJEO0FBUTNELG9CQUFRLGVBQWUsS0FBZixDQUFSLENBUjJEOztBQVUzRCxtQkFBTyxJQUFQLENBQVk7QUFDUixzQkFBTSxJQUFOO0FBQ0EsdUJBQU8sS0FBUDthQUZKLEVBVjJEO1NBQS9EOzs7Ozs7Ozs7Ozs7OztLQU4yQjs7QUFzQjNCLFdBQU8sTUFBUCxDQXRCMkI7Q0FBeEI7O0FBeUJBLFNBQVMsTUFBVCxDQUFnQixLQUFoQixFQUF1QjtBQUMxQixRQUFJLFNBQVMsS0FBVCxDQUFKLEVBQXFCO0FBQ2pCLGVBQU8sS0FBUCxDQURpQjtLQUFyQjs7QUFJQSxRQUFJLFNBQVMsRUFBVCxDQUxzQjs7Ozs7OztBQU8xQiw4QkFBZ0IsZ0NBQWhCLHdHQUF1QjtnQkFBZCxtQkFBYzs7QUFDbkIsc0JBQVUsSUFBSSxJQUFKLEdBQVcsZUFBWCxHQUE2QixJQUFJLEtBQUosR0FBWSxZQUF6QyxDQURTO1NBQXZCOzs7Ozs7Ozs7Ozs7OztLQVAwQjs7QUFXMUIsV0FBTyxNQUFQLENBWDBCO0NBQXZCIiwiZmlsZSI6Im1vZGVsLXRyYW5zZm9ybWF0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21hbmllay9wcm9qZWN0L29wZW5zaGlmdC9lbmdsaXNodGFibGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBvYmplY3RJbnNwZWN0aW9ucyBmcm9tICcuL29iamVjdEluc3BlY3Rpb25zJztcbmNvbnN0IFJvd1NlcGVyYXRvciA9ICdcXG4nO1xuY29uc3QgQ29sdW1uc1NlcGFydG9yID0gJ1xcdCc7XG5cbnZhciBpc1N0cmluZyA9ICh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB2YWx1ZSBpbnN0YW5jZW9mIFN0cmluZyk7XG59O1xuXG52YXIgc3BsaXRXaXRob3V0RW1wdHlFbnRyaWVzID0gKGFycmF5LCBzZXBhcnRvcikgPT4ge1xuICAgIHJldHVybiBhcnJheS5zcGxpdChzZXBhcnRvcikuZmlsdGVyKHYgPT4gdik7XG59O1xudmFyIHRyeURlZHVjZVNlcGFyYXRvciA9ICh2YWx1ZSkgPT4ge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBsZXQgbWF0Y2hlcyA9IHZhbHVlLm1hdGNoKC8oXFxzKykvZyk7XG4gICAgbWF0Y2hlcy5mb3JFYWNoKG1hdGNoID0+IHtcbiAgICAgICAgdmFyIGlzVGFiID0gbWF0Y2guaW5kZXhPZignXFx0JykgIT09IC0xO1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICBwcmlvcml0eTogaXNUYWIgPyBtYXRjaC5sZW5ndGggKiA0IDogbWF0Y2gubGVuZ3RoLFxuICAgICAgICAgICAgdmFsdWU6IG1hdGNoXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmVzdWx0LnNvcnQoKGEsIGIpID0+IGEucHJpb3JpdHkgPCBiLnByaW9yaXR5KTtcblxuICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93ICdDYW4gbm90IGRlZHVjZSBzZXBhcmF0b3InO1xuICAgIH1cbiAgICB2YXIgc2VwYXJ0b3IgPSByZXN1bHRbMF07XG5cbiAgICByZXR1cm4gc2VwYXJ0b3IudmFsdWU7XG59O1xuXG52YXIgbm9ybWFsaXplU3BhY2UgPSAodmFsdWUpID0+IHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvXFxzL2csICcgJyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdG9UYWJsZShpbnB1dCkge1xuICAgIGlmIChvYmplY3RJbnNwZWN0aW9ucy5pc0FycmF5KGlucHV0KSkge1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IHJvdyBvZiBzcGxpdFdpdGhvdXRFbXB0eUVudHJpZXMoaW5wdXQsIFJvd1NlcGVyYXRvcikpIHtcbiAgICAgICAgdmFyIHJvd1ZhbHVlID0gcm93LnRyaW0oKTtcbiAgICAgICAgaWYgKHJvd1ZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNlcGFyYXRvciA9IHRyeURlZHVjZVNlcGFyYXRvcihyb3dWYWx1ZSk7XG4gICAgICAgIHZhciBbbGVmdCwgcmlnaHRdID0gc3BsaXRXaXRob3V0RW1wdHlFbnRyaWVzKHJvdywgc2VwYXJhdG9yKTtcbiAgICAgICAgbGVmdCA9IG5vcm1hbGl6ZVNwYWNlKGxlZnQpO1xuICAgICAgICByaWdodCA9IG5vcm1hbGl6ZVNwYWNlKHJpZ2h0KTtcblxuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICAgICAgcmlnaHQ6IHJpZ2h0LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9UZXh0KGlucHV0KSB7XG4gICAgaWYgKGlzU3RyaW5nKGlucHV0KSkge1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gICAgZm9yIChsZXQgcm93IG9mIGlucHV0KSB7XG4gICAgICAgIHJlc3VsdCArPSByb3cubGVmdCArIENvbHVtbnNTZXBhcnRvciArIHJvdy5yaWdodCArIFJvd1NlcGVyYXRvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufSJdfQ==

/***/ },
/* 4 */
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.columnConfiguration = undefined;
	
	var _react = __webpack_require__(6);
	
	var React = _interopRequireWildcard(_react);
	
	var _objectInspections = __webpack_require__(4);
	
	var inspections = _interopRequireWildcard(_objectInspections);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	// <reference path="typings/main.d.ts" />
	
	
	var BtnWithOtions = React.createClass({
	    displayName: 'BtnWithOtions',
	    _onOptionChanged: function _onOptionChanged() {
	        console.log('Option changed');
	        if (props.onOptionChanged) {
	            props.onOptionChanged();
	        }
	    },
	    getDefaultOption: function getDefaultOption() {
	        if (this.props.selectedOption) {
	            return this.props.selectedOption;
	        }
	
	        if (inspections.isEmpty(this.props.options)) {
	            return '';
	        }
	
	        return props.options[0];
	    },
	    render: function render() {
	        var options = [];
	        for (var option in this.props.options) {
	            options.push(React.createElement(
	                'li',
	                null,
	                React.createElement(
	                    'a',
	                    { key: option.key, onClick: _onOptionChanged() },
	                    option.value
	                )
	            ));
	        };
	
	        return React.createElement(
	            'div',
	            { className: 'btn-group' },
	            React.createElement(
	                'a',
	                { type: 'button', className: 'btn btn-small dropdown-toggle', 'data-toggle': 'dropdown' },
	                React.createElement(
	                    'span',
	                    null,
	                    this.getDefaultOption()
	                ),
	                React.createElement('span', { className: 'caret' })
	            ),
	            React.createElement(
	                'ul',
	                { className: 'dropdown-menu' },
	                options
	            )
	        );
	    }
	});
	
	var columnConfiguration = exports.columnConfiguration = React.createClass({
	    displayName: 'columnConfiguration',
	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement('input', { type: 'text', name: 'first name', placeholder: 'Column name' }),
	            React.createElement(BtnWithOtions, { selectedOption: 'foobar', options: [1, 2, 4] })
	        );
	    }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvdGFibGUtY29uZmlndXJhdGlvbi5yZWFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0lBQVk7O0FBQ1o7O0lBQVk7Ozs7Ozs7QUFFWixJQUFJLGdCQUFnQixNQUFNLFdBQU4sQ0FBa0I7O0FBQ2xDLGtEQUFvQjtBQUNoQixnQkFBUSxHQUFSLENBQVksZ0JBQVosRUFEZ0I7QUFFaEIsWUFBSSxNQUFNLGVBQU4sRUFBdUI7QUFDdkIsa0JBQU0sZUFBTixHQUR1QjtTQUEzQjtLQUg4QjtBQVFsQyxrREFBbUI7QUFDZixZQUFHLEtBQUssS0FBTCxDQUFXLGNBQVgsRUFBMkI7QUFDMUIsbUJBQU8sS0FBSyxLQUFMLENBQVcsY0FBWCxDQURtQjtTQUE5Qjs7QUFJQSxZQUFJLFlBQVksT0FBWixDQUFvQixLQUFLLEtBQUwsQ0FBVyxPQUFYLENBQXhCLEVBQTZDO0FBQ3pDLG1CQUFPLEVBQVAsQ0FEeUM7U0FBN0M7O0FBSUEsZUFBTyxNQUFNLE9BQU4sQ0FBYyxDQUFkLENBQVAsQ0FUZTtLQVJlO0FBb0JsQyw4QkFBUztBQUNMLFlBQUksVUFBVSxFQUFWLENBREM7QUFFTCxhQUFJLElBQUksTUFBSixJQUFjLEtBQUssS0FBTCxDQUFXLE9BQVgsRUFBb0I7QUFDbEMsb0JBQVEsSUFBUixDQUFhOzs7Z0JBQUk7O3NCQUFHLEtBQUssT0FBTyxHQUFQLEVBQVksU0FBUyxrQkFBVCxFQUFwQjtvQkFBa0QsT0FBTyxLQUFQO2lCQUF0RDthQUFiLEVBRGtDO1NBQXRDLENBRks7O0FBTUwsZUFDQTs7Y0FBSyxXQUFVLFdBQVYsRUFBTDtZQUNJOztrQkFBRyxNQUFLLFFBQUwsRUFBYyxXQUFVLCtCQUFWLEVBQTBDLGVBQVksVUFBWixFQUEzRDtnQkFDSTs7O29CQUNLLEtBQUssZ0JBQUwsRUFETDtpQkFESjtnQkFJSSw4QkFBTSxXQUFVLE9BQVYsRUFBTixDQUpKO2FBREo7WUFPSTs7a0JBQUksV0FBVSxlQUFWLEVBQUo7Z0JBQ0ssT0FETDthQVBKO1NBREEsQ0FOSztLQXBCeUI7Q0FBbEIsQ0FBaEI7O0FBMENHLElBQUksb0RBQXNCLE1BQU0sV0FBTixDQUFrQjs7QUFDL0MsOEJBQVM7QUFDTCxlQUNJOzs7WUFDQSwrQkFBTyxNQUFLLE1BQUwsRUFBWSxNQUFLLFlBQUwsRUFBa0IsYUFBWSxhQUFaLEVBQXJDLENBREE7WUFFQSxvQkFBQyxhQUFELElBQWUsZ0JBQWdCLFFBQWhCLEVBQTBCLFNBQVMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBVCxFQUF6QyxDQUZBO1NBREosQ0FESztLQURzQztDQUFsQixDQUF0QiIsImZpbGUiOiJ0YWJsZS1jb25maWd1cmF0aW9uLnJlYWN0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21hbmllay9wcm9qZWN0L29wZW5zaGlmdC9lbmdsaXNodGFibGUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8cmVmZXJlbmNlIHBhdGg9XCJ0eXBpbmdzL21haW4uZC50c1wiIC8+XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBpbnNwZWN0aW9ucyBmcm9tICcuLy4uLy4uL1V0aWxzL29iamVjdEluc3BlY3Rpb25zLmpzJztcblxudmFyIEJ0bldpdGhPdGlvbnMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgX29uT3B0aW9uQ2hhbmdlZCgpICB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdPcHRpb24gY2hhbmdlZCcpO1xuICAgICAgICBpZiAocHJvcHMub25PcHRpb25DaGFuZ2VkKSB7XG4gICAgICAgICAgICBwcm9wcy5vbk9wdGlvbkNoYW5nZWQoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgZ2V0RGVmYXVsdE9wdGlvbigpIHtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zZWxlY3RlZE9wdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2VsZWN0ZWRPcHRpb247XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKCBpbnNwZWN0aW9ucy5pc0VtcHR5KHRoaXMucHJvcHMub3B0aW9ucykpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHByb3BzLm9wdGlvbnNbMF07XG4gICAgfSxcbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gW107XG4gICAgICAgIGZvcihsZXQgb3B0aW9uIGluIHRoaXMucHJvcHMub3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKDxsaT48YSBrZXk9e29wdGlvbi5rZXl9IG9uQ2xpY2s9e19vbk9wdGlvbkNoYW5nZWQoKX0+e29wdGlvbi52YWx1ZX08L2E+PC9saT4pO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J0bi1ncm91cCc+XG4gICAgICAgICAgICA8YSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbWFsbCBkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmdldERlZmF1bHRPcHRpb24oKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZXRcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgIHtvcHRpb25zfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59KTtcblxuZXhwb3J0IHZhciBjb2x1bW5Db25maWd1cmF0aW9uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuICggXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZpcnN0IG5hbWVcIiBwbGFjZWhvbGRlcj1cIkNvbHVtbiBuYW1lXCIvPlxuICAgICAgICAgICAgPEJ0bldpdGhPdGlvbnMgc2VsZWN0ZWRPcHRpb249eydmb29iYXInfSBvcHRpb25zPXtbMSwgMiwgNF19Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0pOyJdfQ==

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	* Project: Bootstrap Notify = v3.1.3
	* Description: Turns standard Bootstrap alerts into "Growl-like" notifications.
	* Author: Mouse0270 aka Robert McIntosh
	* License: MIT License
	* Website: https://github.com/mouse0270/bootstrap-growl
	*/
	(function (factory) {
		if (true) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(15)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports === 'object') {
			// Node/CommonJS
			factory(require('jquery'));
		} else {
			// Browser globals
			factory(jQuery);
		}
	}(function ($) {
		// Create the defaults once
		var defaults = {
				element: 'body',
				position: null,
				type: "info",
				allow_dismiss: true,
				newest_on_top: false,
				showProgressbar: false,
				placement: {
					from: "top",
					align: "right"
				},
				offset: 20,
				spacing: 10,
				z_index: 1031,
				delay: 5000,
				timer: 1000,
				url_target: '_blank',
				mouse_over: null,
				animate: {
					enter: 'animated fadeInDown',
					exit: 'animated fadeOutUp'
				},
				onShow: null,
				onShown: null,
				onClose: null,
				onClosed: null,
				icon_type: 'class',
				template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
			};
	
		String.format = function() {
			var str = arguments[0];
			for (var i = 1; i < arguments.length; i++) {
				str = str.replace(RegExp("\\{" + (i - 1) + "\\}", "gm"), arguments[i]);
			}
			return str;
		};
	
		function Notify ( element, content, options ) {
			// Setup Content of Notify
			var content = {
				content: {
					message: typeof content == 'object' ? content.message : content,
					title: content.title ? content.title : '',
					icon: content.icon ? content.icon : '',
					url: content.url ? content.url : '#',
					target: content.target ? content.target : '-'
				}
			};
	
			options = $.extend(true, {}, content, options);
			this.settings = $.extend(true, {}, defaults, options);
			this._defaults = defaults;
			if (this.settings.content.target == "-") {
				this.settings.content.target = this.settings.url_target;
			}
			this.animations = {
				start: 'webkitAnimationStart oanimationstart MSAnimationStart animationstart',
				end: 'webkitAnimationEnd oanimationend MSAnimationEnd animationend'
			}
	
			if (typeof this.settings.offset == 'number') {
			    this.settings.offset = {
			    	x: this.settings.offset,
			    	y: this.settings.offset
			    };
			}
	
			this.init();
		};
	
		$.extend(Notify.prototype, {
			init: function () {
				var self = this;
	
				this.buildNotify();
				if (this.settings.content.icon) {
					this.setIcon();
				}
				if (this.settings.content.url != "#") {
					this.styleURL();
				}
				this.styleDismiss();
				this.placement();
				this.bind();
	
				this.notify = {
					$ele: this.$ele,
					update: function(command, update) {
						var commands = {};
						if (typeof command == "string") {
							commands[command] = update;
						}else{
							commands = command;
						}
						for (var command in commands) {
							switch (command) {
								case "type":
									this.$ele.removeClass('alert-' + self.settings.type);
									this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass('progress-bar-' + self.settings.type);
									self.settings.type = commands[command];
									this.$ele.addClass('alert-' + commands[command]).find('[data-notify="progressbar"] > .progress-bar').addClass('progress-bar-' + commands[command]);
									break;
								case "icon":
									var $icon = this.$ele.find('[data-notify="icon"]');
									if (self.settings.icon_type.toLowerCase() == 'class') {
										$icon.removeClass(self.settings.content.icon).addClass(commands[command]);
									}else{
										if (!$icon.is('img')) {
											$icon.find('img');
										}
										$icon.attr('src', commands[command]);
									}
									break;
								case "progress":
									var newDelay = self.settings.delay - (self.settings.delay * (commands[command] / 100));
									this.$ele.data('notify-delay', newDelay);
									this.$ele.find('[data-notify="progressbar"] > div').attr('aria-valuenow', commands[command]).css('width', commands[command] + '%');
									break;
								case "url":
									this.$ele.find('[data-notify="url"]').attr('href', commands[command]);
									break;
								case "target":
									this.$ele.find('[data-notify="url"]').attr('target', commands[command]);
									break;
								default:
									this.$ele.find('[data-notify="' + command +'"]').html(commands[command]);
							};
						}
						var posX = this.$ele.outerHeight() + parseInt(self.settings.spacing) + parseInt(self.settings.offset.y);
						self.reposition(posX);
					},
					close: function() {
						self.close();
					}
				};
			},
			buildNotify: function () {
				var content = this.settings.content;
				this.$ele = $(String.format(this.settings.template, this.settings.type, content.title, content.message, content.url, content.target));
				this.$ele.attr('data-notify-position', this.settings.placement.from + '-' + this.settings.placement.align);
				if (!this.settings.allow_dismiss) {
					this.$ele.find('[data-notify="dismiss"]').css('display', 'none');
				}
				if ((this.settings.delay <= 0 && !this.settings.showProgressbar) || !this.settings.showProgressbar) {
					this.$ele.find('[data-notify="progressbar"]').remove();
				}
			},
			setIcon: function() {
				if (this.settings.icon_type.toLowerCase() == 'class') {
					this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon);
				}else{
					if (this.$ele.find('[data-notify="icon"]').is('img')) {
						this.$ele.find('[data-notify="icon"]').attr('src', this.settings.content.icon);
					}else{
						this.$ele.find('[data-notify="icon"]').append('<img src="'+this.settings.content.icon+'" alt="Notify Icon" />');
					}
				}
			},
			styleDismiss: function() {
				this.$ele.find('[data-notify="dismiss"]').css({
					position: 'absolute',
					right: '10px',
					top: '5px',
					zIndex: this.settings.z_index + 2
				});
			},
			styleURL: function() {
				this.$ele.find('[data-notify="url"]').css({
					backgroundImage: 'url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)',
					height: '100%',
					left: '0px',
					position: 'absolute',
					top: '0px',
					width: '100%',
					zIndex: this.settings.z_index + 1
				});
			},
			placement: function() {
				var self = this,
					offsetAmt = this.settings.offset.y,
					css = {
						display: 'inline-block',
						margin: '0px auto',
						position: this.settings.position ?  this.settings.position : (this.settings.element === 'body' ? 'fixed' : 'absolute'),
						transition: 'all .5s ease-in-out',
						zIndex: this.settings.z_index
					},
					hasAnimation = false,
					settings = this.settings;
	
				$('[data-notify-position="' + this.settings.placement.from + '-' + this.settings.placement.align + '"]:not([data-closing="true"])').each(function() {
					return offsetAmt = Math.max(offsetAmt, parseInt($(this).css(settings.placement.from)) +  parseInt($(this).outerHeight()) +  parseInt(settings.spacing));
				});
				if (this.settings.newest_on_top == true) {
					offsetAmt = this.settings.offset.y;
				}
				css[this.settings.placement.from] = offsetAmt+'px';
	
				switch (this.settings.placement.align) {
					case "left":
					case "right":
						css[this.settings.placement.align] = this.settings.offset.x+'px';
						break;
					case "center":
						css.left = 0;
						css.right = 0;
						break;
				}
				this.$ele.css(css).addClass(this.settings.animate.enter);
				$.each(Array('webkit-', 'moz-', 'o-', 'ms-', ''), function(index, prefix) {
					self.$ele[0].style[prefix+'AnimationIterationCount'] = 1;
				});
	
				$(this.settings.element).append(this.$ele);
	
				if (this.settings.newest_on_top == true) {
					offsetAmt = (parseInt(offsetAmt)+parseInt(this.settings.spacing)) + this.$ele.outerHeight();
					this.reposition(offsetAmt);
				}
	
				if ($.isFunction(self.settings.onShow)) {
					self.settings.onShow.call(this.$ele);
				}
	
				this.$ele.one(this.animations.start, function(event) {
					hasAnimation = true;
				}).one(this.animations.end, function(event) {
					if ($.isFunction(self.settings.onShown)) {
						self.settings.onShown.call(this);
					}
				});
	
				setTimeout(function() {
					if (!hasAnimation) {
						if ($.isFunction(self.settings.onShown)) {
							self.settings.onShown.call(this);
						}
					}
				}, 600);
			},
			bind: function() {
				var self = this;
	
				this.$ele.find('[data-notify="dismiss"]').on('click', function() {
					self.close();
				})
	
				this.$ele.mouseover(function(e) {
					$(this).data('data-hover', "true");
				}).mouseout(function(e) {
					$(this).data('data-hover', "false");
				});
				this.$ele.data('data-hover', "false");
	
				if (this.settings.delay > 0) {
					self.$ele.data('notify-delay', self.settings.delay);
					var timer = setInterval(function() {
						var delay = parseInt(self.$ele.data('notify-delay')) - self.settings.timer;
						if ((self.$ele.data('data-hover') === 'false' && self.settings.mouse_over == "pause") || self.settings.mouse_over != "pause") {
							var percent = ((self.settings.delay - delay) / self.settings.delay) * 100;
							self.$ele.data('notify-delay', delay);
							self.$ele.find('[data-notify="progressbar"] > div').attr('aria-valuenow', percent).css('width', percent + '%');
						}
						if (delay <= -(self.settings.timer)) {
							clearInterval(timer);
							self.close();
						}
					}, self.settings.timer);
				}
			},
			close: function() {
				var self = this,
					$successors = null,
					posX = parseInt(this.$ele.css(this.settings.placement.from)),
					hasAnimation = false;
	
				this.$ele.data('closing', 'true').addClass(this.settings.animate.exit);
				self.reposition(posX);
	
				if ($.isFunction(self.settings.onClose)) {
					self.settings.onClose.call(this.$ele);
				}
	
				this.$ele.one(this.animations.start, function(event) {
					hasAnimation = true;
				}).one(this.animations.end, function(event) {
					$(this).remove();
					if ($.isFunction(self.settings.onClosed)) {
						self.settings.onClosed.call(this);
					}
				});
	
				setTimeout(function() {
					if (!hasAnimation) {
						self.$ele.remove();
						if (self.settings.onClosed) {
							self.settings.onClosed(self.$ele);
						}
					}
				}, 600);
			},
			reposition: function(posX) {
				var self = this,
					notifies = '[data-notify-position="' + this.settings.placement.from + '-' + this.settings.placement.align + '"]:not([data-closing="true"])',
					$elements = this.$ele.nextAll(notifies);
				if (this.settings.newest_on_top == true) {
					$elements = this.$ele.prevAll(notifies);
				}
				$elements.each(function() {
					$(this).css(self.settings.placement.from, posX);
					posX = (parseInt(posX)+parseInt(self.settings.spacing)) + $(this).outerHeight();
				});
			}
		});
	
		$.notify = function ( content, options ) {
			var plugin = new Notify( this, content, options );
			return plugin.notify;
		};
		$.notifyDefaults = function( options ) {
			defaults = $.extend(true, {}, defaults, options);
			return defaults;
		};
		$.notifyClose = function( command ) {
			if (typeof command === "undefined" || command == "all") {
				$('[data-notify]').find('[data-notify="dismiss"]').trigger('click');
			}else{
				$('[data-notify-position="'+command+'"]').find('[data-notify="dismiss"]').trigger('click');
			}
		};
	
	}));


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ }
/******/ ]);
//# sourceMappingURL=table-index.bundle.js.map