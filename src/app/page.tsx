import Image from 'next/image';

export default function Home() {
	return (
		<main className='flex justify-items-center items-center'>
			<h1 className='text-blue-600 text-lg font-bold'>New Restic</h1>
			<p className='text-sm text-cyan-900'>Welcome to our restaurant!</p>
			<p className='text-sm text-cyan-900'>We serve the best food in town!</p>
		</main>
	);
}
