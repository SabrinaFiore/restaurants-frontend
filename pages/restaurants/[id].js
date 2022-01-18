export default function Restaurant({restaurant}) {
	return <>
		<h1>Benvenuto nel ristorante {restaurant.attributes.name}</h1>
		<h2>Abbiamo {restaurant.attributes.seat} posti a sedere</h2>
	</>
}

// getStaticPaths: to create static path
export async function getStaticPaths() {
	const result = await fetch('http://localhost:1337/api/restaurants');
	const restaurants =  await result.json();
	
	const paths = restaurants.data.map(restaurant => {
		return {
			params: {id: restaurant.id.toString() }
		}
	})

	return {
		paths,
		fallback: true
	}
}

// getStaticProps: to take data from API and get them to Restaurant component
export async function getStaticProps({params}) {
	const result = await fetch(`http://localhost:1337/api/restaurants/${params.id}`);
	const data =  await result.json();

	const restaurant = data.data;

	console.log("getStaticPaths", restaurant);

	return {
		props: {restaurant}
	}
}