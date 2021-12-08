const clock=document.querySelector('.clock')

const tick=()=>{
    const date=new Date();

    const hrs=date.getHours()
    const min=date.getMinutes()
    const sec=date.getSeconds()
    console.log(sec)

    const html=`
    <span>${hrs}</span> :
    <span>${min}</span> :
    <span>${sec}</span>
    `
    clock.innerHTML=html
}

setInterval(tick,1000)
