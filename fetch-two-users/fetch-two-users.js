let userboxes = document.querySelectorAll('.userbox')
let seachname = document.querySelector('.searchname')
let userfilter = document.querySelector('.userfilter')


async function fetchresponse(link)
{
    let response = await fetch(link)
    let result = await response.json()
    return result
}

async function fetchusers() {
    let response1 = await fetchresponse('https://jsonplaceholder.typicode.com/posts')
    let response2 = await fetchresponse('https://jsonplaceholder.typicode.com/users')
    main(response1,response2)
}

fetchusers()

function main(response1,response2)
{
    // console.log(response1,response2)
    let placeholderobj = {}
    let i = 0,usid = 0
    response1.forEach(element => {
        let {userId:userid1} = element
        let {id:userid2} = response2[i]
        // console.log(userid2)
        if(!(userid1==userid2))
        {
            i++
        }
        let {id,...rest1} = response2[i]
        let {id:id2,userId,...rest2} = element
        placeholderobj[usid] = {...rest1,...rest2}
        usid++
    });
    console.log(placeholderobj)
}