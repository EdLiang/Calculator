
$("button").click(function () {
    alert("Handler for .click() called.");
});

$('button').click(function () {
    alert("Handler for .click() called.");
});

$('#button7').click(
    function () {
        alert('yes');
        $(this).css('color', 'red');
        var value = this.value();
        $('display').html(value);
    }
);