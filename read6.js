var bnovalue = '<c:out value="${dto.bno}"/>';
var replyUL = $(".chat");

var modal = $(".modal");
var modalInputReply = modal.find("input[name='reply']");
var modalInputReplyer = modal.find("input[name='replyer']");
var modalInputReplyDate = modal.find("input[name='replyDate']");
var modalInputByrno = modal.find("input[name='byrno']");
var modalInputDepth = modal.find("input[name='depth']");

var modalModBtn = $("#modalModBtn");
var modalRemoveBtn = $("#modalRemoveBtn");
var modalRegisterBtn = $("#modalRegisterBtn");
showList(1);

// 모달에서 댓글 삭제버튼 클릭했을 때
modalRemoveBtn.on("click", function(e){
    var rno = modal.data("rno");
    
    replyService.remove(rno, function(result){
        alert(result);
        modal.modal("hide");
        
        if(repll.val() % 10 == 1){
            pageNum -= 1;
        }
        
        showList(pageNum);
    })
})