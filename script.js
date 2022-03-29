var likeLog=[9,12,9]

function addLike(postNum) {
    likeLog[postNum]++;
    document.getElementById("likes"+(postNum+1)).innerText=likeLog[postNum]+" like(s)";
}