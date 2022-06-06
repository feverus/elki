import { Cottage } from '../interfaces'
import aframeUrl  from './url-api';

const getAframe = async (): Promise<Array<Cottage>|string> => {
	try {
		const response = await fetch(aframeUrl, {method: 'GET'});
		if (response.status===200) {
			return await response.json();
		} else {
			return String(response.status);
		}
	} catch (error) {
		if (error) {
			return (error as Error).message;
		}
	}
	return "Error";
}

export default getAframe;