var pageNum = 1;
var replyPageFooter = $(".panel-footer");
var repll = $("#repll");

replyPageFooter.on("click", "li a", function (e) {
    e.preventDefault();
    console.log("page click");

    var targetPageNum = $(this).attr("href");

    console.log("targetPageNum: " + targetPageNum);

    pageNum = targetPageNum;

    showList(pageNum);
});


function showReplyPage(replyCnt) {
    var endNum = Math.ceil(pageNum / 10.0) * 10;
    var startNum = endNum - 9;

    var prev = startNum != 1;
    var next = false;

    if (endNum * 10 >= replyCnt) {
        endNum = Math.ceil(replyCnt / 10.0);
    }

    if (endNum * 10 < replyCnt) {
        next = true;
    }

    var str = "<ul class='pagination pull-right'>";

    if (prev) {
        str += "<li class = 'page-item'><a class='page-link' href='" + (startNum - 1) + "'>Previous</a></li>";
    }

    for (var i = startNum; i <= endNum; i++) {
        var active = pageNum == i ? "active" : "";

        //여기 댓글 링크
        str += "<li class='page-item" + active + " '><a class='page-link' href='" + i + "'>" + i + "</a></li>";
    }

    if (next) {
        str += "<li class='page-item'><a class='page-link' href='" + (endNum + 1) + "'>Next</a></li>";
    }

    str += "</ul></div>";

    console.log("endNum & startNum : " + endNum + " & " + startNum);

    console.log(str);

    replyPageFooter.html(str);

} // showReplyPage