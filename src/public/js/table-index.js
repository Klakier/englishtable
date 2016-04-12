/// <reference path="../../../typings/main.d.ts" />
require('../css/table-index.css');
require('../css/mainStyle.css');
require('bootstrap-notify');


import * as tableInput from './table-table-input';
import * as textboxInput from './table-textbox-input';
import * as configuration from './table-configuration.react';
import * as ReactDom from 'react-dom';

var $ = require('jquery');
var inputMethod = tableInput;
var test = {
    table: tableInput
};

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

var switchInput = (url, currentInputMethod, newInputMethod) => {
    return new Promise((resolve, reject) =>
        $.ajax({
            method: 'POST',
            url: url,
            data: {
                dataType: currentInputMethod.getName(),
                data: currentInputMethod.getData($)
            },
            dataType: 'html',
            success: (result) => {
                inputMethod = newInputMethod;
                $('#input').html(result);
                newInputMethod.activate($);
                resolve(result);
            },
            error: (jqHXR, textStatus, errorThrown) => {
                showError(textStatus, errorThrown);
                reject(textStatus);
            }
        }));
};

var activeteTab = (tab) => {
    $('.nav-tabs > li').removeClass('active');
    $(tab).addClass('active');
};

$(document).ready(() => {
    tableInput.activate($);
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

    $('#table-input-tab').click((event) => {
        switchInput('table//input/table', inputMethod, tableInput)
            .then(() => activeteTab(event.target.parentElement));
    });

    $('#table-input-textbox').click((event) => {
        switchInput('table/input/textbox', inputMethod, textboxInput)
            .then(() => activeteTab(event.target.parentElement));
    });

    $shuffleBtn.click(function() {
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
            success: function(result) {
                $('#result').html(result);
            },
            error: (jqHXR, textStatus, errorThrown) => {
                showError(textStatus, errorThrown);
            }
        });
    });
    ReactDom.render( <configuration.columnConfiguration />, document.getElementById('ReactTest'));
});