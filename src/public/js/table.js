/// <reference path="../../../typings/main.d.ts" />
require('../css/table.css');
require('../css/mainStyle.css');
require('bootstrap-notify');

var $ = require('jquery');

$(document).ready(function() {
    var $TABLE = $('#table');
    var $shuffleBtn = $('#shuffle');
    var $elementsPerPageValue = $('#elements-per-page-value');
    var $rowTemplate = $TABLE.find('tr.template');

    $rowTemplate.find('.remove-row').click(function() {
        $(this).parents('tr').detach();
    });

    $('.options li > a').click(function() {
        var value = $(this).html();
        $elementsPerPageValue.html(value);
    });

    $('.table-add').click(function() {
        var $clone = $rowTemplate.clone(true).removeClass('template table-line');
        $clone.addClass('items');
        $TABLE.find('table').append($clone);
    });

    $('.table-remove').click(function() {
        $(this).parents('tr').detach();
    });

    // A few jQuery helpers for exporting only
    $.fn.pop = [].pop;
    $.fn.shift = [].shift;

    var extractDictionary = function() {
        var $rows = $TABLE.find('tr:not(:hidden)');
        var headers = [];
        var data = [];

        // Get the headers (add special header logic here)
        $($rows.shift()).find('th:not(:empty)').each(function() {
            headers.push($(this).text().toLowerCase());
        });

        // Turn all existing rows into a loopable array
        $rows.each(function() {
            var $td = $(this).find('td');
            var h = {};

            // Use the headers from earlier to name our hash keys
            headers.forEach(function(header, i) {
                h[header] = $td.eq(i).text().trim();
            });

            data.push(h);
        });

        // Output the result
        return data;
    };

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

    $shuffleBtn.click(function() {
        var dictionary = extractDictionary();
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
            error: function(jqHXR, textStatus, errorThrown) {
                $.notify({
                    icon: 'material-icons error',
                    title: 'Internal error occurs.',
                    message: textStatus + errorThrown
                }, {
                    type: 'danger',
                    template: '<div data-notify="container" class="alert">' +
                        '<span class="material-icons">error</span>' +
                        '<span data-notify="title">{1}</span>' +
                        '<div data-notify="message">{2}</div>' +
                        '</div>'
                });
            }
        });
    });
});