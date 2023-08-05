import React, { useEffect, useState } from 'react';

function CommentList() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
         <h2>  <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3QtL5fjrXtLod59l9D3UNnwS9p7TxSoDcQ&usqp=CAU${comment.id}`} alt="Avatar" />
         {comment.name}</h2>
          <p>{comment.body}</p>
          
          <hr></hr>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
