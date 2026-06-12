const url1 = 'https://api.api-ninjas.com/v1/iplookup?address=';
const url2 = 'https://api.api-ninjas.com/v1/validateemail?email=';
const key = "VKGe2sIZjSOB2ifXsKVfsyk8oHc1frzz90wyCWyn";

const input = document.querySelector("#input");
const button = document.querySelector("#loadBtn");
const output = document.querySelector("#output");
const checkbox1 = document.querySelector("#api1Check");
const checkbox2 = document.querySelector("#api2Check");

button.addEventListener("click", chooseApi);

checkbox1.addEventListener('change', () => {
    input.value = "8.8.8.8";

    if (checkbox1.checked) {
        checkbox2.checked = false;
    }
});

checkbox2.addEventListener('change', () => {
    input.value = "google@gmail.com";

    if (checkbox2.checked) {
        checkbox1.checked = false;
    }
});

async function chooseApi(event) {
    event.preventDefault();
    if (checkbox1.checked) {
        if (/[a-zA-Z]/.test(input.value) || input.value.length > 15 || input.value.length < 7) {
            output.textContent = `Enter correcrt IP format (has to be IPv4)`;
        }
        else {
            const result = await getData(url1);

            if (!result) return;

            output.textContent = `Country: ${result.country}\nRegion: ${result.region}\nTimezone: ${result.timezone}`;
        }

    }
    else if (checkbox2.checked) {
        checkbox1.checked = false;

        if (!input.value.includes("@")) {
            output.textContent = `Enter correcrt email (@ missing)`;
        }
        else {
            const result = await getData(url2);

            if (!result) return;

            output.textContent = `Is valid: ${result.is_valid}\nDomain: ${result.domain}\nPublic: ${result.is_public}`;
        }
    }
}

async function getData(url) {
    output.textContent = "Loading...";

    const response = await fetch(url + input.value, {
        method: "GET",
        headers: {
            "X-Api-Key": key
        }
    });

    if (!response.ok) {
        output.textContent = "API error: " + response.status;
        return null;
    }

    return await response.json();
}