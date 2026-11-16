import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

export const server = setupServer(
  http.get("https://example.com/api/users", () => {
    return HttpResponse.json([
      { id: 1, name: "Taro"},
      { id: 2, name: "Hanako"},
    ]);
  })
);