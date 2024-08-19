const { open } = require('sqlite');
const sqlite3 = require('sqlite3');
const dishes = require('./dishes.json');

async function populate() {
	const db = await open({
		filename: './database.sqlite',
		driver: sqlite3.Database,
	});
	for (const dish of dishes.dishes) {
		await db.run(
			'INSERT INTO dishes (title, description, image, price, category) VALUES (?, ?, ?, ?, ?)',
			[dish.title, dish.description, dish.image, dish.price, dish.category],
		);
	}
	console.log('DB populated successfully');
}

populate().catch(error => console.error('Error populating database:', error));
