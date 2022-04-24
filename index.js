let x;
let toast = document.getElementById("toast");
function showToast(){
    clearTimeout(x);
    toast.style.transform = "translateX(10px)";
    x = setTimeout(()=>{
        toast.style.transform = "translateX(400px)"
    }, 5000);
}
function closeToast(){
    toast.style.transform = "translateX(400px)";
}

/* window.addEventListener('load', (event) => {
  showToast();
}); */
