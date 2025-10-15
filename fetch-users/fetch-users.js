let userboxes = document.querySelectorAll('.userbox')
let seachname = document.querySelector('.searchname')
let userfilter = document.querySelector('.userfilter')

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
        userbox.children[0].style.background = `url(${large}) no-repeat`
        userbox.children[1].children[0].innerText = title+ ' '+ first+' '+last
        userbox.children[1].children[1].innerText = email
        i++
    }

    userfilter.addEventListener('click',()=>{
        let fullnamelist = []
        for(let i=0;i<5;i++)
        {
            let {name:{title,first,last}} = results[i]
            fullnamelist.push(title+' '+first+' '+last)
        }
        console.log(seachname.value)
        let regexpression = seachname.value==''?new RegExp('.*'):new RegExp(seachname.value)
        let matchlist = fullnamelist.map((username)=>regexpression.test(`${username}`))
        console.log(matchlist)
        let i = 0
        for(let userbox of userboxes)
        {
            if(matchlist[i])
            {
                console.log(userbox)
                userbox.style.display = ''
            }
            else{
                userbox.style.display = 'none'
            }
            i++
        }
    })
}