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