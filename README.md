testing-practice

React・TypeScriptを使用した、単体テスト・結合テスト・CI/CDの学習用プロジェクトです。

テストコードの実装から、GitHub Actionsによるテスト・ビルドの自動実行、Vercelによる自動デプロイまで一通り構築しました。

デモ

公開URL：https://testing-practice.vercel.app/

GitHub：https://github.com/yuito-code/testing-practice

使用技術

React

TypeScript

Vite

Vitest

React Testing Library

MSW

GitHub Actions

Vercel

実装・学習内容

1. 単体テスト

Vitestを使用して、関数やコンポーネントの動作をテストしました。

describe / it / expect を使用したテスト作成

正常系・異常系のテスト

モック関数（vi.fn()）を使用したテスト

2. 結合テスト

React Testing LibraryとMSWを使用して、コンポーネントとAPIの連携をテストしました。

APIから取得したデータの表示確認

ローディング状態の確認

API通信失敗時のエラー表示確認

MSWによるAPIレスポンスのモック

3. CI（継続的インテグレーション）

GitHub Actionsを使用して、GitHubへのPushやPull Requestをきっかけに自動でテスト・ビルドを実行する仕組みを構築しました。

テストの自動実行

TypeScriptの型チェック

本番用ビルドの確認

4. CD（継続的デリバリー・デプロイ）

VercelとGitHubリポジトリを連携し、mainブランチへのPushをきっかけに自動デプロイされる仕組みを構築しました。

Vercelによる本番環境へのデプロイ

GitHubへのPushをきっかけとした自動デプロイ

デプロイ後の公開URLでの動作確認

学習目的

Webアプリケーション開発におけるテストの重要性を理解し、品質を保ちながら開発を進めるための基本的なテスト手法とCI/CDの仕組みを習得することを目的としています。