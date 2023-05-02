import { store } from '@/store';
import { loadingActions } from '@/store/slice/loadingSlice';

const useLoading = (): {
	showLoading: () => void;
	hiddenLoading: () => void;
} => {
	const showLoading = (): void => {
		store.dispatch(loadingActions.showLoading());
	};
	const hiddenLoading = (): void => {
		store.dispatch(loadingActions.hiddenLoading());
	};

	return { showLoading, hiddenLoading };
};

export default useLoading;
