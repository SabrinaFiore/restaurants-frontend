import {useEffect} from 'react';

export default function Restaurants({restaurants}) {
	useEffect(() => {
		fetch('http://localhost:1337/api/restaurants')
		.then((response) => response.json())
		.then((data) => {
				console.log('data', data);
		})
	}, [])

	console.log('restaurants', restaurants);
	
	return (
		<>
			<h1>Lista Ristoranti</h1>
			<ul>
				{restaurants.data.map((restaurant) => {
						return <li key={restaurant.id}> {restaurant.attributes.name} </li>
				})}
			</ul>
		</>
	)
}

export async function getStaticProps() {
	const result = await fetch('http://localhost:1337/api/restaurants');
	const restaurants = await result.json();

	return {
		props: {restaurants}
	}
}