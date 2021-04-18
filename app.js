'use strict';

let seattle ={
    name : 'seattle',
    min : 23 ,
    max:63 ,
    average : 6.3 ,
    hours:['6m','7am','8am','9am','10am','11am','12pm','1pm','2pm','3mp','4pm','5mp','6pm','7pm'],
    customerNumber : function(){
        return Math.ceil(getRandomNumber(this.min,this.max)*this.average)
    },

    render : function(){
        let parentElement =document.getElementById('salmon-cookies');

        let articleElement=document.createElement('article');
        parentElement.appendChild(articleElement);

        let h2Element=document.createElement('h2');
        h2Element.textContent=this.name;
        articleElement.appendChild(h2Element)

        let ulElement=document.createElement('ul');
        h2Element.appendChild(ulElement);
        let total =0;
        for(let i=0;i<this.hours.length;i++){
            let liElement=document.createElement('li');
            let cooki=this.customerNumber();
            liElement.textContent=this.hours[i]+': '+cooki+' cookies';
            total=total+cooki;
            ulElement.appendChild(liElement)
            if(i===13){
                let liElement=document.createElement('li');
                liElement.textContent='total: '+total+'cookies';
                ulElement.appendChild(liElement);
            }
        }


    }





}

let tokyo ={
    name : 'tokyo',
    min : 3 ,
    max:24 ,
    average : 1.2 ,
    hours:['6m','7am','8am','9am','10am','11am','12pm','1pm','2pm','3mp','4pm','5mp','6pm','7pm'],
    customerNumber : function(){
        return Math.ceil(getRandomNumber(this.min,this.max)*this.average)
    },

    render : function(){
        let parentElement =document.getElementById('salmon-cookies');

        let articleElement=document.createElement('article');
        parentElement.appendChild(articleElement);

        let h2Element=document.createElement('h2');
        h2Element.textContent=this.name;
        articleElement.appendChild(h2Element)

        let ulElement=document.createElement('ul');
        h2Element.appendChild(ulElement);
        let total =0;
        for(let i=0;i<this.hours.length;i++){
            let liElement=document.createElement('li');
            let cooki=this.customerNumber();
            liElement.textContent=this.hours[i]+': '+cooki+' cookies';
            total=total+cooki;
            ulElement.appendChild(liElement)
            if(i===13){
                let liElement=document.createElement('li');
                liElement.textContent='total: '+total+'cookies';
                ulElement.appendChild(liElement);
            }
        }


    }





}


let dubai ={
    name : 'dubai',
    min : 11,
    max:38 ,
    average : 3.7 ,
    hours:['6m','7am','8am','9am','10am','11am','12pm','1pm','2pm','3mp','4pm','5mp','6pm','7pm'],
    customerNumber : function(){
        return Math.ceil(getRandomNumber(this.min,this.max)*this.average)
    },

    render : function(){
        let parentElement =document.getElementById('salmon-cookies');

        let articleElement=document.createElement('article');
        parentElement.appendChild(articleElement);

        let h2Element=document.createElement('h2');
        h2Element.textContent=this.name;
        articleElement.appendChild(h2Element)

        let ulElement=document.createElement('ul');
        h2Element.appendChild(ulElement);
        let total =0;
        for(let i=0;i<this.hours.length;i++){
            let liElement=document.createElement('li');
            let cooki=this.customerNumber();
            liElement.textContent=this.hours[i]+': '+cooki+' cookies';
            total=total+cooki;
            ulElement.appendChild(liElement)
            if(i===13){
                let liElement=document.createElement('li');
                liElement.textContent='total: '+total+'cookies';
                ulElement.appendChild(liElement);
            }
        }


    }





}


let paris ={
    name : 'paris',
    min : 20 ,
    max:38 ,
    average : 2.3 ,
    hours:['6m','7am','8am','9am','10am','11am','12pm','1pm','2pm','3mp','4pm','5mp','6pm','7pm'],
    customerNumber : function(){
        return Math.ceil(getRandomNumber(this.min,this.max)*this.average)
    },

    render : function(){
        let parentElement =document.getElementById('salmon-cookies');

        let articleElement=document.createElement('article');
        parentElement.appendChild(articleElement);

        let h2Element=document.createElement('h2');
        h2Element.textContent=this.name;
        articleElement.appendChild(h2Element)

        let ulElement=document.createElement('ul');
        h2Element.appendChild(ulElement);
        let total =0;
        for(let i=0;i<this.hours.length;i++){
            let liElement=document.createElement('li');
            let cooki=this.customerNumber();
            liElement.textContent=this.hours[i]+': '+cooki+' cookies';
            total=total+cooki;
            ulElement.appendChild(liElement)
            if(i===13){
                let liElement=document.createElement('li');
                liElement.textContent='total: '+total+'cookies';
                ulElement.appendChild(liElement);
            }
        }


    }





}

let lima ={
    name : 'lima',
    min : 2 ,
    max:16 ,
    average : 4.6 ,
    hours:['6m','7am','8am','9am','10am','11am','12pm','1pm','2pm','3mp','4pm','5mp','6pm','7pm'],
    customerNumber : function(){
        return Math.ceil(getRandomNumber(this.min,this.max)*this.average)
    },

    render : function(){
        let parentElement =document.getElementById('salmon-cookies');

        let articleElement=document.createElement('article');
        parentElement.appendChild(articleElement);

        let h2Element=document.createElement('h2');
        h2Element.textContent=this.name;
        articleElement.appendChild(h2Element)

        let ulElement=document.createElement('ul');
        h2Element.appendChild(ulElement);
        let total =0;
        for(let i=0;i<this.hours.length;i++){
            let liElement=document.createElement('li');
            let cooki=this.customerNumber();
            liElement.textContent=this.hours[i]+': '+cooki+' cookies';
            total=total+cooki;
            ulElement.appendChild(liElement)
            if(i===13){
                let liElement=document.createElement('li');
                liElement.textContent='total: '+total+'cookies';
                ulElement.appendChild(liElement);
            }
        }


    }





}

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
