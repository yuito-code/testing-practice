export type User = {
  id: number;
  name: string;
};

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch("https://example.com/api/users");

  if(!response.ok) {
    throw new Error("ユーザー取得に失敗しました");
  }

  return response.json();
};