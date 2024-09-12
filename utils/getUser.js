import supabase from '../db';

export const getUserByLogin = async login => {
	try {
		// Query the users table for a user with the provided login
		const { data, error } = await supabase
			.from('users')
			.select('*')
			.eq('login', login)
			.single(); // `single()` ensures only one result is returned

		if (error) {
			console.error('Error fetching user by login:', error);
			throw error;
		}

		return data; // Return the user data
	} catch (error) {
		console.error('Error fetching user by login:', error);
		throw error; // Rethrow the error to handle it in the API route
	}
};
