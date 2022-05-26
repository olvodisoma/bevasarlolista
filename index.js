function render(arr){
    document.querySelector("ol").innerHTML=arr.map(obj=>`<li class="d-flex 
    justify-content-between"><span>${obj.nev} - ${obj.mennyiseg}</span> 
    <i id="${obj.id}" class="fa-solid fa-trash-can" onclick="kiveszi(event)"></i></li>`).join("")
}

render(adatok)





function hozzaad(){
    let nev=document.getElementById("bevisznev").value
    let mennyiseg=document.getElementById("beviszmennyiseg").value
    let newObj={}
    newObj.nev=nev
    newObj.mennyiseg=mennyiseg
    let maxIndex=adatok.reduce((acc,obj)=>obj.id>acc? obj.id : acc,0)
    console.log(maxIndex)
    newObj.id=maxIndex+1
    console.log(newObj)
    adatok.push(newObj)
    document.querySelector("ol").innerHTML+=`<li class="d-flex justify-content-between"><span>${newObj.nev} - ${newObj.mennyiseg}</span> <i id="${maxIndex}" class="fa-solid fa-trash-can" onclick="kiveszi(event)"></i><li>`
    document.getElementById("bevisznev").value=""
    document.getElementById("beviszmennyiseg").value=""
    
}

render(adatok)


function torol(){
    console.log("Klikk")
    document.querySelector("ol").innerHTML=""

}


function kiveszi(e){
    console.log(e.target.id)
    console.log(adatok.length)
    let newArrTomb=adatok.filter(obj=>obj.id!=e.target.id)
    adatok=newArrTomb
    render(adatok)
    
}