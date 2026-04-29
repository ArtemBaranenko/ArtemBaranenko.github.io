const url = 'https://api.api-ninjas.com/v1/iplookup?address=';
const key = "VKGe2sIZjSOB2ifXsKVfsyk8oHc1frzz90wyCWyn";

const input = document.querySelector("#input");
const button = document.querySelector("#loadBtn");
const output = document.querySelector("#output");

button.addEventListener("click", getData);

async function getData() {
    output.textContent = "Loading...";

    const response = await fetch(url + input.value, {
        method: "GET",
        headers: {
            "X-Api-Key": key
        }
    });

    const result = await response.json();

    output.textContent = `Country: ${result.country}\nRegion: ${result.region}\nTimezone: ${result.timezone}`;
}
