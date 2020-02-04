// 자식요소 클릭 이벤트
$('#myTask').children().click(function () {

    $(this).remove();

});

$('#myTask').on('click', 'li', function (event) {

    $(event.target).remove()

});

$('#myTask').append('<li> New li tag </li>'); 