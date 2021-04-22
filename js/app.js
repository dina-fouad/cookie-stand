'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function Cookie(name, min, max, avg) {
  this.name = name;
  this.min= min;
  this.max = max;
  this.avg = avg;
  this.cookiesPerHour = [];
  this.customerPerHour = [];
  this.total = 0;
  Cookie.allCity.push(this);
}

Cookie.allCity = [];

Cookie.prototype.gitCustNumber = function () {
  for (let i = 0; i < hours.length; i++) {
    let cookiee = Math.ceil(getRandomNumber(this.min, this.max) * this.avg);
    this.cookiesPerHour.push(cookiee);
    this.total += cookiee;
    console.log(`${hours[i]} : ${this.cookiesPerHour[i]}`)
  };
};

const parentElement = document.getElementById('SalmonCookies');
let datatable = document.getElementById('Datatable');
const catForm = document.getElementById('newStore');


Cookie.prototype.render = function () {
  this.gitCustNumber();

  const tr = document.createElement('tr');
  datatable.appendChild(tr);
  
  let td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = this.name;

  for(let i = 0; i <hours.length; i++) {
    let tContent = document.createElement('td');
    tr.appendChild(tContent);
    tContent.textContent = this.cookiesPerHour[i];
  }

  let td1 = document.createElement('td');
  tr.appendChild(td1);
  td1.textContent = this.total;
}

function heading() {
  let thead = document.createElement('tr');
  datatable.appendChild(thead);

  let thEle = document.createElement('th');
  thead.appendChild(thEle);
  thEle.textContent = '';

  for (let i = 0; i < hours.length; i++) {
    let thEle = document.createElement('th');
    thead.appendChild(thEle);
    thEle.textContent = hours[i];
  }

  let th1Ele = document.createElement('th');
  thead.appendChild(th1Ele);
  th1Ele.textContent = 'Total Daily Location';
}

function footers() {
  let tfoot = document.createElement('tr');
  datatable.appendChild(tfoot);

  let thEle = document.createElement('th');
  tfoot.appendChild(thEle);
  thEle.textContent = 'Total';

  let totalOfTotals = 0;
  for (let i = 0; i < hours.length; i++) {
    
    let thEle = document.createElement('th');
    let hourlyTotal = 0;
    for(let j = 0; j < Cookie.allCity.length; j++) {
      hourlyTotal += Cookie.allCity[j].cookiesPerHour[i];
      totalOfTotals += Cookie.allCity[j].cookiesPerHour[i];
    }
    thEle.textContent = hourlyTotal;
    tfoot.appendChild(thEle);
  }

  let th1Ele = document.createElement('th');
  tfoot.appendChild(th1Ele);
  th1Ele.textContent = totalOfTotals;
}




new Cookie('Seattle', '23', '65', '6.3');
new Cookie('Tokyo', '3', '24', '1.2');
new Cookie('Dubai', '11	', '38', '3.7');
new Cookie('Paris', '20', '38', '2.3');
new Cookie('Lima', '2', '16', '4.6');

function render() {
  for(let i = 0; i < Cookie.allCity.length; i++){
    Cookie.allCity[i].render();
  }
}



function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}



heading();
render();
footers();

newStore.addEventListener('submit',submitter)

function submitter(event){
  event.preventDefault();
  
  const storeName= event.target.storeName.value;
  const min= event.target.min.value;
  const mix= event.target.mix.value;
  const average = event.target.average.value;


let newCities =new Cookie (storeName,min,mix,average)
let rowCount = Datatable.rows.length;
Datatable.deleteRow(rowCount - 1);
newCities.gitCustNumber();
newCities.render();
newStore.reset();

footers();

}
