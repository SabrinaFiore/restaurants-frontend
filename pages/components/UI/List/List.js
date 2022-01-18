export default function List(props) {
    return 	<ul>
        {props.list.data.map((el) => {
            return <li key={el.id}>{el.attributes.name}</li>
        })}
    </ul>
}