const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

async function setup() {
	const db = await open({
		filename: './database.sqlite',
		driver: sqlite3.Database,
	});
	await db.exec(`
		CREATE TABLE IF NOT EXISTS dishes (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			title TEXT,
			description TEXT,
			image TEXT,
			price TEXT,
			category TEXT
		)
	`);
}

setup().catch(error => console.error('Error initializing database:', error));
