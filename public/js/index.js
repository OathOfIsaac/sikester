const socket = io()

function timedRefresh(timeoutPeriod) {
  setTimeout("location.reload(true);",timeoutPeriod);
}
window.onload = timedRefresh(60000)
//comment submission
socket.on('commentMessage', (comment) => {
  const commentDiv = document.getElementById('comment-text')
  console.log(commentDiv)

  const newComment = `
  ${comment.comment_text}
  `;
  console.log(newComment)

  Element.prototype.appendAfter = function () {
    element.parentNode.insertBefore(this, newComment.nextSibling)
    socket.on('refresh feed', () => {
      location.reload(true)
    } )
  }, false;

})