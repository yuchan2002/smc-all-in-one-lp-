# SMC All-in-One 販売LP

TradingView用インジケーター「SMC All-in-One」(インジ本体+動画講義6章)の販売LP。
Stripe Payment Link決済、Railwayデプロイ前提。

## 構成
- `server.js` — express静的配信(`public/`)。`/healthz`あり。PORTは環境変数
- `public/index.html` — LP本体(単一HTML、CSS/JS込み)
- `public/tokushoho.html` / `privacy.html` — 法定ページ(【】が未記入プレースホルダー)
- `public/thanks.html` — Stripe決済後のリダイレクト先。TradingViewユーザー名回収動線
- `public/img/` — LP用画像置き場。生成済みのfavicon/OGP画像あり。product shot 7点は未配置(placeholderが自動表示される)
- `scripts/process-images.js` — `public/img/source/` の元画像を最大幅1400px+WebP化して `public/img/` に出力(`npm run images`)
- `DEPLOY.md` — Railway/Stripe設定手順とチェックリスト

## 重要な設計
- `index.html` 冒頭の `CONFIG` オブジェクトが唯一の設定箇所
  (STRIPE_PAYMENT_LINK / PRICE / PRICE_BEFORE / PRODUCT_NAME)
- CTAは2種: ヘッダー/ヒーロー=#priceへスクロール、価格カード内と追従バー=Stripeへ直接遷移(`.js-pay`のJS制御)
- `img[data-fallback]` はonerrorでスタイル付きplaceholderに置換される。`public/img/`に
  solution.webp / module1.webp / module2.webp / rr.webp / result1-3.webp を置くと表示される
- OGP/favicon: `<head>`にog:*・twitter:*タグとfavicon一式を設定済み。`og:url`/`og:image`等の
  `YOUR-DOMAIN.up.railway.app` はRailwayデプロイ後に実ドメインへ差し替えが必要
- ブランドトークン: bg #0b0e13 / card #121722 / cyan #00ffff / gold #e8c15a / green #2ecc71
  フォント: Chakra Petch(英字ラベル) + Noto Sans JP

## 守ること
- 免責事項・FAQ最終項(投資助言ではない旨)・特商法リンクは削除しない(Stripe審査と金商法配慮のため)
- 「利益保証」と読める文言を追加しない
- 単一HTML構成を維持(ビルドツール導入しない。process-images.jsはビルド不要のデプロイ前一回限りのユーティリティ)

## よくある次のタスク
- Stripe本番リンク・実価格への差し替え
- thanks.htmlのmailtoをLINE公式アカウントURLに差し替え
- product shot画像(7点)の配置とWebP化(`npm run images`)
- og:url/og:imageのドメイン差し替え
- Railwayへのデプロイ(DEPLOY.md参照)
