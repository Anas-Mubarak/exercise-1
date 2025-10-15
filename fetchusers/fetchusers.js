let userboxes = document.querySelectorAll('.userbox')

async function fetchusers() {
    let response = await fetch('https://randomuser.me/api/?results=5')
    let result = await response.json()
    console.log(result)
    main(result)
}

fetchusers()

function main({results})
{
    i=0
    for(let userbox of userboxes)
    {
        let {picture:{large},name:{title,first,last},email} = results[i]
        // console.log(title+first+last)
        // console.log(large)
        console.log()
        userbox.children[0].style.background = `url(${large}) no-repeat`
        userbox.children[1].children[0].innerText = title+ ' '+ first+' '+last
        userbox.children[1].children[1].innerText = email
        i++
    }
}