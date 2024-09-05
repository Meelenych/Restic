import supabase from '../../../db';

export default async function handler(req, res) {
	const { id } = req.query;
	const { data, error } = await supabase
		.from('menu')
		.select('*')
		.eq('id', id)
		.single();

	if (error) {
		console.error('Error fetching dish:', error);
		return res.status(500).json({ error: 'Internal Server Error' });
	}

	if (data) {
		return res.status(200).json(data);
	} else {
		return res.status(404).json({ error: 'Dish not found' });
	}
}
