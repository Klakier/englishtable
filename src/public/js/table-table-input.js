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
}

export function registerEvents($) {
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