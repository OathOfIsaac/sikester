const socket = io()
socket.emit('message', "Hello there...")

socket.emit('commentMessage', 'Random what?')

socket.on('message', message => {
  console.log(message)
})


window.onload = () => {
//comment submission
socket.on('commentMessage', comment => {
  const commentDiv = document.getElementById('comment-list')
  console.log(commentDiv)
  const section = document.createElement('section')

  const newComment = `  
  <section class="comment">
  <div class="meta">
    ${comment.username} on ${comment.created_at}
  </div>
  <div class="text">
    ${comment.comment_text}
  </div>
</section>`;


commentDiv.appendChild(newComment)
})}