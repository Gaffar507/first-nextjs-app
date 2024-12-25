import React from 'react'

const Comments = async ({comments}) => {
    const newComments = await comments;
  return (
    <div>
      <h1 className='text-2xl pb-5'>Look all comments here</h1>
      <ul className='p-5'>
        {newComments.map((comment)=>(
          <li key={comment.id}>
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Comments
