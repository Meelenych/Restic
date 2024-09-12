import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import supabase from '../../db';

const JWT_SECRET = process.env.JWT_SECRET;

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ message: 'Method not allowed' });
	}

	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).json({ message: 'Email and password are required' });
	}

	try {
		// Check if the user already exists
		const { data: existingUser, error: userError } = await supabase
			.from('users')
			.select('*')
			.eq('email', email)
			.single();

		if (existingUser) {
			return res.status(400).json({ message: 'User already exists' });
		}

		// Hash the password
		const salt = bcrypt.genSaltSync(10);
		const hashedPassword = bcrypt.hashSync(password, salt);

		// Save the user to the database
		const { data: newUser, error: insertError } = await supabase
			.from('users')
			.insert([{ email, password: hashedPassword }])
			.single();

		if (insertError) {
			return res
				.status(500)
				.json({ message: 'Error creating user', error: insertError });
		}

		// Generate JWT token
		const token = jwt.sign({ id: newUser.id, email: newUser.email }, JWT_SECRET, {
			expiresIn: '1h',
		});

		// Return the token
		return res.status(201).json({ message: 'User created successfully', token });
	} catch (error) {
		console.error('Error registering user:', error);
		return res.status(500).json({ message: 'Internal Server Error' });
	}
}
