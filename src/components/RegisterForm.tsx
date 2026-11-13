import { useState } from "react";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name) {
      setError("名前は必須です");
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

        <button type= "submit">登録</button>

        {error && <p>{error}</p>}
    </form>
  );
};

export default RegisterForm;