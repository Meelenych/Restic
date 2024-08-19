import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Open a connection to SQLite database
export async function openDb() {
	return open({
		filename: './database.sqlite',
		driver: sqlite3.Database,
	});
}
