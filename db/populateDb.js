import { openDb } from './db';
import dishes from './dishes.json';

async function populateDb() {
	try {
		const db = await openDb();

		for (const dish of dishes) {
			await db.run(
				'INSERT INTO dishes (title, description, image, price, category) VALUES (?, ?, ?, ?, ?)',
				[dish.title, dish.description, dish.image, dish.price, dish.category],
			);
		}

		console.log('Dishes inserted successfully');
	} catch (error) {
		console.error('Error inserting dishes:', error);
	}
}

populateDb();
