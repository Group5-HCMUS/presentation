import http from "k6/http";

export default function() {
    let response = http.get("https://dacnpm-group05.herokuapp.com");
};
