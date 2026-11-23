import { useEffect, useState } from "react";
import { getUsers } from "../services/userApi";
import type { User } from "../services/userApi";

const UserList = () => {
  const [users, setUSers] = useState<User[]>([]);
  const [loading,setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUSers(data);
      } catch {
        setError("ユーザーの取得に失敗しました");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>読み込み中...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>ユーザー一覧 (自動デプロイ確認)</h2>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default UserList;