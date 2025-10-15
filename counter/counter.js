let plus = document.querySelector('.plus')
let box = document.querySelector('.counterbox')
let minus = document.querySelector('.minus')
let count = 0
function updatecount()
{
    box.innerText = count
    if(count==0)
    {
        box.style.background = 'grey'
    }
    else if(count>0)
    {

        box.style.background = 'green'
    }
    else
    {

        box.style.background = 'red'
    }
}
updatecount()

plus.addEventListener('click',()=>{
    if(count<10)
    {
        count++
        updatecount()
    }
})

minus.addEventListener('click',()=>{
    if(count>-10)
    {
        count--
        updatecount()
    }
})

function resetcount()
{
    count = 0
    updatecount()
}