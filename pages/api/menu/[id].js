import { openDb } from '../../../db/openDb';

export default async function handler(req, res) {
	const { id } = req.query;
	const db = await openDb();

	try {
		const dish = await db.get('SELECT * FROM dishes WHERE id = ?', [id]);
		if (dish) {
			res.status(200).json(dish);
		} else {
			res.status(404).json({ error: 'Dish not found' });
		}
	} catch (error) {
		console.error('Error fetching dish:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}
