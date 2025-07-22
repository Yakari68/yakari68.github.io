function toggleMenu(){
    const element = document.getElementById("collapse");
    element.classList.toggle("collapse-toggle");
    const btn = document.getElementById("toggle-btn");
    const hidden = document.getElementById("hidden-menu");
    const shown = document.getElementById("shown-menu");
    if (element.classList.contains("collapse-toggle")){
        hidden.classList.add("hidebtn");
        hidden.classList.remove("showbtn");
        shown.classList.remove("hidebtn");
        shown.classList.add("showbtn");
        btn.classList.add("rott");
        console.log("Show menu");
        console.log("Do a barrel roll");
    }else{
        hidden.classList.add("showbtn");
        hidden.classList.remove("hidebtn");
        shown.classList.remove("showbtn");
        shown.classList.add("hidebtn");
        btn.classList.remove("rott");
        console.log("Hide menu");
        console.log("Do a barrel roll");
    }
}
