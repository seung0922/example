//대댓글 달기 버튼 클릭 이벤트
$(".chat").on("click", "li button", function (e) {

    e.stopPropagation();

    modal.find("input").val("");
    modalInputReplyDate.closest("div").hide();
    modal.find("button[id != 'modalCloseBtn']").hide();

    modalRegisterBtn.show();

    var a = $(this).parent().parent().parent().data("rno")

    modalInputByrno.val(a);
    modalInputDepth.val(1);

    $(".modal").modal("show");

    // 값 보내줘야함...........

});