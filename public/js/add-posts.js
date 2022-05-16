async function newPost(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const spotify_url = document.querySelector('input[name="spotify_url"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            spotify_url
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText)
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newPost);