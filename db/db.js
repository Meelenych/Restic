import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Open a connection to SQLite database
export async function openDb() {
	return open({
		filename: './database.sqlite',
		driver: sqlite3.Database,
	});
}

// Create a script to initialize your database
async function setup() {
	const db = await openDb();

	// Create the dishes table
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

	// Insert data into the dishes table
	const dishes = [
		{
			title: 'Galactic Gumbo',
			description:
				"A spicy blend of Neptune's spicy tentacles and Marsian red peppers, served with Martian moon rice.",
			image: '/webp/Galactic_Gumbo.webp',
			price: '3,00',
			category: 'food',
		},
		{
			title: 'Robot Oil Fondue',
			description:
				'Crispy lunar chips dipped in a hot pot of savory robot oil, infused with Plutonian herbs and Uranian spices.',
			image: '/webp/Robot_Oil_Fondue.webp',
			price: '1,00',
			category: 'food',
		},
		{
			title: 'Zorgon Zucchini Surprise',
			description:
				'Grilled Zorgon zucchinis stuffed with Andromedan cheese and topped with Saturnian rings of crispy bacon.',
			image: '/webp/Zorgon_Zucchini_Surprise.webp',
			price: '2,00',
			category: 'food',
		},
		{
			title: 'Quasar Quiche',
			description:
				'A celestial quiche made with Quasar eggs, Nova sausage, and a blend of interstellar cheeses, served in a cosmic crust.',
			image: '/webp/Celestial_Quiche.webp',
			price: '4,00',
			category: 'food',
		},
	];

	for (const dish of dishes) {
		await db.run(
			'INSERT INTO dishes (title, description, image, price, category) VALUES (?, ?, ?, ?, ?)',
			[dish.title, dish.description, dish.image, dish.price, dish.category],
		);
	}

	console.log('Database setup complete.');
}

setup();
