const pages = [
   {name:"home",url:"index.html"},
    {name:"fashion",url:"fashion.html"}
    
];

function searchPage(){
         const getdata = document.querySelector(".search-input").value.trim().toLowerCase();

         if(!getdata){
            alert("Empty Search Please Try Again");
            return;
         }

         const result = pages.find(element=> element.name.toLowerCase().includes(getdata));
         if(result){
            window.location.href = result.url;
         }
         else{
            alert("page not found");
         }

         //       pages.find((element)=>{
         //       if(element.name.toLowerCase().includes(getdata)){
         //         window.location.href = element.url;
         //       }
         //       else{
         //        alert("not found");
         //        return;
         //       }
         // });
};

const value = document.getElementById("logoo");
const arr = ["Fashion","Cloths","Latest Trends","Traditionals"];
let count = 0;

setInterval(function showData(){
           value.textContent = arr[count];
           count++;
           if(count===arr.length){
            count=0;
           }
},4000);


const startDate = new Date().getTime();
const endDate = new Date("30 oct 2026 23:19:00").getTime();

 let set = setInterval(function DiscountHours(){
            const nowDate = new Date().getTime();
            const distancepanding = endDate - nowDate;

            const hours = Math.floor(distancepanding%(24*60*60*1000)/(60*60*1000));
             const minutes = Math.floor(distancepanding%(60*60*1000)/(60*1000));
             const seconds = Math.floor(distancepanding%(60*1000)/(1000));
            const value = document.getElementsByClassName("countdown");
            for(let i = 0;i<value.length;i++){
               value[i].innerHTML = hours;
            }

             const valuetwo = document.getElementsByClassName("minu");
            for(let i = 0;i<value.length;i++){
               valuetwo[i].innerHTML = minutes;
            }

             const valuethree = document.getElementsByClassName("seco");
            for(let i = 0;i<value.length;i++){
               valuethree[i].innerHTML = seconds;
            }

            if(distancepanding<=0){
              clearInterval(set);
              let val = document.getElementsByClassName("heading");
              for(let i=0;i<val.length;i++){
                 val[i].innerHTML = "Offer finish";
              }
            }
},1000);


