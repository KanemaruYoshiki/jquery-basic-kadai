$(function() {
  // id属性がchange-colorの要素がクリックされたら
  $('#change-color').on('click', function() {
    // 文字の色を変える
    $('#target').css('color', 'red');
  });
  // id属性がchange-textの要素がクリックされたら
  $('#change-text').on('click', function() {
    // 文字が切り替わる
    $('#target').text('Hello!');
  });
  // id属性がfade-outの要素がクリックされたら
  $('#fade-out').on('click', function() {
    // フェードアウトする
    $('#target').fadeOut(3000);
  });
  // id属性がfade-inの要素がクリックされたら
  $('#fade-in').on('click', function() {
    // フェードインする
    $('#target').fadeIn(2000);
  });
});