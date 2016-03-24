/// <reference path="../../../typings/main.d.ts" />
require('../css/table.css');

$(document).ready(function() {

    var $TABLE = $('#table');
    var $SHUFFLE_BTN = $('#shuffle');
    var $ELEMENTS_PER_PAGE_VALUE = $('#elements-per-page-value')
    var $ROW_TEMPLATE = $TABLE.find('tr.template');

    $ROW_TEMPLATE.find('.remove-row').click(function() {
        $(this).parents('tr').detach();
    })

    $('.options li > a').click(function() {
        var value = $(this).html();
        $ELEMENTS_PER_PAGE_VALUE.html(value);
    })

    $('.table-add').click(function() {
        var $clone = $ROW_TEMPLATE.clone(true).removeClass('template table-line');
        $clone.addClass("items")
        $TABLE.find('table').append($clone);
    });

    $('.table-remove').click(function() {
        $(this).parents('tr').detach();
    });

    // A few jQuery helpers for exporting only
    jQuery.fn.pop = [].pop;
    jQuery.fn.shift = [].shift;

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
        return parseInt($ELEMENTS_PER_PAGE_VALUE.html());
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

    $SHUFFLE_BTN.click(function() {
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
                    title: "Internal error occurs.",
                    message: textStatus + errorThrown
                }, {
                    type: 'danger',
                    template: '<div data-notify="container" class="alert">' +
                        '<span class="material-icons">error</span>' +
                        '<span data-notify="title">{1}</span>' +
                        '<div data-notify="message">{2}</div>' +
                        "</div>"
                })

            }
        });
    });

});