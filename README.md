Testing Practice

React / TypeScript を使用したテスト・CI/CDの学習プロジェクト

単体テスト・結合テストの実装から、CI/CDによるテスト・ビルド・デプロイの自動化まで構築しました。

Live Demo ｜ GitHub Repository

目次

概要

使用技術

実装内容

CI/CDの構成

起動方法

学習目的

概要

Webアプリケーション開発におけるテストの基本と、開発工程の自動化を学習するために作成したプロジェクトです。

項目

内容

プロジェクト名

Testing Practice

フロントエンド

React / TypeScript

開発環境

Vite

テスト環境

Vitest

公開環境

Vercel

使用技術

技術

用途

React

UI構築

TypeScript

型安全な開発

Vite

開発環境・ビルド

Vitest

単体テスト

React Testing Library

コンポーネントテスト

MSW

APIモック

GitHub Actions

CI

Vercel

CD・デプロイ

実装内容

1. 単体テスト（Unit Testing）

使用技術：Vitest

関数やコンポーネントの動作確認

正常系・異常系のテスト

モック関数（vi.fn()）を使用したテスト

2. 結合テスト（Integration Testing）

使用技術：React Testing Library / MSW

APIから取得したデータの表示確認

ローディング状態の確認

API通信失敗時のエラー表示確認

MSWによるAPIレスポンスのモック

3. CI（継続的インテグレーション）

使用技術：GitHub Actions

GitHubへのPushやPull Requestをきっかけに、以下を自動実行する仕組みを構築しました。

テストの自動実行

TypeScriptの型チェック

本番用ビルドの確認

4. CD（継続的デプロイ）

使用技術：Vercel

GitHubリポジトリとVercelを連携し、main ブランチへのPushをきっかけに自動デプロイする仕組みを構築しました。

GitHubとの連携

本番環境への自動デプロイ

公開URLでの動作確認

CI/CDの構成

       GitHub Push
            |
      +-----+-----+
      |           |
      v           v
 GitHub Actions  Vercel
      |           |
   +--+--+        v
   |     |      Build
   v     v        |
 Test  Build      v
   |     |      Deploy
   +--+--+        |
      |           v
   CI完了       Production

※ GitHub ActionsによるCIとVercelによるデプロイは、現在それぞれ独立して実行されます。

起動方法

1. リポジトリをクローン

git clone https://github.com/yuito-code/testing-practice.git

2. ディレクトリへ移動

cd testing-practice

3. パッケージをインストール

npm install

4. 開発サーバーを起動

npm run dev

5. テストを実行

npx vitest run

6. ビルドを実行

npm run build

学習目的

本プロジェクトでは、以下の内容を習得することを目的としています。

テストコードの基本的な書き方と設計

単体テストと結合テストの違い

API通信を含むコンポーネントのテスト

CI/CDの仕組みと自動化

開発からデプロイまでの一連の流れ
