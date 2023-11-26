import { NavLink, useLoaderData } from 'react-router-dom';

export const Blog = () => {
  const { posts } = useLoaderData();

  return (
    <>
      <h1>Blog</h1>
      <ul className="list-group my-4">
        {posts.length > 0 ? (
          posts.map((post) => {
            return (
              <li
                className="list-group-item list-group-item-action"
                key={post.id}
              >
                <NavLink to={`/blog/${post.id}`}>{post.title}</NavLink>
              </li>
            );
          })
        ) : (
          <li> no blog found</li>
        )}
      </ul>
    </>
  );
};

export const loaderBlog = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const posts = await res.json();

  return { posts };
};
