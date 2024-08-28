/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['localhost'], // Add your domain here
	},
};
console.log(process.env.NEXT_PUBLIC_API_URL);
export default nextConfig;
