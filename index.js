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

const typeWriter = document.getElementById('typewriter-text');
const text = 'Ticket System';

typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);

/* window.addEventListener('load', (event) => {
  showToast();
}); */

