Testing Practice

<p align="center">
  <strong>React / TypeScript を使用したテスト・CI/CDの学習プロジェクト</strong>
</p>

<p align="center">
  単体テスト・結合テストの実装から、CI/CDによるテスト・ビルド・デプロイの自動化まで構築しました。
</p>

<p align="center">
  <a href="https://testing-practice.vercel.app/">Live Demo</a>
  &nbsp; | &nbsp;
  <a href="https://github.com/yuito-code/testing-practice">GitHub Repository</a>
</p>

<h2 align="center">Tech Stack</h2>

<table align="center">
  <tr>
    <th>Category</th>
    <th>Technology</th>
  </tr>
  <tr>
    <td>Frontend</td>
    <td>React / TypeScript / Vite</td>
  </tr>
  <tr>
    <td>Unit Testing</td>
    <td>Vitest</td>
  </tr>
  <tr>
    <td>Integration Testing</td>
    <td>React Testing Library / MSW</td>
  </tr>
  <tr>
    <td>CI</td>
    <td>GitHub Actions</td>
  </tr>
  <tr>
    <td>CD</td>
    <td>Vercel</td>
  </tr>
</table>

<h2>Implementation</h2>

<section>
<h3>01. Unit Testing</h3>

<p><strong>Vitest</strong></p>

<ul>
  <li>関数やコンポーネントの動作確認</li>
  <li>正常系・異常系のテスト</li>
  <li>モック関数（vi.fn()）を使用したテスト</li>
</ul>
</section>

<section>
<h3>02. Integration Testing</h3>

<p><strong>React Testing Library / MSW</strong></p>

<ul>
  <li>APIから取得したデータの表示確認</li>
  <li>ローディング状態の確認</li>
  <li>API通信失敗時のエラー表示確認</li>
  <li>MSWによるAPIレスポンスのモック</li>
</ul>
</section>

<section>
<h3>03. Continuous Integration</h3>

<p><strong>GitHub Actions</strong></p>

<ul>
  <li>Push・Pull Request時の自動実行</li>
  <li>テストの自動実行</li>
  <li>TypeScriptの型チェック・ビルド確認</li>
</ul>
</section>

<section>
<h3>04. Continuous Deployment</h3>

<p><strong>Vercel</strong></p>

<ul>
  <li>GitHubリポジトリとの連携</li>
  <li>mainブランチへのPushによる自動デプロイ</li>
  <li>本番環境への公開</li>
</ul>
</section>

<h2>CI/CD Workflow</h2>

<pre align="center">
GitHub Push
     |
     +------------------+
     |                  |
     v                  v
GitHub Actions        Vercel
     |                  |
  +--+--+               v
  |     |             Build
  v     v               |
 Test  Build            v
  |     |             Deploy
  +--+--+               |
     |                  v
  CI Complete        Production
</pre>

<p><strong>Note:</strong> GitHub ActionsによるCIとVercelによるデプロイは、それぞれ独立して実行されます。</p>

<h2>Getting Started</h2>

<details>
<summary><strong>セットアップ・実行方法を表示</strong></summary>

<h3>1. Clone Repository</h3>

git clone https://github.com/yuito-code/testing-practice.git
cd testing-practice

<h3>2. Install Dependencies</h3>

npm install

<h3>3. Start Development Server</h3>

npm run dev

<h3>4. Run Tests</h3>

npx vitest run

<h3>5. Build</h3>

npm run build

</details>

<h2>Learning Objectives</h2>

<p>
  Webアプリケーション開発における品質管理と、開発工程の自動化について理解を深めることを目的としています。
</p>

<ul>
  <li>テストコードの設計・実装</li>
  <li>単体テストと結合テストの理解</li>
  <li>API通信を含むコンポーネントのテスト</li>
  <li>CI/CDによる開発工程の自動化</li>
  <li>開発からデプロイまでの一連の流れ</li>
</ul>
