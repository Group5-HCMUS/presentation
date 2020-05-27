import http from "k6/http";

export let options = {
    vus: 1000, // 1000 virtual user
    duration: '600s',
}

export default function() {
    let response = http.get("https://dacnpm-group05.herokuapp.com");
};
