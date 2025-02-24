$(function() {
  // class属性が'btn'の要素がクリックされたら
  $('.btn').on('click', function() {
    // 「クリックしました！」と表示する
    $('.text-box').prop('value', 'クリックしました！');
  });
});