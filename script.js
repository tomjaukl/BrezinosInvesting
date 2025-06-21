const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "d1beighr01qsbpuci11gd1beighr01qsbpuci120"; // Your actual API key
const finnhubClient = new finnhub.DefaultApi();

finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log(data);
    }
});