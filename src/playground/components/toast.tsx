import { ToastContainer, toast, Flip, ToastOptions } from 'react-toastify';

const defaultOptions = {
	autoClose: 4500,
	hideProgressBar: false,
	newestOnTop: true,
	closeOnClick: true,
	rtl: false,
	pauseOnFocusLoss: true,
	draggable: true,
	pauseOnHover: true,
	limit: 5,
	closeButton: false,
	transition: Flip,
};

export function ToastInjector({ options = {} }: IToastInjectorProps) {
	const applyingOptions = { ...defaultOptions, ...options };
	return (
		<div data-testid="snack-message">
			<ToastContainer {...applyingOptions} />
		</div>
	);
}

export function showToast({
	text,
	type,
	position = 'top-right',
	duration = 4500,
	closeButton = false,
	delay = 0,
	options = {},
}: IShowToastOptions) {
	toast(text, {
		position,
		type,
		closeButton,
		autoClose: closeButton ? false : duration,
		delay,
		...options,
	});
}

export function showSuccessToast(msg: string) {
	showToast({ text: msg, type: 'error', position: 'top-right' });
}

export function showErrorToast(msg: string) {
	showToast({ text: msg, type: 'error', position: 'top-right' });
}

export function showWarningToast(msg: string) {
	showToast({ text: msg, type: 'warning', position: 'top-right', closeButton: true });
}

export function showCurrentPointToast(points: number) {
	showToast({
		text: `Current Points : ${points}`,
		type: 'info',
		position: 'top-left',
		closeButton: true,
		delay: 2000,
		duration: 6500,
	});
}

interface IToastInjectorProps {
	options?: ToastOptions;
}

interface IShowToastOptions {
	text: string;
	type: 'error' | 'success' | 'info' | 'warning';
	position?: 'top-right' | 'top-left';
	duration?: number;
	closeButton?: boolean;
	delay?: number;
	options?: ToastOptions;
}
