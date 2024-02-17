const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const comment_body = document.querySelector('.form-comment-body').value;
    const post_id = params.id;
  
    if (comment_body) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment_body, post_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
        res.status(200)
      } else {
        alert('Failed to post comment.');
      }
    }
};

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);