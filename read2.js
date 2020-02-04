// 걍 댓글
$("#addReplyBtn").on("click", function (e) {

    modal.find("input").val("");
    modalInputReplyDate.closest("div").hide();
    modal.find("button[id != 'modalCloseBtn']").hide();

    modalRegisterBtn.show();

    $(".modal").modal("show");

    modalInputDepth.val(0);
});

// 댓글등록 버튼 클릭
modalRegisterBtn.on("click", function (e) {
    var reply = {
        reply: modalInputReply.val(),
        replyer: modalInputReplyer.val(),
        byrno: modalInputByrno.val(),
        depth: modalInputDepth.val(),
        bno: bnovalue
    };

    replyService.add(reply, function (result) {
        alert(result);

        modal.find("input").val("");
        modal.modal("hide");

        console.log("페이지넘?  " + pageNum);

        if (repll.val() % 10 == 0) {
            pageNum = (Math.ceil(repll.val() / 10.0) + 1);
        } else {
            pageNum = (Math.ceil(repll.val() / 10.0));
        }
        showList(pageNum);
    });
});