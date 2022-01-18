export default function Restaurant() {
	return <>
		<h1>Benvenuto nel ristorante</h1>
	</>
}

export async function getStaticPaths() {
	const result = await fetch('http://localhost:1337/api/restaurants');
	const restaurants =  await result.json();
	
	const paths = restaurants.data.map(restaurant => {
		return {
			params: {id: restaurant.id.toString() }
		}
	})

	console.log("getStaticPaths");

	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps() {
	return {
		props: {}
	}
}