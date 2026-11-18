import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import UserList from "./UserList";

describe("ユーザー一覧の結合テスト", () => {
  it("APIから取得したユーザー一覧を表示する", async () => {
    render(<UserList />);

    expect(screen.getByText("読み込み中...")).toBeInTheDocument();

    expect(await screen.findByText("Taro")).toBeInTheDocument();
    expect(screen.getByText("Hanako")).toBeInTheDocument();
  });
});