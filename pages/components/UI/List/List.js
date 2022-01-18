import Link from "next/link";

export default function List(props) {
	return 	<ul>
		{props.list.data.map((el) => {
			return <li key={el.id}>
				<Link href={`/restaurants/${el.id}`}>
					{el.attributes.name}
				</Link>
			</li>
		})}
	</ul>
}