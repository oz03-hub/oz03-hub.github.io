export async function get_weather(lat, lng) {
    const params = {
        latitude: [lat],
        longitude: [lng],
        current: 'temperature_2m,is_day,precipitation,wind_speed_10m'
    };

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${params.latitude}&longitude=${params.longitude}&current=${params.current}`;
    console.log(url);
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.current;
    } catch (e) {
        console.error('Error fetching weather:', e);
        return null;
    }
}
