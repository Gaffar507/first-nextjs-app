export default async function getpost(slug) {

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
    if (!response.ok) {
        throw new Error(result.message || 'Something went wrong!');
    }

    return response.json();
}