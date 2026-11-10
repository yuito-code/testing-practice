import { describe, it, expect } from "vitest";
import { validateUser } from "./validateUser";

describe("ユーザー登録のテスト", () => {
  it("正しい値なら成功する", () => {
    const user = {
      name: "Taro",
      email: "test@example.com",
      password: "12345678",
    };

    const result = validateUser(user);

    expect(result).toBeNull();
  });

  it("名前が空欄ならエラーになる", () => {
    const user = {
      name: "",
      email: "test@example.com",
      password: "12345678",
    };

    const result = validateUser(user);

    expect(result).toBe("名前は必須です");
  });

  it("メールアドレスが空欄ならエラーになる", () => {
    const user = {
      name: "Taro",
      email: "",
      password: "12345678",
    };

    const result = validateUser(user);

    expect(result).toBe("メールアドレスは必須です");
  });

  it("パスワードが空欄ならエラーになる", () => {
    const user = {
      name: "Taro",
      email: "test@example.com",
      password: ""
    };

    const result = validateUser(user);

    expect(result).toBe("パスワードは必須です");
  });

  it("メールアドレスの形式が不正ならエラーになる", () => {
    const user = {
      name: "Taro",
      email: "testexam;le.com",
      password: "1245678",
    };

    const result = validateUser(user);

    expect(result).toBe("メールアドレスの形式が正しくありません");
  });

  it("パスワードが７文字ならエラーになる", () => {
    const user = {
      name: "taro",
      email: "test@example.com",
      password: "1234567",
    };

    const result = validateUser(user);

    expect(result).toBe("パスワードは８文字以上必要です");
  });

  it("パスワードが８文字なら成功する", () => {
    const user = {
      name: "Taro",
      email: "test@example.com",
      password: "12345678",
    };

    const result = validateUser(user);

    expect(result).toBeNull();
  });
});
