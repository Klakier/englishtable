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
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/// <reference path="../../../typings/main.d.ts" />
	__webpack_require__(5);
	__webpack_require__(9);
	__webpack_require__(11);
	
	var $ = __webpack_require__(12);
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
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvdGFibGUtaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQTs7SUFBWTs7QUFDWjs7SUFBWTs7Ozs7QUFMWixRQUFRLHdCQUFSO0FBQ0EsUUFBUSxzQkFBUjtBQUNBLFFBQVEsa0JBQVI7O0FBS0EsSUFBSSxJQUFJLFFBQVEsUUFBUixDQUFKO0FBQ0osSUFBSSxjQUFjLFVBQWQ7QUFDSixJQUFJLE9BQU87QUFDUCxXQUFPLFVBQVA7Q0FEQTs7QUFJSixJQUFJLFlBQVksU0FBWixTQUFZLENBQUMsTUFBRCxFQUFTLFNBQVQsRUFBdUI7QUFDbkMsTUFBRSxNQUFGLENBQVM7QUFDTCxjQUFNLHNCQUFOO0FBQ0EsZUFBTyx3QkFBUDtBQUNBLGlCQUFTLFNBQVMsU0FBVDtLQUhiLEVBSUc7QUFDQyxjQUFNLFFBQU47QUFDQSxrQkFBVSxnREFDTiwyQ0FETSxHQUVOLHNDQUZNLEdBR04sc0NBSE0sR0FJTixRQUpNO0tBTmQsRUFEbUM7Q0FBdkI7O0FBZWhCLElBQUksY0FBYyxTQUFkLFdBQWMsQ0FBQyxHQUFELEVBQU0sa0JBQU4sRUFBMEIsY0FBMUIsRUFBNkM7QUFDM0QsV0FBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWO2VBQ2YsRUFBRSxJQUFGLENBQU87QUFDSCxvQkFBUSxNQUFSO0FBQ0EsaUJBQUssR0FBTDtBQUNBLGtCQUFNO0FBQ0YsMEJBQVUsbUJBQW1CLE9BQW5CLEVBQVY7QUFDQSxzQkFBTSxtQkFBbUIsT0FBbkIsQ0FBMkIsQ0FBM0IsQ0FBTjthQUZKO0FBSUEsc0JBQVUsTUFBVjtBQUNBLHFCQUFTLGlCQUFDLE1BQUQsRUFBWTtBQUNqQiw4QkFBYyxjQUFkLENBRGlCO0FBRWpCLGtCQUFFLFFBQUYsRUFBWSxJQUFaLENBQWlCLE1BQWpCLEVBRmlCO0FBR2pCLCtCQUFlLFFBQWYsQ0FBd0IsQ0FBeEIsRUFIaUI7QUFJakIsd0JBQVEsTUFBUixFQUppQjthQUFaO0FBTVQsbUJBQU8s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QjthQUFqQjtBQUdULG1CQUFPLGVBQUMsS0FBRCxFQUFRLFVBQVIsRUFBb0IsV0FBcEIsRUFBb0M7QUFDdkMsMEJBQVUsVUFBVixFQUFzQixXQUF0QixFQUR1QzthQUFwQztTQVpYLEVBSnlCO0tBQVgsQ0FBbEIsQ0EzQ29CO0NBQU4sQ0FBbEIiLCJmaWxlIjoidGFibGUtaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbWFuaWVrL1Byb2plY3RzL29wZW5zaGlmdC9lbmdsaXNodGFibGUiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9tYWluLmQudHNcIiAvPlxucmVxdWlyZSgnLi4vY3NzL3RhYmxlLWluZGV4LmNzcycpO1xucmVxdWlyZSgnLi4vY3NzL21haW5TdHlsZS5jc3MnKTtcbnJlcXVpcmUoJ2Jvb3RzdHJhcC1ub3RpZnknKTtcblxuaW1wb3J0ICogYXMgdGFibGVJbnB1dCBmcm9tICcuL3RhYmxlLXRhYmxlLWlucHV0JztcbmltcG9ydCAqIGFzIHRleHRib3hJbnB1dCBmcm9tICcuL3RhYmxlLXRleHRib3gtaW5wdXQnO1xuXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xudmFyIGlucHV0TWV0aG9kID0gdGFibGVJbnB1dDtcbnZhciB0ZXN0ID0ge1xuICAgIHRhYmxlOiB0YWJsZUlucHV0XG59O1xuXG52YXIgc2hvd0Vycm9yID0gKHN0YXR1cywgZXJyb3JUZXh0KSA9PiB7XG4gICAgJC5ub3RpZnkoe1xuICAgICAgICBpY29uOiAnbWF0ZXJpYWwtaWNvbnMgZXJyb3InLFxuICAgICAgICB0aXRsZTogJ0ludGVybmFsIGVycm9yIG9jY3Vycy4nLFxuICAgICAgICBtZXNzYWdlOiBzdGF0dXMgKyBlcnJvclRleHRcbiAgICB9LCB7XG4gICAgICAgIHR5cGU6ICdkYW5nZXInLFxuICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgZGF0YS1ub3RpZnk9XCJjb250YWluZXJcIiBjbGFzcz1cImFsZXJ0XCI+JyArXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yPC9zcGFuPicgK1xuICAgICAgICAgICAgJzxzcGFuIGRhdGEtbm90aWZ5PVwidGl0bGVcIj57MX08L3NwYW4+JyArXG4gICAgICAgICAgICAnPGRpdiBkYXRhLW5vdGlmeT1cIm1lc3NhZ2VcIj57Mn08L2Rpdj4nICtcbiAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgfSk7XG59O1xuXG52YXIgc3dpdGNoSW5wdXQgPSAodXJsLCBjdXJyZW50SW5wdXRNZXRob2QsIG5ld0lucHV0TWV0aG9kKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBjdXJyZW50SW5wdXRNZXRob2QuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIGRhdGE6IGN1cnJlbnRJbnB1dE1ldGhvZC5nZXREYXRhKCQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdodG1sJyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpbnB1dE1ldGhvZCA9IG5ld0lucHV0TWV0aG9kO1xuICAgICAgICAgICAgICAgICQoJyNpbnB1dCcpLmh0bWwocmVzdWx0KTtcbiAgICAgICAgICAgICAgICBuZXdJbnB1dE1ldGhvZC5hY3RpdmF0ZSgkKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IChqcUhYUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgICAgICAgICBzaG93RXJyb3IodGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgIHJlamVjdCh0ZXh0U3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xufTtcblxudmFyIGFjdGl2ZXRlVGFiID0gKHRhYikgPT4ge1xuICAgICQoJy5uYXYtdGFicyA+IGxpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQodGFiKS5hZGRDbGFzcygnYWN0aXZlJyk7XG59O1xuXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG4gICAgdGFibGVJbnB1dC5hY3RpdmF0ZSgkKTtcbiAgICB2YXIgJFRBQkxFID0gJCgnI3RhYmxlJyk7XG4gICAgdmFyICRzaHVmZmxlQnRuID0gJCgnI3NodWZmbGUnKTtcbiAgICB2YXIgJGVsZW1lbnRzUGVyUGFnZVZhbHVlID0gJCgnI2VsZW1lbnRzLXBlci1wYWdlLXZhbHVlJyk7XG5cbiAgICAkKCcub3B0aW9ucyBsaSA+IGEnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gJCh0aGlzKS5odG1sKCk7XG4gICAgICAgICRlbGVtZW50c1BlclBhZ2VWYWx1ZS5odG1sKHZhbHVlKTtcbiAgICB9KTtcbiAgICB2YXIgZ2V0RWxlbWVudHNQZXJQYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCgkZWxlbWVudHNQZXJQYWdlVmFsdWUuaHRtbCgpKTtcbiAgICB9O1xuXG4gICAgdmFyIGdldENvbHVtbk5hbWVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgJCgnLmNvbHVtbi1uYW1lLWlucHV0JykuZWFjaChmdW5jdGlvbihudW1iZXIsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciAkZWxlbWVudCA9ICQoZWxlbWVudCk7XG4gICAgICAgICAgICB2YXIgbmFtZSA9ICcnO1xuICAgICAgICAgICAgaWYgKCRlbGVtZW50LnZhbCgpKSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9ICRlbGVtZW50LnZhbCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gJGVsZW1lbnQuYXR0cigncGxhY2Vob2xkZXInKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICAkKCcjdGFibGUtaW5wdXQtdGFiJykuY2xpY2soKGV2ZW50KSA9PiB7XG4gICAgICAgIHN3aXRjaElucHV0KCd0YWJsZS8vaW5wdXQvdGFibGUnLCBpbnB1dE1ldGhvZCwgdGFibGVJbnB1dClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IGFjdGl2ZXRlVGFiKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50KSk7XG4gICAgfSk7XG5cbiAgICAkKCcjdGFibGUtaW5wdXQtdGV4dGJveCcpLmNsaWNrKChldmVudCkgPT4ge1xuICAgICAgICBzd2l0Y2hJbnB1dCgndGFibGUvaW5wdXQvdGV4dGJveCcsIGlucHV0TWV0aG9kLCB0ZXh0Ym94SW5wdXQpXG4gICAgICAgICAgICAudGhlbigoKSA9PiBhY3RpdmV0ZVRhYihldmVudC50YXJnZXQucGFyZW50RWxlbWVudCkpO1xuICAgIH0pO1xuXG4gICAgJHNodWZmbGVCdG4uY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkaWN0aW9uYXJ5ID0gaW5wdXRNZXRob2QuZ2V0RGF0YSgkKTtcbiAgICAgICAgdmFyIGVsZW1lbnRzUGVyUGFnZSA9IGdldEVsZW1lbnRzUGVyUGFnZSgpO1xuICAgICAgICB2YXIgY29sdW1uTmFtZXMgPSBnZXRDb2x1bW5OYW1lcygpO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICB1cmw6ICd0YWJsZScsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgZGljdGlvbmFyeTogZGljdGlvbmFyeSxcbiAgICAgICAgICAgICAgICBlbGVtZW50c1BlclBhZ2U6IGVsZW1lbnRzUGVyUGFnZSxcbiAgICAgICAgICAgICAgICBjb2x1bW5OYW1lczogY29sdW1uTmFtZXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2h0bWwnLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgJCgnI3Jlc3VsdCcpLmh0bWwocmVzdWx0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogKGpxSFhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgICAgICAgIHNob3dFcnJvcih0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvdGFibGUtdGFibGUtaW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFFZ0I7UUFJQTtRQTZCQTs7O0FBakNULFNBQVMsT0FBVCxHQUFtQjtBQUN0QixXQUFPLE9BQVAsQ0FEc0I7Q0FBbkI7O0FBSUEsU0FBUyxPQUFULENBQWlCLENBQWpCLEVBQW9CO0FBQ3ZCLFFBQUksUUFBUSxFQUFFLFFBQUYsRUFBWSxJQUFaLENBQWlCLGlCQUFqQixDQUFSLENBRG1CO0FBRXZCLFFBQUksVUFBVSxFQUFWLENBRm1CO0FBR3ZCLFFBQUksT0FBTyxFQUFQOzs7QUFIbUIsS0FNdkIsQ0FBRSxNQUFNLEtBQU4sRUFBRixFQUFpQixJQUFqQixDQUFzQixnQkFBdEIsRUFBd0MsSUFBeEMsQ0FBNkMsWUFBVztBQUNwRCxnQkFBUSxJQUFSLENBQWEsRUFBRSxJQUFGLEVBQVEsSUFBUixHQUFlLFdBQWYsRUFBYixFQURvRDtLQUFYLENBQTdDOzs7QUFOdUIsU0FXdkIsQ0FBTSxJQUFOLENBQVcsWUFBVztBQUNsQixZQUFJLE1BQU0sRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLGdCQUFiLENBQU4sQ0FEYztBQUVsQixZQUFJLE9BQU8sSUFBSSxLQUFKLEVBQVAsQ0FGYztBQUdsQixZQUFJLFFBQVEsSUFBSSxFQUFKLENBQU8sQ0FBUCxDQUFSLENBSGM7QUFJbEIsWUFBSSxJQUFJO0FBQ0osa0JBQU0sS0FBSyxJQUFMLEdBQVksSUFBWixFQUFOO0FBQ0EsbUJBQU8sTUFBTSxJQUFOLEdBQWEsSUFBYixFQUFQO1NBRkEsQ0FKYzs7QUFTbEIsWUFBSSxFQUFFLElBQUYsS0FBVyxFQUFYLElBQWlCLEVBQUUsS0FBRixLQUFZLEVBQVosRUFBZ0I7QUFDakMsaUJBQUssSUFBTCxDQUFVLENBQVYsRUFEaUM7U0FBckM7S0FUTyxDQUFYOzs7QUFYdUIsV0EwQmhCLElBQVAsQ0ExQnVCO0NBQXBCOztBQTZCQSxTQUFTLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUI7QUFDeEIsUUFBSSxTQUFTLEVBQUUsUUFBRixDQUFULENBRG9CO0FBRXhCLFFBQUksZUFBZSxPQUFPLElBQVAsQ0FBWSxhQUFaLENBQWYsQ0FGb0I7O0FBSXhCLGlCQUFhLElBQWIsQ0FBa0IsYUFBbEIsRUFBaUMsS0FBakMsQ0FBdUMsWUFBVztBQUM5QyxVQUFFLElBQUYsRUFBUSxPQUFSLENBQWdCLElBQWhCLEVBQXNCLE1BQXRCLEdBRDhDO0tBQVgsQ0FBdkMsQ0FKd0I7O0FBUXhCLE1BQUUsWUFBRixFQUFnQixLQUFoQixDQUFzQixZQUFXO0FBQzdCLGdCQUFRLEdBQVIsQ0FBWSxnQkFBWixFQUQ2QjtBQUU3QixZQUFJLFNBQVMsYUFBYSxLQUFiLENBQW1CLElBQW5CLEVBQXlCLFdBQXpCLENBQXFDLHFCQUFyQyxDQUFULENBRnlCO0FBRzdCLGVBQU8sUUFBUCxDQUFnQixPQUFoQixFQUg2QjtBQUk3QixlQUFPLElBQVAsQ0FBWSxPQUFaLEVBQXFCLE1BQXJCLENBQTRCLE1BQTVCLEVBSjZCO0tBQVgsQ0FBdEIsQ0FSd0I7O0FBZXhCLE1BQUUsZUFBRixFQUFtQixLQUFuQixDQUF5QixZQUFXO0FBQ2hDLFVBQUUsSUFBRixFQUFRLE9BQVIsQ0FBZ0IsSUFBaEIsRUFBc0IsTUFBdEIsR0FEZ0M7S0FBWCxDQUF6Qjs7O0FBZndCLEtBb0J4QixDQUFFLEVBQUYsQ0FBSyxHQUFMLEdBQVcsR0FBRyxHQUFILENBcEJhO0FBcUJ4QixNQUFFLEVBQUYsQ0FBSyxLQUFMLEdBQWEsR0FBRyxLQUFILENBckJXO0NBQXJCIiwiZmlsZSI6InRhYmxlLXRhYmxlLWlucHV0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21hbmllay9Qcm9qZWN0cy9vcGVuc2hpZnQvZW5nbGlzaHRhYmxlIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuICd0YWJsZSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhKCQpIHtcbiAgICB2YXIgJHJvd3MgPSAkKCcjdGFibGUnKS5maW5kKCd0cjpub3QoOmhpZGRlbiknKTtcbiAgICB2YXIgaGVhZGVycyA9IFtdO1xuICAgIHZhciBkYXRhID0gW107XG5cbiAgICAvLyBHZXQgdGhlIGhlYWRlcnMgKGFkZCBzcGVjaWFsIGhlYWRlciBsb2dpYyBoZXJlKVxuICAgICQoJHJvd3Muc2hpZnQoKSkuZmluZCgndGg6bm90KDplbXB0eSknKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBoZWFkZXJzLnB1c2goJCh0aGlzKS50ZXh0KCkudG9Mb3dlckNhc2UoKSk7XG4gICAgfSk7XG5cbiAgICAvLyBUdXJuIGFsbCBleGlzdGluZyByb3dzIGludG8gYSBsb29wYWJsZSBhcnJheVxuICAgICRyb3dzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciAkdGQgPSAkKHRoaXMpLmZpbmQoJ3RkOm5vdCg6ZW1wdHkpJyk7XG4gICAgICAgIHZhciBsZWZ0ID0gJHRkLmZpcnN0KCk7XG4gICAgICAgIHZhciByaWdodCA9ICR0ZC5lcSgxKTtcbiAgICAgICAgdmFyIGggPSB7XG4gICAgICAgICAgICBsZWZ0OiBsZWZ0LnRleHQoKS50cmltKCksXG4gICAgICAgICAgICByaWdodDogcmlnaHQudGV4dCgpLnRyaW0oKVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChoLmxlZnQgIT09ICcnIHx8IGgucmlnaHQgIT09ICcnKSB7XG4gICAgICAgICAgICBkYXRhLnB1c2goaCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIE91dHB1dCB0aGUgcmVzdWx0XG4gICAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZSgkKSB7XG4gICAgdmFyICR0YWJsZSA9ICQoJyN0YWJsZScpO1xuICAgIHZhciAkcm93VGVtcGxhdGUgPSAkdGFibGUuZmluZCgndHIudGVtcGxhdGUnKTtcblxuICAgICRyb3dUZW1wbGF0ZS5maW5kKCcucmVtb3ZlLXJvdycpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudHMoJ3RyJykuZGV0YWNoKCk7XG4gICAgfSk7XG5cbiAgICAkKCcudGFibGUtYWRkJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWdpc3RlciBjbGljaycpO1xuICAgICAgICB2YXIgJGNsb25lID0gJHJvd1RlbXBsYXRlLmNsb25lKHRydWUpLnJlbW92ZUNsYXNzKCd0ZW1wbGF0ZSB0YWJsZS1saW5lJyk7XG4gICAgICAgICRjbG9uZS5hZGRDbGFzcygnaXRlbXMnKTtcbiAgICAgICAgJHRhYmxlLmZpbmQoJ3RhYmxlJykuYXBwZW5kKCRjbG9uZSk7XG4gICAgfSk7XG5cbiAgICAkKCcudGFibGUtcmVtb3ZlJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykucGFyZW50cygndHInKS5kZXRhY2goKTtcbiAgICB9KTtcblxuICAgIC8vIEEgZmV3IGpRdWVyeSBoZWxwZXJzIGZvciBleHBvcnRpbmcgb25seVxuICAgICQuZm4ucG9wID0gW10ucG9wO1xuICAgICQuZm4uc2hpZnQgPSBbXS5zaGlmdDtcbn0iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wdWJsaWMvanMvdGFibGUtdGV4dGJveC1pbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztRQUVnQjtRQUlBO1FBTUE7O0FBWmhCOztJQUFZOzs7O0FBRUwsU0FBUyxPQUFULEdBQW1CO0FBQ3RCLFdBQU8sU0FBUCxDQURzQjtDQUFuQjs7QUFJQSxTQUFTLE9BQVQsQ0FBaUIsQ0FBakIsRUFBb0I7QUFDdkIsUUFBSSxPQUFPLEVBQUUsZUFBRixFQUFtQixHQUFuQixHQUF5QixJQUF6QixFQUFQLENBRG1COztBQUd2QixXQUFPLG9CQUFvQixPQUFwQixDQUE0QixJQUE1QixDQUFQLENBSHVCO0NBQXBCOztBQU1BLFNBQVMsUUFBVCxDQUFrQixDQUFsQixFQUFxQixFQUFyQiIsImZpbGUiOiJ0YWJsZS10ZXh0Ym94LWlucHV0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21hbmllay9Qcm9qZWN0cy9vcGVuc2hpZnQvZW5nbGlzaHRhYmxlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbW9kZWxUcmFuc2Zvcm1hdGlvbiBmcm9tICcuLy4uLy4uL1V0aWxzL21vZGVsLXRyYW5zZm9ybWF0aW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuICd0ZXh0Ym94Jztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGEoJCkge1xuICAgIGxldCB0ZXh0ID0gJCgnI3RleGJveC1pbnB1dCcpLnZhbCgpLnRyaW0oKTtcblxuICAgIHJldHVybiBtb2RlbFRyYW5zZm9ybWF0aW9uLnRvVGFibGUodGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZSgkKSB7fSJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9VdGlscy9tb2RlbC10cmFuc2Zvcm1hdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQW9DZ0I7UUF5QkE7O0FBN0RoQjs7SUFBWTs7OztBQUNaLElBQU0sZUFBZSxJQUFmO0FBQ04sSUFBTSxrQkFBa0IsSUFBbEI7O0FBRU4sSUFBSSxXQUFXLFNBQVgsUUFBVyxDQUFDLEtBQUQsRUFBVztBQUN0QixXQUFRLE9BQU8sS0FBUCxLQUFpQixRQUFqQixJQUE2QixpQkFBaUIsTUFBakIsQ0FEZjtDQUFYOztBQUlmLElBQUksMkJBQTJCLFNBQTNCLHdCQUEyQixDQUFDLEtBQUQsRUFBUSxRQUFSLEVBQXFCO0FBQ2hELFdBQU8sTUFBTSxLQUFOLENBQVksUUFBWixFQUFzQixNQUF0QixDQUE2QjtlQUFLO0tBQUwsQ0FBcEMsQ0FEZ0Q7Q0FBckI7QUFHL0IsSUFBSSxxQkFBcUIsU0FBckIsa0JBQXFCLENBQUMsS0FBRCxFQUFXO0FBQ2hDLFFBQUksU0FBUyxFQUFULENBRDRCO0FBRWhDLFFBQUksVUFBVSxNQUFNLEtBQU4sQ0FBWSxRQUFaLENBQVYsQ0FGNEI7QUFHaEMsWUFBUSxPQUFSLENBQWdCLGlCQUFTO0FBQ3JCLFlBQUksUUFBUSxNQUFNLE9BQU4sQ0FBYyxJQUFkLE1BQXdCLENBQUMsQ0FBRCxDQURmO0FBRXJCLGVBQU8sSUFBUCxDQUFZO0FBQ1Isc0JBQVUsUUFBUSxNQUFNLE1BQU4sR0FBZSxDQUFmLEdBQW1CLE1BQU0sTUFBTjtBQUNyQyxtQkFBTyxLQUFQO1NBRkosRUFGcUI7S0FBVCxDQUFoQixDQUhnQzs7QUFXaEMsV0FBTyxJQUFQLENBQVksVUFBQyxDQUFELEVBQUksQ0FBSjtlQUFVLEVBQUUsUUFBRixHQUFhLEVBQUUsUUFBRjtLQUF2QixDQUFaLENBWGdDOztBQWFoQyxRQUFJLE9BQU8sTUFBUCxLQUFrQixDQUFsQixFQUFxQjtBQUNyQixjQUFNLDBCQUFOLENBRHFCO0tBQXpCO0FBR0EsUUFBSSxXQUFXLE9BQU8sQ0FBUCxDQUFYLENBaEI0Qjs7QUFrQmhDLFdBQU8sU0FBUyxLQUFULENBbEJ5QjtDQUFYOztBQXFCekIsSUFBSSxpQkFBaUIsU0FBakIsY0FBaUIsQ0FBQyxLQUFELEVBQVc7QUFDNUIsV0FBTyxNQUFNLE9BQU4sQ0FBYyxLQUFkLEVBQXFCLEdBQXJCLENBQVAsQ0FENEI7Q0FBWDs7QUFJZCxTQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0I7QUFDM0IsUUFBSSxrQkFBa0IsT0FBbEIsQ0FBMEIsS0FBMUIsQ0FBSixFQUFzQztBQUNsQyxlQUFPLEtBQVAsQ0FEa0M7S0FBdEM7O0FBSUEsUUFBSSxTQUFTLEVBQVQsQ0FMdUI7Ozs7OztBQU0zQiw2QkFBZ0IseUJBQXlCLEtBQXpCLEVBQWdDLFlBQWhDLDJCQUFoQixvR0FBK0Q7Z0JBQXRELGtCQUFzRDs7QUFDM0QsZ0JBQUksV0FBVyxJQUFJLElBQUosRUFBWCxDQUR1RDtBQUUzRCxnQkFBSSxhQUFhLEVBQWIsRUFBaUI7QUFDakIseUJBRGlCO2FBQXJCO0FBR0EsZ0JBQUksWUFBWSxtQkFBbUIsUUFBbkIsQ0FBWixDQUx1RDs7d0NBTXZDLHlCQUF5QixHQUF6QixFQUE4QixTQUE5QixFQU51Qzs7OztnQkFNdEQsaUNBTnNEO2dCQU1oRCxrQ0FOZ0Q7O0FBTzNELG1CQUFPLGVBQWUsSUFBZixDQUFQLENBUDJEO0FBUTNELG9CQUFRLGVBQWUsS0FBZixDQUFSLENBUjJEOztBQVUzRCxtQkFBTyxJQUFQLENBQVk7QUFDUixzQkFBTSxJQUFOO0FBQ0EsdUJBQU8sS0FBUDthQUZKLEVBVjJEO1NBQS9EOzs7Ozs7Ozs7Ozs7OztLQU4yQjs7QUFzQjNCLFdBQU8sTUFBUCxDQXRCMkI7Q0FBeEI7O0FBeUJBLFNBQVMsTUFBVCxDQUFnQixLQUFoQixFQUF1QjtBQUMxQixRQUFJLFNBQVMsS0FBVCxDQUFKLEVBQXFCO0FBQ2pCLGVBQU8sS0FBUCxDQURpQjtLQUFyQjs7QUFJQSxRQUFJLFNBQVMsRUFBVCxDQUxzQjs7Ozs7OztBQU8xQiw4QkFBZ0IsZ0NBQWhCLHdHQUF1QjtnQkFBZCxtQkFBYzs7QUFDbkIsc0JBQVUsSUFBSSxJQUFKLEdBQVcsZUFBWCxHQUE2QixJQUFJLEtBQUosR0FBWSxZQUF6QyxDQURTO1NBQXZCOzs7Ozs7Ozs7Ozs7OztLQVAwQjs7QUFXMUIsV0FBTyxNQUFQLENBWDBCO0NBQXZCIiwiZmlsZSI6Im1vZGVsLXRyYW5zZm9ybWF0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21hbmllay9Qcm9qZWN0cy9vcGVuc2hpZnQvZW5nbGlzaHRhYmxlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgb2JqZWN0SW5zcGVjdGlvbnMgZnJvbSAnLi9vYmplY3RJbnNwZWN0aW9ucyc7XG5jb25zdCBSb3dTZXBlcmF0b3IgPSAnXFxuJztcbmNvbnN0IENvbHVtbnNTZXBhcnRvciA9ICdcXHQnO1xuXG52YXIgaXNTdHJpbmcgPSAodmFsdWUpID0+IHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgdmFsdWUgaW5zdGFuY2VvZiBTdHJpbmcpO1xufTtcblxudmFyIHNwbGl0V2l0aG91dEVtcHR5RW50cmllcyA9IChhcnJheSwgc2VwYXJ0b3IpID0+IHtcbiAgICByZXR1cm4gYXJyYXkuc3BsaXQoc2VwYXJ0b3IpLmZpbHRlcih2ID0+IHYpO1xufTtcbnZhciB0cnlEZWR1Y2VTZXBhcmF0b3IgPSAodmFsdWUpID0+IHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgbGV0IG1hdGNoZXMgPSB2YWx1ZS5tYXRjaCgvKFxccyspL2cpO1xuICAgIG1hdGNoZXMuZm9yRWFjaChtYXRjaCA9PiB7XG4gICAgICAgIHZhciBpc1RhYiA9IG1hdGNoLmluZGV4T2YoJ1xcdCcpICE9PSAtMTtcbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgcHJpb3JpdHk6IGlzVGFiID8gbWF0Y2gubGVuZ3RoICogNCA6IG1hdGNoLmxlbmd0aCxcbiAgICAgICAgICAgIHZhbHVlOiBtYXRjaFxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJlc3VsdC5zb3J0KChhLCBiKSA9PiBhLnByaW9yaXR5IDwgYi5wcmlvcml0eSk7XG5cbiAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyAnQ2FuIG5vdCBkZWR1Y2Ugc2VwYXJhdG9yJztcbiAgICB9XG4gICAgdmFyIHNlcGFydG9yID0gcmVzdWx0WzBdO1xuXG4gICAgcmV0dXJuIHNlcGFydG9yLnZhbHVlO1xufTtcblxudmFyIG5vcm1hbGl6ZVNwYWNlID0gKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1xccy9nLCAnICcpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvVGFibGUoaW5wdXQpIHtcbiAgICBpZiAob2JqZWN0SW5zcGVjdGlvbnMuaXNBcnJheShpbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCByb3cgb2Ygc3BsaXRXaXRob3V0RW1wdHlFbnRyaWVzKGlucHV0LCBSb3dTZXBlcmF0b3IpKSB7XG4gICAgICAgIHZhciByb3dWYWx1ZSA9IHJvdy50cmltKCk7XG4gICAgICAgIGlmIChyb3dWYWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzZXBhcmF0b3IgPSB0cnlEZWR1Y2VTZXBhcmF0b3Iocm93VmFsdWUpO1xuICAgICAgICB2YXIgW2xlZnQsIHJpZ2h0XSA9IHNwbGl0V2l0aG91dEVtcHR5RW50cmllcyhyb3csIHNlcGFyYXRvcik7XG4gICAgICAgIGxlZnQgPSBub3JtYWxpemVTcGFjZShsZWZ0KTtcbiAgICAgICAgcmlnaHQgPSBub3JtYWxpemVTcGFjZShyaWdodCk7XG5cbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgICAgIHJpZ2h0OiByaWdodCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvVGV4dChpbnB1dCkge1xuICAgIGlmIChpc1N0cmluZyhpbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSAnJztcblxuICAgIGZvciAobGV0IHJvdyBvZiBpbnB1dCkge1xuICAgICAgICByZXN1bHQgKz0gcm93LmxlZnQgKyBDb2x1bW5zU2VwYXJ0b3IgKyByb3cucmlnaHQgKyBSb3dTZXBlcmF0b3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn0iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9VdGlscy9vYmplY3RJbnNwZWN0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztRQUFnQjtRQUlBO1FBSUE7QUFSVCxTQUFTLFNBQVQsQ0FBbUIsTUFBbkIsRUFBMkI7QUFDOUIsV0FBUSxPQUFPLE1BQVAsS0FBa0IsV0FBbEIsQ0FEc0I7Q0FBM0I7O0FBSUEsU0FBUyxPQUFULENBQWlCLE1BQWpCLEVBQXlCO0FBQzVCLFdBQU8sQ0FBQyxVQUFVLE1BQVYsQ0FBRCxJQUFzQixPQUFPLElBQVAsQ0FBWSxNQUFaLEVBQW9CLE1BQXBCLEtBQStCLENBQS9CLENBREQ7Q0FBekI7O0FBSUEsU0FBUyxPQUFULENBQWlCLEtBQWpCLEVBQXdCO0FBQzNCLFdBQU8sT0FBTyxTQUFQLENBQWlCLFFBQWpCLENBQTBCLElBQTFCLENBQStCLEtBQS9CLE1BQTBDLGdCQUExQyxDQURvQjtDQUF4QiIsImZpbGUiOiJvYmplY3RJbnNwZWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYW5pZWsvUHJvamVjdHMvb3BlbnNoaWZ0L2VuZ2xpc2h0YWJsZSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBpc0RlZmluZWQob2JqZWN0KSB7XG4gICAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0ICE9PSAndW5kZWZpbmVkJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KG9iamVjdCkge1xuICAgIHJldHVybiAhaXNEZWZpbmVkKG9iamVjdCkgfHwgT2JqZWN0LmtleXMob2JqZWN0KS5sZW5ndGggPT09IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG4iXX0=

/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 10 */,
/* 11 */
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
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(12)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
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
/* 12 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ }
/******/ ]);
//# sourceMappingURL=table-index.bundle.js.map