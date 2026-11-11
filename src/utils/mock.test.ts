import { expect, it, vi } from "vitest";

it("ユーザー登録に正しい名前が渡される", () => {
  const mockRegister = vi.fn();

  mockRegister("Taro")

  expect(mockRegister).toHaveBeenCalledWith("Taro");
  expect(mockRegister).toHaveBeenCalledTimes(1);


})