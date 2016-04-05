/// <reference path="../../../typings/main.d.ts" />

export function getName() {
    return 'table';
}

export function getData($) {
    var $rows = $('#table').find('tr:not(:hidden)');
    var headers = [];
    var data = [];

    // Get the headers (add special header logic here)
    $($rows.shift()).find('th:not(:empty)').each(function() {
        headers.push($(this).text().toLowerCase());
    });

    // Turn all existing rows into a loopable array
    $rows.each(function() {
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

export function activate($) {
    var $table = $('#table');
    var $rowTemplate = $table.find('tr.template');

    $rowTemplate.find('.remove-row').click(function() {
        $(this).parents('tr').detach();
    });

    $('.table-add').click(function() {
        console.log('register click');
        var $clone = $rowTemplate.clone(true).removeClass('template table-line');
        $clone.addClass('items');
        $table.find('table').append($clone);
    });

    $('.table-remove').click(function() {
        $(this).parents('tr').detach();
    });

    // A few jQuery helpers for exporting only
    $.fn.pop = [].pop;
    $.fn.shift = [].shift;
}