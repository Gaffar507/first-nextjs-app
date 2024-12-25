export default async function getAllPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10',{
        next: {
            revalidate: 10,
        },
        // cache: 'force-cache',
    });

    if (!response.ok) {
        throw new Error(result.message || 'Something went wrong!');
    }
    return response.json();
}