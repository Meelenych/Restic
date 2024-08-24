import { openDb } from '../../db/openDb.js'; // Adjust based on your actual export/import

export default async function handler(req, res) {
	try {
		const db = await openDb();
		const menuItems = await db.all('SELECT * FROM dishes');
		console.log('api db menu', db);
		console.log('menuItems', menuItems);
		res.status(200).json(menuItems);
	} catch (error) {
		console.error('Error fetching menu items:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}
