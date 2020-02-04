// 댓글 수정 버튼 클릭 이벤트 
modalModBtn.on("click", function (e) {
    var reply = {
        rno: modal.data("rno"),
        reply: modalInputReply.val()
    };

    replyService.update(reply, function (result) {

        alert(result);
        modal.modal("hide");
        showList(pageNum);
    });
});