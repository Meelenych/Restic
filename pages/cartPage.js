import dynamic from 'next/dynamic';

const CartPage = dynamic(() => import('../pages/cart'), {
	ssr: false,
});

export default CartPage;
