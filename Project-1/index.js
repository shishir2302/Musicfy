
// document.getElementById('play').innerHTML="shishir singh"
let beat = new Audio('srk.mp3')
let progress= document.getElementById('progress')
let PauPlay= document.getElementById('PauPlay')

// beat.onloadedmetadata=function(){
//     progress.value=beat.currentTime
//     progress.max=beat.duration
    
// }
function player(){

    if(beat.paused){
        beat.play()
        PauPlay.classList.remove('fa-play-circle')
        PauPlay.classList.add('fa-pause-circle')
    }
    else{
        beat.pause()
        PauPlay.classList.remove('fa-pause-circle')
        PauPlay.classList.add('fa-play-circle')
    }
    
}

if(beat.play()){
    setInterval(()=>{
        progress.value=beat.currentTime

    },1000)
    // progress.max=beat.duration
}

progress.onchange = function(){
    // if(beat.paused){
    // }
        beat.currentTime=progress.value
        beat.duration=progress.max

}




