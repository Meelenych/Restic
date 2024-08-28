import { openDb } from '../../../db/openDb.js';

export default async function handler(req, res) {
	const db = await openDb();
	try {
		const menuItems = await db.all('SELECT * FROM dishes');
		res.status(200).json(menuItems);
	} catch (error) {
		console.error('Error fetching menu items:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}
