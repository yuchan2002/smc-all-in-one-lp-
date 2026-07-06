# SMC All-in-One LP — Railwayデプロイ手順

## 1. デプロイ
1. このフォルダをGitHubリポジトリにpush(またはRailway CLIで `railway up`)
2. Railway → New Project → Deploy from GitHub repo
3. 自動でNode検出 → `npm start` で起動(PORT環境変数は自動)
4. Settings → Networking → Generate Domain(独自ドメインもここで設定可)

## 2. 公開前チェックリスト
- [ ] public/index.html 冒頭の CONFIG.STRIPE_PAYMENT_LINK を本番リンクに差し替え
- [ ] CONFIG.PRICE を実際の価格に
- [ ] public/tokushoho.html の【】箇所をすべて記入(法人名・業務責任者・所在地・連絡先)
- [ ] public/privacy.html の【販売業者名】を記入
- [ ] public/thanks.html のメールアドレス(support@example.com)を実アドレスまたはLINEリンクに差し替え
- [ ] public/img/source/ にGGJからエクスポートした画像7点を置いて `npm run images` を実行(WebP化・リサイズ)
- [ ] index.html の og:url / og:image / twitter:image を実ドメインに差し替え(現在 YOUR-DOMAIN.up.railway.app のまま)

## 3. Stripe側の設定
1. 商品カタログ → 商品追加(SMC All-in-One / 価格 / 通貨JPY)
2. 支払いリンクを作成
3. 支払いリンクの設定 → 「支払い後」→ カスタムURLにリダイレクト → `https://あなたのドメイン/thanks`
4. 設定 → ブランディングでロゴ・カラー(#0b0e13 / #00ffff)を設定すると決済画面の離脱が減る
5. 本番公開前にテストモードのリンクで一度決済フローを通すこと
