type UserInput = {
  name: string;
  email: string;
  password: string;
};

export const validateUser = (user: UserInput) => {
  if (!user.name) return "名前は必須です";

  if(!user.email) return "メールアドレスは必須です";

  if(!user.password) return "パスワードは必須です";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
    return "メールアドレスの形式が正しくありません";
  }

  if (user.password.length < 8) {
    return "パスワードは８文字以上必要です";
  }

  return null;
};
