//use this to prank your friends at work

!(function(){
    //lets do it
    $('html, body').css({overflow: 'hidden'});
    var b = $('body');
    var top = $('<div style="cursor:none;background: #000; position: fixed; width: 100%; left: 0;top: 0;"></div>'),
        bot = $('<div style="cursor:none;background: #000; position: fixed; width: 100%; left: 0;bottom: 0; border-top: 1px solid #fff;"></div>');
    b.append(top.add(bot));

    b.one('click', function(e){
        e.preventDefault();
        if (document.documentElement.requestFullScreen) {
          document.documentElement.requestFullScreen()
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen()
        } else if (document.documentElement.webkitRequestFullScreen) {
          document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
        }
        setTimeout(function(){
            top.add(bot).animate({height: '50%'}, 300, function(){
                top.css({height: 100 + '%'})
                bot.animate({width: 0, left: 50 +'%'}, 400)
            });
        }, 2000);
    })
}());