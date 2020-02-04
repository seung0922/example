var f1 = $("#f1");
var un = $("#un");
$(document).ready(function() {
	
	// 목록, 삭제, 수정 버튼 각각 클릭 시
    $(".btns button").on("click", function() {
        if ($(this).val() == 'list') {
            $("#bno").remove();
            f1.attr("action", "/board/list");
        }
        if ($(this).val() == 'del') {
            f1.attr("action", "/board/delete");
        }
        if ($(this).val() == 'upd') {
            f1.attr("action", "/board/update");
        }
        f1.submit();
    })
});