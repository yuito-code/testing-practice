// フリー練習帳

import { describe, it, expect } from "vitest";
import { add } from "./math";

describe("add関数", () => {
  it("1 + 2 は3になる". () => {
    expect(add(1, 2)).toBe(3);
  });

  it("5 + 5 は 10になる", () => {
    expect(add(5, 5)).toBe(10);
  });
});

// src / utils/ math.ts, math.test.ts

// math.ts
export const add = (a: number, b: number) => {
  return a + b;
};

export const multiply = (a: number, b: number) => {
  return a * b;
};

// src/utils/math.test.ts
import { describe, it, expect } from "vitest";
import { add , multiply } from "./math";

describe("add関数", () => {
  it("1 + 2 は　３になる", () => {
    expect(add(1,2)).toBe(3);
  });
});

describe("multiply関数", () => {
  it("3 * 4 は 12になる" , () => {
    expect(multiply(3, 4)).toBe(12);
  });
});

// src/ utils/validateUser.ts
type UserInput = {
  name: string;
  email: string;
  password: string;
};

export cont validateUser = (user: UserInput) => {
  if (!user.name) return "名前は必須です";

  if(!user.email) return "メールアドレスが必須です";

  if (!/^.test(user.email)) {
    return "メールアドレスg￥の形式が正しくありません";
  }

  if (user.password.length < 8) {
    return "パスワードは8文字以上です";
  }

  return null;
};

describe("ユーザー登録のテスト", () => {
  ket user: {
    name: string;
    email: string;
    password:string;
  };

  beforeEach(() => {
    user = {
      name: "Taro",
      email: "test@example.com",
      password: "12345678",
    };
  });
})


// src/utils/mock.test.ts
import { describe, it, vi } from "vitest";

describe("API通信のモックテスト",() => {
  it("ユーザー一覧を取得できる", async () => {
    const mockGetUsers = vi.fn().mockResolvedValue([
      { id: 1, name: "Taro" },
      { id: 2, name: "Hanako" },
    ]);

    const users = await mockGetUsers();

    expect(users).toHaveLength(2);
    expect(mockGetUsers).toHaveBeenCalledTimes(1);
  });
});

// src/ components/Counter.test.tsx 結合テスト

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expext} from "vitest";
import RegisterForm from "./RegisterForm";

describe("ユーザー登録フォームのテスト", () => {
  it("名前が空欄ならエラーメッセージを表示する", async () => {
    const user = userEvent.setup();

    render(<RegisterForm />);

    await user.click(screen.getByRole("button", { name: "登録"}));

    expect(screen.getByText("名前は必須です")).toBeInTheDocument();
  });

  it("名前を入力して登録するとエラーが表示されない", async () => {
    const user = userEvent.setup();

    render(<RegisterForm />);

    await user.type(screen.getByLabelText("名前"), "Taro");
    await user.click(screen.getByRole("button", { name: "登録"}));

    expect(screen.queryByText("名前は必須です")).not.toBeInTheDocument();
  })
})