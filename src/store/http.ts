import { ajax } from "rxjs/ajax";

const apiUrl = "https://fakestoreapi.com";
const getApi = (path: string) => {
     return apiUrl + path;
};

export const http = {
     get: (path: string) => {
          return ajax({ url: getApi(path), method: "GET" });
     },
     patch: (path: string, body: any) => {
          return ajax({ url: getApi(path), method: "PATCH", body });
     },
};
