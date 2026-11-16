import { useState } from "react";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name) {
      setError("名前は必須です");
      return;
    }

    if (!email) {
      setError("メールアドレスは必須です");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("メールアドレスの形式が正しくありません");
      return;
    }

    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">名前</label>
      <input
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />

      <label htmlFor="email">メールアドレス</label>
      <input
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />

      <button type= "submit">登録</button>

      {error && <p>{error}</p>}
    </form>
  );
};

export default RegisterForm;