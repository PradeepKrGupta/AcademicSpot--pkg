var menuIcon = document.querySelector(".menuicon");
var shortCut = document.querySelector(".shortcutlink");

// var teacherIntro = document.querySelector(".teacher_intro")

menuIcon.onclick = function () {
    shortCut.classList.toggle("smallsidebar");
    // teacherIntro.classList.toggle("expandIntro");
}

var paragraph1=document.querySelector(".para1");
var videodisplay = document.querySelector(".subject_video");
var video_play = document.querySelector(".videoplay");
var teacher_img1 = document.querySelector(".teacher_intro");
video_play.onclick = function () {
    videodisplay.classList.toggle("videoResume");
    teacher_img1.classList.toggle("teacherImage1");
    shortCut.classList.toggle("shortlink");
    paragraph1.classList.toggle("parag1");

}

var paragraph2=document.querySelector(".para2");
var materialsection=document.querySelector(".subject_material");
var material_play=document.querySelector(".materialplay");
var teacher_img2=document.querySelector(".teacher_intro");
var video_resume=document.querySelector(".subject_video");
material_play.onclick=function(){
    materialsection.classList.toggle("material_sub");
    teacher_img2.classList.toggle("teacherImg2");
    video_resume.classList.toggle("video_Resume");
    paragraph2.classList.toggle("parag2");
}

