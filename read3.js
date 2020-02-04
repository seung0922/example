$(".chat").on("click", "li", function (e) {
    var rno = $(this).data("rno");

    replyService.get(rno, function (reply) {
        modalInputReply.val(reply.reply);
        modalInputReplyer.val(reply.replyer);
        modalInputReplyDate.val(replyService.displayTime(reply.replyDate)).attr("readonly", "readonly");
        modal.data("rno", reply.rno);

        modal.find("button[id != 'modalCloseBtn']").hide();
        modalModBtn.show();
        modalRemoveBtn.show();

        $(".modal").modal("show");
    });
});

// 댓글 뿌리기...
function showList(page) {

    console.log("show list " + page);

    replyService.getList({
        bno: bnovalue,
        page: page || 1
    },
        function (replyCnt, list) {

            repll.val(replyCnt);

            console.log("replyCnt: " + replyCnt);
            console.log("list: " + list);
            console.log(list);

            if (list == null || list.length == 0) {
                //replyUL.html("");
                return;
            }

            //댓글 li 시작
            var str = "";

            for (var i = 0, len = list.length || 0; i < len; i++) {
                if (list[i].depth == 0) {
                    str += "<li class='left clearfix list-group-item' data-rno='" + list[i].rno + "'>";
                } else {
                    str += "<li style='padding:12px 20px 12px 50px' class='left clearfix list-group-item' data-rno='" + list[i].rno + "'>"
                        + "<i class='material-icons' style='color:pink'>subdirectory_arrow_right</i>";
                }

                str += "<div><div class='header'><strong class='primary-font'>" + list[i].replyer;
                str += "</strong><small style='float:right;' class = 'pull-right text-muted'>"
                    + replyService.displayTime(list[i].replyDate)
                    + "</small></div>";
                str += "<p>" + list[i].reply;

                if (list[i].depth == 0) {
                    str += "<button id='byRnoBtn' class='btn btn-outline-primary'>답글달기</button></p></div></li>";
                }

                console.log(str);


            } //end for

            replyUL.html(str);

            showReplyPage(replyCnt);

        });
}
