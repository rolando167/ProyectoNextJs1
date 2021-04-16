import Title from '../../components/title';
import Layout from '../../components/layout';
import Link from 'next/link';
import React from 'react'

export default function Posts(){
	//ESTRATEGIA  
	const [posts, setPosts] = React.useState([]);
	 React.useEffect(() => {
		const fetchPosts = async () => {
		  //const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		  const res = await fetch('https://higorr.pe/api/checkTestLista/55140268');
		  const newPosts = await res.json();
		  setPosts(newPosts.data);
		};

		fetchPosts();
	  }, []);

	return(
		<Layout>
		  <h1>Posts Page</h1>
		  <div>
			{posts.map(post => {
			  return (
				<Link href={`/posts/[id]`} as={`/posts/${post.id}`} key={post.id}>
				  <a>
					<h3>{post.nombre} - {post.created_at}</h3>
					<p>{post.email}</p>
				  </a>
				</Link>
			  )
			})}
		  </div>
		</Layout>
	)
}
