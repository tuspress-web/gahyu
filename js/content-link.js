function loadContentLink(){

  let html = `<h1 style="text-align:center;color:#d36015;">モーダルウィンドウのデモ</h1>
  <p>リンクテキストをクリックするとモーダルウィンドウを表示させます。モーダルウィンドウ周りのオーバーレイをクリックすると終了します。</p>

  <HR style="margin: 3em 0 ;">

  <!-- ここからモーダルウィンドウ -->
  <div id="modal-content">
  <iframe src="content-link.html" height="100%" width="100%">
  <!-- モーダルウィンドウのコンテンツ開始 -->
  <p>モーダルウィンドウのコンテンツをHTMLで自由に編集することができます。画像や、動画埋め込みなど、お好きなものを入れて下さい。</p>
  <p>「閉じる」か「背景」をクリックするとモーダルウィンドウを終了します。</p>
  </iframe>
  <p><a id="modal-close" class="button-link">閉じる</a></p>
  <!-- モーダルウィンドウのコンテンツ終了 -->
  </div>

  <p><a id="modal-open" class="button-link">クリックするとモーダルウィンドウを開きます。</a></p>
  <!-- ここまでモーダルウィンドウ -->


  <HR style="margin: 3em 0 ;">



  <p style="text-align:center"><a href="https://syncer.jp/jquery-modal-window">配布元: Syncer</a></p>`;

  $("#links").html('html');

}
