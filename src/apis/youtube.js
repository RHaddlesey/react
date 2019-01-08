import axios from 'axios';

const KEY = 'AIzaSyCTRo_3I2V_KKU8lpM86Cvrin9KOfFZJvw';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
	},
});
