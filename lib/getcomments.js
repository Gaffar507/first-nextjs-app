export default async function getcomments(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

    if(!response.ok) {
        throw new Error('Something went wrong!')
    }

    return await response.json();
}