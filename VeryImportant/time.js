

function exact(time){
    let res=[]
    let show = time.split(":")
    let hour = show[0]
    let min = show[1]
    let day = show[2]
    if(hour==12){
        return time;
    }else if(day==="PM"){
        let nHour = Number(hour)+12
        res.push(nHour,min)
    }else{
        return time;
    }
    return res.join(":")
}
console.log(exact("9:12 PM"))