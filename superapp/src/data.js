export const data =
{
    "login": "mojombo",
    "id": 1,
    "node_id": "MDQ6VXNlcjE=",
    "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mojombo",
    "html_url": "https://github.com/mojombo",
    "followers_url": "https://api.github.com/users/mojombo/followers",
    "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
    "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
    "organizations_url": "https://api.github.com/users/mojombo/orgs",
    "repos_url": "https://api.github.com/users/mojombo/repos",
    "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mojombo/received_events",
    "type": "User",
    "site_admin": false
}

export const weatherDetails = {
    "coord": {
        "lon": -0.1257,
        "lat": 51.5085
    },
    "weather": [
        {
            "id": 802,
            "main": "Clouds",
            "description": "thunderstorm with light rain",
            "icon": "03d"

            // "light rain"(id: 500)
            // "moderate rain"(id: 501)
            // "heavy intensity rain"(id: 502)
            // "light intensity shower rain"(id: 511)
            // "heavy intensity shower rain"(id: 520)
            // "ragged shower rain"(id: 521)
            // "freezing rain"(id: 512)
            // "thunderstorm with light rain"(id: 522)
            // "thunderstorm with rain"(id: 531)
        }
    ],
    "base": "stations",
    "main": {
        "temp": 9.81,
        // if units = metric then temp = celsius 
        // if units = imperial then temp = faranhite 
        // if units is not mentioned in api then temp is kelvin
        // celsius => kelvin - 273.15 
        //  fahrenheit = (kelvin - 273.15) * 9/5 + 32
        // °F = °C * 1.8 + 32
        // °C = (°F - 32) / 1.8
        "feels_like": 9.39,
        "temp_min": 7.38,
        "temp_max": 11.67,
        "pressure": 1021,
        "humidity": 90
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.54,
        "deg": 310
    },
    "clouds": {
        "all": 39
    },
    "dt": 1718860681,
    "sys": {
        "type": 2,
        "id": 2093698,
        "country": "GB",
        "sunrise": 1718854978,
        "sunset": 1718914877
    },
    "timezone": 3600,
    "id": 2643743,
    "name": "London",
    "cod": 200
}