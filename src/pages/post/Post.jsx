import { Link, useLoaderData } from 'react-router-dom';

export const Post = () => {
  const { post } = useLoaderData();

  return (
    <>
      <div className=" card my-4">
        <div className="card-header bg-black text-white">Post</div>
        <div className=" card-body">
          <h1 className="card-title">{post.title}</h1>
          <hr />
          <p className="card-text">{post.body}</p>

          <Link className="btn btn-primary" to={'/blog'}>
            Volver
          </Link>
        </div>
      </div>
    </>
  );
};

export const PostDetail = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();
  return { post };
};
