function orderByProps(obj, sortOrder) {
	const sortedArr = [];
	const abcSortedArr = [];

	for (const key in obj) {
		const newObj = { key: key, value: obj[key] };

		if (sortOrder.includes(key)) {
			sortedArr.push(newObj);
		} else {
			abcSortedArr.push(newObj);
		}
	}

	abcSortedArr.sort((a, b) => {
		if (a.key > b.key) {
			return 1;
		}
		return -1;
	});

	const arr = [...sortedArr, ...abcSortedArr];
	return arr;
}