'use strict';
let parentElement =document.getElementById('salmon-cookies');
let hours=['6m','7am','8am','9am','10am','11am','12pm','1pm','2pm','3mp','4pm','5mp','6pm','7pm'];
let total =0;
let total2 =[]


function Cookie (name,min,mix,average,customerNum){
this.name=name;
this.min=min;
this.max=max;
this.average=average;
this.customerNum=customerNum
this.sum1=0;
}

Cookie.prototype.getCustomerNumber =function(){
    for(let i=0 ; i<hours.length;i++){
        let customerNumber=Math.ceil(getRandomNumber(this.min,this.max)*this.average);
        this.sum1=this.sum1+customerNumber;
        this.customerNum.push(customerNumber);
        total2[i]=total[i]+customerNumber;



    }
};

const parentElement = document.getElementById('salmonCookies');

let articleElement= document.createElement('article');
parentElement.appendChild(articleElement);

let table=document.createElement('table');
articleElement.appendChild(table);

let tr1 = document.createElement('tr');
table.appendChild(tr1);

function header (){

let thedaerElement =document.createElement('the');
tr1.appendChild(thedaerElement);
thedaerElement.textContent = 'location';

for (let i = 0 ; i<hours.length ; i++){

  let headerElement =document.createElement('the');
  tr1.appendChild(headerElement);
  headerElement.textContent = hours[i];
}

let location =document.createElement('the');
tr1.appendChild(location);
location.textContent = 'location Total';
}

Cookie.prototype.render = function(){


    let tr2 = document.createElement('tr');
    table.appendChild(tRow1);
  
    let count1 = document.createElement('td');
    tr2.appendChild(count1);
    count1.textContent = this.name;
  
    for (let x = 0 ; x<hours.length ; x++){
  
      let bodyElement =document.createElement('td');
      tr2.appendChild(bodyElement);
      bodyElement.textContent = this.customerNum[x];
    }
    let bodyElement =document.createElement('the');
    tr2.appendChild(bodyElement);
    tBody.textContent = this.sum1;
  
  
  };


  function footer (){
    let tr2 = document.createElement('tr');
    table.appendChild(tr2);
    let footerElement= document.createElement('footerElement');
    tr2.appendChild(footerElement);
    footerElement.textContent = 'Totals';
  
    for (let d = 0 ; d<hours.length ; d++){
      let bodyElement1 = document.createElement('td');
      tr2.appendChild(bodyElement1);
      bodyElement1.textContent = total2[d];
      total=total+total2[d];
  
  
    }
  
    let totalElement= document.createElement('the');
    tr2.appendChild(totalElement);
   totalElement.textContent = total;
  
  }

  let seattle =new Cookie('seattle' , 23 , 65 , 6.3 , []);
let Tokyo =new Cookie('Tokyo' , 3 , 24 , 1.2 , [] );
let dubai =new Cookie('Dubai' , 11 , 38 , 3.7 , []);
let paris =new cookie('Paris' , 20 , 38 , 2.3 , []);
let lima =new cookie('Lima' , 2 , 16 , 4.6 , []);


function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

    console.log(seattle);
    seattle.render();

    console.log(tokyo);
    tokyo.render();

    console.log(dubai);
    dubai.render();

    console.log(paris);
    paris.render();


    console.log(lima);
    lima.render();

//let seattle ={
    //name : 'seattle',
   // min : 23 ,
  //  max:63 ,
  //  average : 6.3 ,
  //  hours:['6m','7am','8am','9am','10am','11am','12pm','1pm','2pm','3mp','4pm','5mp','6pm','7pm'],
  //  customerNumber : function(){
   //     return Math.ceil(getRandomNumber(this.min,this.max)*this.average)
   // },

   // render : function(){
   //     let parentElement =document.getElementById('salmon-cookies');

     //   let articleElement=document.createElement('article');
     //   parentElement.appendChild(articleElement);

      //  let h2Element=document.createElement('h2');
      //  h2Element.textContent=this.name;
      //  articleElement.appendChild(h2Element)

       // let ulElement=document.createElement('ul');
       // h2Element.appendChild(ulElement);
       // let total =0;
      //  for(let i=0;i<this.hours.length;i++){
       //     let liElement=document.createElement('li');
       //     let cooki=this.customerNumber();
         //   liElement.textContent=this.hours[i]+': '+cooki+' cookies';
         //   total=total+cooki;
         //   ulElement.appendChild(liElement)
         //   if(i===13){
          //      let liElement=document.createElement('li');
           //     liElement.textContent='total: '+total+'cookies';
            //    ulElement.appendChild(liElement);
           // }
       // }


  //  }





//}

//let tokyo ={
  //  name : 'tokyo',
    //min : 3 ,
    //max:24 ,
    //average : 1.2 ,
    //hours:['6m','7am','8am','9am','10am','11am','12pm','1pm','2pm','3mp','4pm','5mp','6pm','7pm'],
    //customerNumber : function(){
      //  return Math.ceil(getRandomNumber(this.min,this.max)*this.average)
    //},

    //render : function(){
      //  let parentElement =document.getElementById('salmon-cookies');

        //let articleElement=document.createElement('article');
        //parentElement.appendChild(articleElement);

        //let h2Element=document.createElement('h2');
        //h2Element.textContent=this.name;
        //articleElement.appendChild(h2Element)

        //let ulElement=document.createElement('ul');
        //h2Element.appendChild(ulElement);
        //let total =0;
        //for(let i=0;i<this.hours.length;i++){
          //  let liElement=document.createElement('li');
            //let cooki=this.customerNumber();
            //liElement.textContent=this.hours[i]+': '+cooki+' cookies';
            //total=total+cooki;
            //ulElement.appendChild(liElement)
            //if(i===13){
              //  let liElement=document.createElement('li');
               // liElement.textContent='total: '+total+'cookies';
               // ulElement.appendChild(liElement);
            //}
        //}


    //}





//}


//let dubai ={
  //  name : 'dubai',
    //min : 11,
    //max:38 ,
    //average : 3.7 ,
    //hours:['6m','7am','8am','9am','10am','11am','12pm','1pm','2pm','3mp','4pm','5mp','6pm','7pm'],
    //customerNumber : function(){
      //  return Math.ceil(getRandomNumber(this.min,this.max)*this.average)
    //},

    //render : function(){
      //  let parentElement =document.getElementById('salmon-cookies');

        //let articleElement=document.createElement('article');
        //parentElement.appendChild(articleElement);

        //let h2Element=document.createElement('h2');
        //h2Element.textContent=this.name;
        //articleElement.appendChild(h2Element)

        //let ulElement=document.createElement('ul');
        //h2Element.appendChild(ulElement);
        //let total =0;
        //for(let i=0;i<this.hours.length;i++){
          //  let liElement=document.createElement('li');
            //let cooki=this.customerNumber();
            //liElement.textContent=this.hours[i]+': '+cooki+' cookies';
            //total=total+cooki;
            //ulElement.appendChild(liElement)
            //if(i===13){
               // let liElement=document.createElement('li');
                //liElement.textContent='total: '+total+'cookies';
                //ulElement.appendChild(liElement);
            //}
        //}


    //}





//}


//let paris ={
  //  name : 'paris',
    //min : 20 ,
    //max:38 ,
    //average : 2.3 ,
   // hours:['6m','7am','8am','9am','10am','11am','12pm','1pm','2pm','3mp','4pm','5mp','6pm','7pm'],
    //customerNumber : function(){
      //  return Math.ceil(getRandomNumber(this.min,this.max)*this.average)
    //},

    //render : function(){
      //  let parentElement =document.getElementById('salmon-cookies');

       // let articleElement=document.createElement('article');
        //parentElement.appendChild(articleElement);

        //let h2Element=document.createElement('h2');
        //h2Element.textContent=this.name;
        //articleElement.appendChild(h2Element)

        //let ulElement=document.createElement('ul');
        //h2Element.appendChild(ulElement);
        //let total =0;
        //for(let i=0;i<this.hours.length;i++){
          //  let liElement=document.createElement('li');
            //let cooki=this.customerNumber();
            //liElement.textContent=this.hours[i]+': '+cooki+' cookies';
            //total=total+cooki;
            //ulElement.appendChild(liElement)
            //if(i===13){
              //  let liElement=document.createElement('li');
                //liElement.textContent='total: '+total+'cookies';
                //ulElement.appendChild(liElement);
            //}
        //}


    //}





//}

//let lima ={
  //  name : 'lima',
    //min : 2 ,
    //max:16 ,
    //average : 4.6 ,
    //hours:['6m','7am','8am','9am','10am','11am','12pm','1pm','2pm','3mp','4pm','5mp','6pm','7pm'],
    //customerNumber : function(){
      //  return Math.ceil(getRandomNumber(this.min,this.max)*this.average)
    //},

    //render : function(){
      //  let parentElement =document.getElementById('salmon-cookies');

        //let articleElement=document.createElement('article');
        //parentElement.appendChild(articleElement);

        //let h2Element=document.createElement('h2');
        //h2Element.textContent=this.name;
        //articleElement.appendChild(h2Element)

        //let ulElement=document.createElement('ul');
        //h2Element.appendChild(ulElement);
        //let total =0;
        //for(let i=0;i<this.hours.length;i++){
          //  let liElement=document.createElement('li');
            //let cooki=this.customerNumber();
            //liElement.textContent=this.hours[i]+': '+cooki+' cookies';
           // total=total+cooki;
            //ulElement.appendChild(liElement)
            //if(i===13){
              //  let liElement=document.createElement('li');
                //liElement.textContent='total: '+total+'cookies';
                //ulElement.appendChild(liElement);
            //}
        //}


    //}





//}


