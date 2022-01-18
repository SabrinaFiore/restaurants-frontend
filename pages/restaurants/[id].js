export default function Restaurant({restaurant}) {
	return <>
		<h1>Benvenuto nel ristorante {restaurant.attributes.name}</h1>
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

	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({params}) {
	const result = await fetch(`http://localhost:1337/api/restaurants/${params.id}`);
	const data =  await result.json();

	const restaurant = data.data;

	console.log("getStaticPaths", restaurant);

	return {
		props: {restaurant}
	}
}