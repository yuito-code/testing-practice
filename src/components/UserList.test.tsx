import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { http, HttpResponse } from "msw";
import { server } from "../test/server";
import UserList from "./UserList";

describe("ユーザー一覧の結合テスト", () => {
  it("APIから取得したユーザー一覧を表示する", async () => {
    render(<UserList />);

    expect(screen.getByText("読み込み中...")).toBeInTheDocument();

    expect(await screen.findByText("Taro")).toBeInTheDocument();
    expect(screen.getByText("Hanako")).toBeInTheDocument();
  });

  it("API通信に失敗したらエラーメッセージを表示する", async () => {
    server.use(
      http.get("https://example.com/api/users", () => {
        return new HttpResponse(null, {
          status: 500,
        });
      })
    );

    render(<UserList />);

    expect(
      await screen.findByText("ユーザーの取得に失敗しました")
    ).toBeInTheDocument();
  })
});