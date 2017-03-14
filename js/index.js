// Detect Key Events
// $(window).on("keydown", function(event){

var osc = {};

// 键盘按下事件
$(window).keydown(function (event) {
    var code = (event.keyCode ? event.keyCode : event.which);
    if (osc[code]){
        return;
    }
    //给当前点击的键一个active类名高亮
    $("li[data-code='" + code + "']").addClass("active");
    var key = $("li[data-code='" + code + "']").data("key");
    var code = $("li[data-code='" + code + "']").data("code");
    console.log("KEYON:" + key + "/" + code + "@" + event.timeStamp);
    // startSound(code);
});

//键盘弹起事件
$(window).keyup(function (event) {
    var code = (event.keyCode ? event.keyCode : event.which);
    $("li[data-code='" + code + "']").removeClass("active");
    var key = $("li[data-code='" + code + "']").data("key");
    var code = $("li[data-code='" + code + "']").data("code");
    console.log("KEYOFF:" + key + "/" + code + "@" + event.timeStamp);
    if (!osc[code])
        return;
    // stopSound(code);
});


// li标签鼠标悬浮事件---变色
$("li").mousedown(function (event) {
    $(this).addClass("active");
    var key = $(this).data("key");
    var code = $(this).data("code");
    console.log("MOUSEON:" + key + "/" + code + "@" + event.timeStamp);
    // startSound();
});

$("li").mouseup(function (event) {
    $(this).removeClass("active");
    var key = $(this).data("key");
    var code = $(this).data("code");
    console.log("MOUSEOFF:" + key + "/" + code + "@" + event.timeStamp);
    // stopSound();
});


//声音
var audio=document.getElementById('audio1');
audio.autoplay='autoplay';
//键盘监听事件(按下弹起)
$(document).keypress(function(event){
    var s = '';
    $('#btn').text(s+event.keyCode);
    console.log(event.keyCode);
    switch (event.keyCode){
        case 113:
        case 97:
        case 122:
            audio.src = 'rideo/1.C(do).ogg';
            break;
        case 119:
        case 115:
        case 120:
            audio.src = 'rideo/2.D(re).ogg';
            break;
        case 101:
        case 100:
        case 99:
            audio.src = 'rideo/3.E(mi).ogg';
            break;
        case 114:
        case 102:
        case 118:
            audio.src = 'rideo/4.F(fa).ogg';
            break;
        case 116:
        case 103:
        case 98:
            audio.src = 'rideo/5.G(sol).ogg';
            break;
        case 121:
        case 104:
        case 110:
            audio.src = 'rideo/6.A(la).ogg';
            break;
        case 117:
        case 106:
        case 109:
            audio.src = 'rideo/7.B(si).ogg';
            break;
    }
})


/*function startSound(key) {
    ran = Math.floor((Math.random() * 500) + 10);
    var o = osc[key] = new Tone.Oscillator(ran, "triangle")
    env = new Tone.AmplitudeEnvelope();
    o.connect(env);
    env.toMaster();
    o.start();
    env.triggerAttack();
}
function stopSound(key) {
    env.triggerRelease();
    osc[key].stop();
    osc[key] = 0;
}*/