GGJからエクスポートした画像の配置手順:

1. public/img/source/ フォルダを作成し、元画像(png/jpg)をそのまま置く
     solution.png / module1.png / module2.png / rr.png / result1.png / result2.png / result3.png
2. `npm run images` を実行
     → 最大幅1400pxにリサイズ + WebP化されたファイルが public/img/ 直下に出力される
        (solution.webp / module1.webp / module2.webp / rr.webp / result1.webp / result2.webp / result3.webp)
3. index.html は既にこれらの .webp ファイルを参照済み。画像が無い間はプレースホルダーが自動表示される。
