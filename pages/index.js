import Head from 'next/Head';
import Title from '../components/title';

export default function Home(){

	return(
		<div>
			<Head>
				<title>Aprendamos NextJS con Webtoriales</title>
				<meta name="description" content="En este curso de Webtoriales aprenderas sobre NextJS"/>
			  </Head>
			<Title >Home Page</Title>
			<p>Aprendamos Next js</p>
		</div>
	)
}
