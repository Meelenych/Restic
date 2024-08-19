import { openDb } from './db';

export async function initializeDb() {
	const db = await openDb();
	await db.exec(`
		CREATE TABLE IF NOT EXISTS dishes (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			title TEXT,
			description TEXT,
			image TEXT,
			price REAL,  -- Changed to REAL for numerical calculations
			category TEXT
		)
	`);
}
