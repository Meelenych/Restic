import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getUserByLogin } from '../../utils/getUser'; // Assume you have this utility function to get the user from the DB

const JWT_SECRET = process.env.JWT_SECRET;

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ message: 'Method not allowed' });
	}

	const { login, password } = req.body;

	if (!login || !password) {
		return res
			.status(400)
			.json({ message: 'Please provide both login and password' });
	}

	try {
		// Retrieve user from the database
		const user = await getUserByLogin(login);

		if (!user) {
			return res.status(401).json({ message: 'Invalid login or password' });
		}

		// Compare provided password with stored hashed password
		const isPasswordValid = await bcrypt.compare(password, user.password);

		if (!isPasswordValid) {
			return res.status(401).json({ message: 'Invalid login or password' });
		}

		// Generate JWT token
		const token = jwt.sign(
			{ id: user.id, login: user.login }, // Payload
			JWT_SECRET,
			{ expiresIn: '1h' }, // Token expires in 1 hour
		);

		res.status(200).json({ token });
	} catch (error) {
		console.error('Error logging in user:', error);
		res.status(500).json({ message: 'Server error' });
	}
}
