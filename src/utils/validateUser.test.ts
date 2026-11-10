import { beforeEach,describe, it, expect } from "vitest";
import { validateUser } from "./validateUser";

describe("ユーザー登録のテスト", () => {
  let user: {
    name: string;
    email: string;
    password: string;
  };

  beforeEach(() => {
    user = {
      name: "Taro",
      email: "test@example.com",
      password: "12345678",
    };
  });

  it("正しい値なら成功する", () => {
    const result = validateUser(user);

    expect(result).toBeNull();
  });

  it("名前が空欄ならエラーになる", () => {
    user.name = "";
    const result = validateUser(user);

    expect(result).toBe("名前は必須です");
  });

  it("メールアドレスが空欄ならエラーになる", () => {
    user.email = "";
    const result = validateUser(user);

    expect(result).toBe("メールアドレスは必須です");
  });

  it("パスワードが空欄ならエラーになる", () => {
    user.password = "";
    const result = validateUser(user);

    expect(result).toBe("パスワードは必須です");
  });

  it("メールアドレスの形式が不正ならエラーになる", () => {
    user.email = "test-example";
    const result = validateUser(user);

    expect(result).toBe("メールアドレスの形式が正しくありません");
  });

  it("パスワードが７文字ならエラーになる", () => {
    user.password = "1234567";
    const result = validateUser(user);

    expect(result).toBe("パスワードは８文字以上必要です");
  });

  it("パスワードが８文字なら成功する", () => {
    const result = validateUser(user);

    expect(result).toBeNull();
  });
});
