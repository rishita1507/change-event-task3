const Netflix=document.getElementById("Netflix")

function onNetflix(eve){
    let value=eve.target.value;
    let allDivs=[...document.querySelectorAll('.card')];

    allDivs.forEach(d=>{
        d.classList.add('d-none');
    })
    let selectedDiv=[...document.querySelectorAll('.'+value)];
    selectedDiv.forEach(d=>{
        d.classList.remove('d-none')
    })

}
Netflix.addEventListener('change',onNetflix)