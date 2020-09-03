fetch('https://swapi.dev/api/species')
    .then(response=>response.json())
    .then(species=>{
        human=(species.results[0])
        droid=(species.results[1])
        wookie=(species.results[2])
        rodian=(species.results[3])
        hutt=(species.results[4])
        yoda=(species.results[5])
        trandoshan=(species.results[6])
        mon_camlari=(species.results[7])
        ewok=(species.results[8])
        sullustan=(species.results[9])

        const keysHumans=Object.keys(human)
        const valuesHumans=Object.values(human)
    })

const human_button=document.getElementById('human-button')
const human_attributes=document.getElementById('human-attributes')

const droid_button=document.getElementById('droid-button')
const droid_attributes=document.getElementById('droid-attributes')

const showAllHumans=document.getElementById('show_all_humans_button')

//BUTTON FOR SHOWING SOME HUMAN ATRIBUTES
human_button.addEventListener('click',()=>{
    let row=document.getElementById('human-row2')
    row.innerHTML==''?showHumans():row.innerHTML=''
})
//BUTTON FOR SHOWING SOME DROID ATRIBUTES
droid_button.addEventListener('click',()=>{
    let row=document.getElementById('droid-row2')
    row.innerHTML==''?showDroids():row.innerHTML=''
})
//BUTTON FOR SHOWING AAAALLLLLL HUMAN ATRIBUTES
showAllHumans.addEventListener('click',()=>{
    let mainlist=document.getElementById('show_all_humans_list')
    mainlist.textContent==''?showAll():mainlist.textContent=''
})
//FUNCTION FOR SHOWING SOME HUMAN ATTRIBUTES
function showHumans(){
    let humanval=Object.values(human)
    let myarray= [humanval[1],humanval[2],humanval[3],humanval[7]]
    let row2=document.getElementById('human-row2')    
    myarray.forEach(el=>{
        let td=document.createElement('td')
        td.innerHTML=el
        row2.appendChild(td)
    })
}
//FUNCTION FOR SHOWING SOME DROID ATTRIBUTES
function showDroids(){
    let droidval=Object.values(droid)
    let myarray= [droidval[1],droidval[2],droidval[3],droidval[7]]
    let row2=document.getElementById('droid-row2')    
    myarray.forEach(el=>{
        let td=document.createElement('td')
        td.innerHTML=el
        row2.appendChild(td)
    })
}
//FUNCTION SHOWING ALL HUMANS
function showAll(){
    let humanval=Object.values(human)
    let humankey=Object.keys(human)
    /*
    this is to long
    for(let i=1;  i<humankey.length-5;i++){
        let mainlist=document.getElementById('all-human-keys')
        let newitem=document.createElement('li')
        newitem.innerHTML=humankey[i]
        mainlist.appendChild(newitem)
    }
    for(let i=1;  i<humanval.length-5;i++){
        let mainlist=document.getElementById('all-human-values')
        let newitem=document.createElement('li')
        newitem.innerHTML=humanval[i]
        mainlist.appendChild(newitem)
    }
    */
   //this forEach goes over 2 arrays at the same time and puts them in a li
   humanval.forEach((hum,val)=>{
   let mainlist=document.getElementById('show_all_humans_list')
   let newitem=document.createElement('li')
   newitem.innerHTML=humankey[val]+' : '+hum
   mainlist.appendChild(newitem)
})
}


