let count = 0;

function Menu(){
    const navStyle = document.querySelector('#nav')

    if(window.innerWidth <= 600){
        if(navStyle.style.display === 'none'){
            navStyle.style.display = 'block';
        }else{
            navStyle.style.display = 'none';
        }
    }
}

