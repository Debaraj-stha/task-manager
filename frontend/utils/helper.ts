export const capitalize=(str:string)=>{
    if(!str) return null
    return str.charAt(0).toUpperCase()+str.slice(1)

}

export const colorBasedOnName=(name:string)=>{
    let hash=0
    for(let i=0;i<name.length;i++){
        hash=name.charCodeAt(i)+((hash<<5)-hash)
    }
    const hue=Math.abs(hash)%360
    return `hsl(${hue},70%,50%)`;
}