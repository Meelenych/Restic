import supabase from '../../../db';

export default async function handler(req, res) {
	try {
		const { data, error } = await supabase.from('menu').select('*');
		if (error) {
			throw new Error(error.message);
		}
		res.status(200).json(data);
	} catch (error) {
		console.error('Error fetching data from Supabase:', error);
		res.status(500).json({ error: 'Failed to fetch data from Supabase.' });
	}
}
