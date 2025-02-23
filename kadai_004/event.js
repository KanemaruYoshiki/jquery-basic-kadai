$('.box').on('load', function(){
  console.log('loadイベントが発生しました');
});
 
$('.box').on('scroll', function() {
    console.log('scrollイベントが発生しました');
});