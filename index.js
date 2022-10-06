// window.onload=()=>
// {
//     var x=document.querySelector(".table")
//     alert(x.innerText);
// }
function display()
{
    document.querySelector(".alert").classList.toggle("hide")
}

function fun(e)
{
    console.log(e);
}
setInterval(()=>{
    var x=document.querySelector('[name="id"]').value
    var fact=1;
    for(var i=1;i<=x;i++)
    {
        fact=fact*i;
    }
    console.log(fact)
},1)