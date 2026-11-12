import { describe, expect, it, vi} from "vitest";

describe("API通信のモックテスト", () => {
  it("ユーザー一覧を取得できる", async () => {
    const mockGetUsers = vi.fn().mockResolvedValue([
      {id: 1, name: "Taro"},
      {id: 2, name: "Hanako"},
    ]);

    const users = await mockGetUsers();

    expect(users).toHaveLength(2);
    expect(users[0].name).toBe("Taro");
    expect(users[1].name).toBe("Hanako");

    expect(mockGetUsers).toHaveBeenCalledTimes(1);
  })
})