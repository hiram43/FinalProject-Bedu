window.onload = function()
{

const urlap ='https://api.apify.com/v2/key-value-stores/vpfkeiYLXPIDIea2T/records/LATEST?disableRedirect=true'



function Apicall(StartURL){


fetch(StartURL)
.then(response => response.json())
.then(data =>{
    const Arraym =Object.entries(data.State)
    
        console.log(Arraym)
        Arraym.forEach(element => {
            console.log(element[0])
            const seconA= Object.entries(element[1])
            const NewNum = seconA.join();
            const NewString = NewNum.split(",")
            const NewLine= document.getElementById("Ciudad");
            
            NewLine.innerHTML +=`<tr> <th> ${element[0]}</th><td>  ${NewString[1]} </td> <td> ${NewString[3]}</td> </tr> `
            console.log(NewNum)
            
        });
        
  
    //console.log(data.State);
    //console.log(data.State.length)

})

}

Apicall(urlap);


function dateTota(){
  const NewDate =  document.getElementById("fecha");
  const DateYear = new Date();
  let Year =DateYear.getFullYear();
  let Month = DateYear.getMonth();
  let Day = DateYear.getDay();
  

  
  const FullYear = `${Day}/${Month}/${Year}`
  NewDate.innerHTML=`<span class="label success">Datos actualizados a la fecha ${DateYear}</span>`
    
}

dateTota();


};