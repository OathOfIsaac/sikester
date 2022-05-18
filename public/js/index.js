
const socket = io()
socket.emit('message', "Hello there...")

//socket.broadcast.emit('commentMessage')



socket.on('message', message => {
  console.log(message)
})


window.onload = () => {
//comment submission
socket.on('commentMessage', (comment) => {
  const commentDiv = document.getElementById('comment-text')
  console.log(commentDiv)

  const newComment = `
  ${comment.comment_text}
  `;


Element.prototype.appendAfter = function () {
  element.parentNode.insertBefore(this, newComment.nextSibling)
}, false;

})}

socket.on('reload', function (data) {
  location.reload()
})
