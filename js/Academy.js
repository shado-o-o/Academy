let video=document.querySelectorAll("video");
video[0].onplay=function(){
    video[1].pause();
    video[2].pause();
    video[3].pause();
    video[4].pause();
    video[5].pause();
    video[6].pause();
}
video[1].onplay=function(){
    video[0].pause();
    video[2].pause();
    video[3].pause();
    video[4].pause();
    video[5].pause();
    video[6].pause();
}
