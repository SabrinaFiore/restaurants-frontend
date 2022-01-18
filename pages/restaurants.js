import List from "./components/UI/List/List";

export default function Restaurants({restaurants}) {
	return (<>
		<h1>Ecco la lista ristoranti</h1>
		<List list={restaurants}></List>
	</>);
}

export async function getStaticProps() {
	const result = await fetch('http://localhost:1337/api/restaurants');
	const restaurants =  await result.json();

	console.log("restaurants", restaurants);

	return {
		props: {restaurants}
	}
}