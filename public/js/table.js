$(document).ready(function () {

    var $TABLE = $('#table');
    var $SHUFFLE_BTN = $('#shuffle');
    var $ELEMENTS_PER_PAGE_VALUE = $('#elements-per-page-value')
    var $ROW_TEMPLATE=$TABLE.find('tr.template');

    $ROW_TEMPLATE.find('.remove-row').click(function() {
        $(this).parents('tr').detach();
    })

    $('.options li > a').click(function () {
        var value = $(this).html();
        $ELEMENTS_PER_PAGE_VALUE.html(value);
    })

    $('.table-add').click(function () {
        var $clone = $ROW_TEMPLATE.clone(true).removeClass('template table-line');
        $clone.addClass("items")
        $TABLE.find('table').append($clone);
    });

    $('.table-remove').click(function () {
        $(this).parents('tr').detach();
    });

    $('.table-up').click(function () {
        var $row = $(this).parents('tr');
        if ($row.index() === 1) return; // Don't go above the header
        $row.prev().before($row.get(0));
    });

    $('.table-down').click(function () {
        var $row = $(this).parents('tr');
        $row.next().after($row.get(0));
    });

// A few jQuery helpers for exporting only
    jQuery.fn.pop = [].pop;
    jQuery.fn.shift = [].shift;

    var extractDictionary = function () {
        var $rows = $TABLE.find('tr:not(:hidden)');
        var headers = [];
        var data = [];

        // Get the headers (add special header logic here)
        $($rows.shift()).find('th:not(:empty)').each(function () {
            headers.push($(this).text().toLowerCase());
        });

        // Turn all existing rows into a loopable array
        $rows.each(function () {
            var $td = $(this).find('td');
            var h = {};

            // Use the headers from earlier to name our hash keys
            headers.forEach(function (header, i) {
                h[header] = $td.eq(i).text().trim();
            });

            data.push(h);
        });

        // Output the result
        return data;
    };

    var getElementsPerPage = function () {
        return parseInt($ELEMENTS_PER_PAGE_VALUE.html());
    };

    $SHUFFLE_BTN.click(function () {
        var dictionary = extractDictionary();
        var elementsPerPage = getElementsPerPage();
        $.ajax(
            {
                method: 'POST',
                url: 'table',
                data: {dictionary: dictionary, elementsPerPage: elementsPerPage},
                dataType: 'html',
                success: function (result) {
                    $('#result').html(result);
                }
            }).fail(function () {
            console.log(faile);
        });
    });

});
