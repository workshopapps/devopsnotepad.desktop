import { useReducer, useCallback } from 'react';

// This is the state initial data
const initialState = {
	isLoading: false,
	error: { hasError: false, message: '' },
};

// This is the function that will be dispatched whenever an action is dispatched.
const fetchReducer = (state, action) => {
	if (action.type === 'LOADING') {
		return { ...state, isLoading: action.value };
	}
	if (action.type === 'ERROR') {
		return { ...state, error: action.value };
	}
	return initialState;
};

const useFetch = () => {
	// Managing state
	const [fetchState, dispatchFn] = useReducer(fetchReducer, initialState);

	// A function to hide error modal
	const hideModal = () => {
		dispatchFn({ type: 'ERROR', value: { hasError: false, message: '' } });
	};

	// A function to fetch data
	const fetchRequest = useCallback(
		async (requestConfig, getRequestData = () => {}) => {
			dispatchFn({ type: 'LOADING', value: true });
			dispatchFn({ type: 'ERROR', value: { hasError: false, message: '' } });
			try {
				// Fetching data using the configuration provided
				const response = await fetch(requestConfig.url, {
					method: requestConfig.method ? requestConfig.method : 'GET',
					body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
					headers: requestConfig.headers ? requestConfig.headers : {},
				});

				// If the response is not ok, throw an error
				if (!response.ok) {
					throw new Error(`${requestConfig.errorMessage}`);
				}

				// If the response is ok, get the data
				const responseBody = await response.json();

				// Send the data to the function that will use it
				getRequestData(responseBody);
			} catch (err) {
				// If an error occured, set the error state
				dispatchFn({
					type: 'ERROR',
					value: { hasError: true, message: err.message || 'An error ocurred' },
				});
			}
			// After the request has been made, set the loading state to false
			dispatchFn({ type: 'LOADING', value: false });
		},
		[]
	);

	// Destturing the state
	const { isLoading, error } = fetchState;

	// Returning the state and the functions
	return { isLoading, error, hideModal, fetchRequest };
};
export default useFetch;
