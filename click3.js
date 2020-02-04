$(document).ready(function () {
    var f1 = $("#f1");
    $(".pageDiv ul").on("click", 'a', function (e) {
        e.preventDefault();
        console.log("click");
        var pageNum = $(this).attr("href");
        console.log("pageNum: " + pageNum);
        $("input[name='page']").val(pageNum);
        f1.submit();
    });


    $(".bnoLink").on("click", function (e) {

        e.preventDefault();

        var bnoValue = $(this).attr("href");

        f1.append("<input type='hidden' name='bno' value='" + bnoValue + "'>");
        f1.attr("action", "/board/read");

        f1.submit();

    });


    $("#searchBtn").on("click", function (e) {
        $("input[name='page']").val(1);

        var inputKeyword = $("#skeyword").val();

        $("input[name='keyword']").val(inputKeyword);

        var inputType = $("#stype option:selected").val();

        $("input[name='type']").val(inputType);

        console.log("inputKeyword: ", inputKeyword);
        console.log("inputType: ", inputType);

        f1.submit();
    })
})