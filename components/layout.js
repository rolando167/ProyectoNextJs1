import Navbar from './navbar';

export default function Layout({children}){
	return(
		<div>
			<Navbar />
			<main>
				{children}
			</main>
			<style jsx>
					{`
						div{
							padding: 20px 100px;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
						}
					`}
			</style>
			<style jsx global>
				{`
					main{
						background-color: #dddddd;
					}
				`}
			</style>
		</div>
	)
}

//scoped = el estilo solo afectara a este componente y no a otros archivos, global = a todos