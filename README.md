🧪 Testing Practice

React・TypeScriptを使用したテスト・CI/CDの学習プロジェクト

単体テスト・結合テストの実装から、GitHub ActionsによるCI、Vercelによる自動デプロイまで構築しました。

<p align="center">
  <a href="https://testing-practice.vercel.app/">
    <strong>🌐 Live Demo</strong>
  </a>
  &nbsp; | &nbsp;
  <a href="https://github.com/yuito-code/testing-practice">
    <strong>📂 GitHub Repository</strong>
  </a>
</p>

🛠 Tech Stack

<p align="left">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white" />
  <img src="https://img.shields.io/badge/Testing_Library-E33332?style=for-the-badge&logo=testinglibrary&logoColor=white" />
  <img src="https://img.shields.io/badge/MSW-FF6A33?style=for-the-badge&logo=msw&logoColor=white" />
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</p>

📋 Features & Implementation

01. Unit Testing

Vitest

describe / it / expect を使用したテスト作成

正常系・異常系のテスト

vi.fn() によるモック関数の利用

02. Integration Testing

React Testing Library / MSW

APIから取得したデータの表示確認

ローディング状態の確認

API通信失敗時のエラー表示確認

MSWによるAPIレスポンスのモック

03. Continuous Integration

GitHub Actions

Push・Pull Requestをきっかけに自動実行

Vitestによるテストの自動実行

TypeScriptの型チェック・ビルド確認

04. Continuous Deployment

Vercel

GitHubリポジトリとの連携

main ブランチへのPushによる自動デプロイ

公開URLでの動作確認

🔄 CI/CD Workflow

        GitHub Push
             |
             v
      GitHub Actions
             |
       +-----+-----+
       |           |
       v           v
    Testing      Build
       |           |
       +-----+-----+
             |
             v
        CI Success

        Vercel
           |
           v
     Auto Deployment
           |
           v
      Production

※ GitHub ActionsのCIとVercelのデプロイは、それぞれ独立して実行されます。

🎯 Learning Objectives

Webアプリケーション開発における品質管理を理解し、以下のスキルを身につけることを目的としています。

テストコードの設計・実装

API通信を含むコンポーネントのテスト

CI/CDの基本的な仕組みの理解

開発からデプロイまでの自動化

🚀 Getting Started

# リポジトリをクローン
git clone https://github.com/yuito-code/testing-practice.git

# ディレクトリに移動
cd testing-practice

# パッケージをインストール
npm install

# 開発サーバー起動
npm run dev

# テスト実行
npx vitest run

# ビルド
npm run build