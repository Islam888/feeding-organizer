const handleClick = () => {
    const date = new Date()
    const day = date.toJSON().slice(0,10).replace(/-/g,'/');
    const hour = date.getHours()
    const minute = date.getMinutes()
    const body = document.body
    console.log(`${day} - ${hour}:${minute}`)
    const feedingTimeElement = document.createElement('section')
    feedingTimeElement.innerText = `${day} - ${hour}:${minute}`
    body.appendChild(feedingTimeElement)
}