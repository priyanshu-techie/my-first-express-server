let listInTheDOM=document.getElementById('theList');
let input=document.getElementById('input');
async function getData(){
    listInTheDOM.innerHTML=""
    let searchVal=input.value;
    let list= await fetch(`http://localhost:8000/api/${searchVal}`);
    let data =await list.json();
    data.forEach(e => {
        listInTheDOM.insertAdjacentHTML('beforeend',`<li>${e}</li>`);
    });
}

