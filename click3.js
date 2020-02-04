$(document).ready(function () {
    var f1 = $("#f1");
	
	// 페이지 숫자 클릭했을 때
    $(".pageDiv ul").on("click", 'a', function (e) {
        e.preventDefault();
        console.log("click");
        var pageNum = $(this).attr("href");
        console.log("pageNum: " + pageNum);
        $("input[name='page']").val(pageNum);
        f1.submit();
    });


	// 글 번호 클릭했을 때
    $(".bnoLink").on("click", function (e) {

        e.preventDefault();

        var bnoValue = $(this).attr("href");

        f1.append("<input type='hidden' name='bno' value='" + bnoValue + "'>");
        f1.attr("action", "/board/read");

        f1.submit();

    });


	// 검색버튼 클릭했을 때
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