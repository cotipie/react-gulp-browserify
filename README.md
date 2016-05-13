# react-gulp-browserify
gulpで監視してbrowserifyでjs依存関係管理。ReactはjsxでもES6でも可。Sassコンパイル、jquery動作。

## 導入
`npm install`  
`gulp`


## 構成
* dist - コンパイル済みファイル（gulp-serverはここがルート）
* app - ソース
  - js/views - Reactのビュー系（requireで依存解消）
  - js/js.js - jqueryとかの動くサンプル（requireで依存解消）
  - sass/index.scss - Sassでかける。コンパイル後コピーされる。
  - index.html - HTML。そのままdistにコピーされる
