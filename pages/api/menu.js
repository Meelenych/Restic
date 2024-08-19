import { openDb } from '../../db';

export default async function handler(req, res) {
	const db = await openDb();
	const menuItems = await db.all('SELECT * FROM dishes');
	res.json(menuItems);
}
