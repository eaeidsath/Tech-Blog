const commentFormHandler = async (event) => {
    console.log('hello');
  
    const comment_body = document.querySelector('.comment-body').value;
  
    if (comment_body) {
      const response = await fetch('/api/posts/:id/comments', {
        method: 'POST',
        body: JSON.stringify({ comment_body }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log('Ok');
      } else {
        alert('Failed to create new comment.');
      }
    }
};