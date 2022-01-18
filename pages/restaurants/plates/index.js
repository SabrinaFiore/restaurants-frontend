export default function Plates() {
	console.log('Working on server Plates component');
	return <h1>Piatti</h1>
}

export async function getStaticProps() {
	console.log('Working on server Plates component, as well with async function');

	return {
		props: {}
	}
}