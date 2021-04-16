import Title from '../../components/title';
import Link from 'next/link';
import React from 'react'

export default function Posts({ posts }){
	//ESTRATEGIA  
	 

	return(
		<>
		  <h1>Posts Page</h1>
		 <div className='grid'>
			{posts.map(post => {
			  return (
				<Link href={`/posts/[id]`} as={`/posts/${post.id}`} key={post.id}>
				  <a className='card'>
					<h3>{post.nombre} - {post.created_at}</h3>
					<p>{post.email}</p>
				  </a>
				</Link>
			  )
			})}
		  </div>
		  <style jsx>
        {`
          .grid {
            display: flex;
            flex-wrap: wrap;
            max-width: 800px;
            margin-top: 2rem;
          }
          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            color: black;
            text-decoration: none;
            border: 2px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }
          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }
          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }
          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }
        `}
      </style>
		</>
	)
}

export async function getServerSideProps(){
	// esto corre del lado del servidor
	const res = await fetch('https://higorr.pe/api/checkTestLista/55140268');
	const posts = await res.json();

	return {
		props:{
			posts:posts.data
		}
	};
}