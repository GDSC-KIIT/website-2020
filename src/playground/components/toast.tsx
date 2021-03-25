import { ToastContainer, toast, ToastOptions } from 'react-toastify';

const defaultOptions = {
	autoClose: 4000,
	hideProgressBar: false,
	newestOnTop: true,
	closeOnClick: true,
	rtl: false,
	pauseOnFocusLoss: true,
	draggable: true,
	pauseOnHover: true,
	limit: 5,
};

export function ToastInjector({ options = {} }: IToastInjectorProps) {
	const applyingOptions = { ...defaultOptions, ...options };
	return (
		<div>
			<ToastContainer {...applyingOptions} />
		</div>
	);
}

let timer: ReturnType<typeof setTimeout>;
export function showToast({ text, type, position = 'top-left', options = {} }: IShowToastOptions) {
	timer = setTimeout(() => console.log(), 1000);

	toast(text, { position, type, ...options });
}

interface IToastInjectorProps {
	options?: ToastOptions;
}

interface IShowToastOptions {
	text: string;
	type: 'error' | 'success' | 'info';
	position?: 'top-right' | 'top-left';
	options?: ToastOptions;
}
