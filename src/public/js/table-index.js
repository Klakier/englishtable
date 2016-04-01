/// <reference path="../../../typings/main.d.ts" />
require('../css/table-index.css');
require('../css/mainStyle.css');
require('bootstrap-notify');

import * as tableInput from './table-table-input';
import * as textboxInput from './table-textbox-input';

var $ = require('jquery');
var inputMethod = tableInput;

var showError = (status, errorText) => {
    $.notify({
        icon: 'material-icons error',
        title: 'Internal error occurs.',
        message: status + errorText
    }, {
        type: 'danger',
        template: '<div data-notify="container" class="alert">' +
            '<span class="material-icons">error</span>' +
            '<span data-notify="title">{1}</span>' +
            '<div data-notify="message">{2}</div>' +
            '</div>'
    });
};

var switchInput = (url,newInputMethod) => {
    var data = inputMethod.getData($);
    $.ajax({
        method: 'POST',
        url: url,
        data: {
            dataType: inputMethod.getName(),
            data: inputMethod.getData($)
        },
        dataType: 'html',
        success: (result) => {
            $('#input').html(result);
            newInputMethod.registerEvents($);
            inputMethod = newInputMethod;
        },
        error: (jqHXR, textStatus, errorThrown) => {
            showError(textStatus, errorThrown);
        }
    });
};

$(document).ready(() => {
    inputMethod = tableInput.registerEvents($);
    var $TABLE = $('#table');
    var $shuffleBtn = $('#shuffle');
    var $elementsPerPageValue = $('#elements-per-page-value');

    $('.options li > a').click(function() {
        var value = $(this).html();
        $elementsPerPageValue.html(value);
    });
    var getElementsPerPage = function() {
        return parseInt($elementsPerPageValue.html());
    };

    var getColumnNames = function() {
        var result = [];
        $('.column-name-input').each(function(number, element) {
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

    $('#table-input-tab').click(() => {
        switchInput('table//input/table', tableInput);
    });

    $('#table-input-textbox').click(() => {
        switchInput('table/input/textbox', textboxInput);
    });

    $shuffleBtn.click(function() {
        var dictionary = tableInput.getData($);
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
            success: function(result) {
                $('#result').html(result);
            },
            error: (jqHXR, textStatus, errorThrown) => {
                showError(textStatus, errorThrown);
            }
        });
    });
});