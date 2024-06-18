export default function specialAttack(obj) {
	const res = [];
	const { special } = obj;

	special.forEach((data) => {
		const { id, name, description = 'Описание недоступно', icon } = data;
		res.push({ id, name, description, icon });
	});

	return res;
}