import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import{ describe, it, expect } from "vitest";
import RegisterForm from "./RegisterForm";

describe("ユーザー登録フォームのテスト", () => {
  it("名前が空欄ならエラーメッセージを表示する", async () => {
    const user = userEvent.setup();

    render(<RegisterForm />);

    await user.click(screen.getByRole("button",{ name: "登録"}));

    expect(screen.getByText("名前は必須です")).toBeInTheDocument();
  });

  it("名前を入力して登録するとエラーが表示されない", async () => {
    const user = userEvent.setup();

    render(<RegisterForm />);

    await user.type(screen.getByLabelText("名前"), "Taro");
    await user.click(screen.getByRole("button", { name: "登録"}));

    expect(screen.queryByText("名前は必須です")).not.toBeInTheDocument();
  });
  });