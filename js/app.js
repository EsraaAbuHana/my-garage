'use-strict';
//global var
var garageForm=document.getElementById('carForm');
var garageRender=document.getElementById('renderCar');
var arrayOfGarage=[];

// var garageForm=document.getElementById();

//construct
function Garage (name,category,model){
    this.name=name;
    this.category=category;
    this.model=model;
    this.url='./img/'+category+'.png';
arrayOfGarage.push(this);

}
Garage.prototype.renderCar=function(){
    var carImg=document.createElement('img');
    carImg.setAttribute('src',this.url);
    var carName=document.createElement('p');
    var carYear=document.createElement('p');
carName.textContent=`Car name: ${this.name}`;
carYear.textContent=`Model Year: ${this.model}`;
var brakeLine = document.createElement('br');
garageRender.appendChild(carImg);
garageRender.appendChild(carName);
garageRender.appendChild(carYear);
garageRender.appendChild(brakeLine);

}
function renderGarageCars() {
    for (let index = 0; index < arrayOfGarage.length; index++) {
        var carImg=document.createElement('img');
        carImg.setAttribute('src',arrayOfGarage[index].url);
        var carName=document.createElement('p');
        var carYear=document.createElement('p');
    carName.textContent=`Car name: ${arrayOfGarage[index].name}`;
    carYear.textContent=`Model Year: ${arrayOfGarage[index].model}`;
    var brakeLine = document.createElement('br');
    garageRender.appendChild(carImg);
    garageRender.appendChild(carName);
    garageRender.appendChild(carYear);
    garageRender.appendChild(brakeLine);
    }
    
}

function checkLocalStorage() {
    if(localStorage.getItem('arrayOfGarage')){
        arrayOfGarage=JSON.parse(localStorage.getItem('arrayOfGarage'));
        renderGarageCars();
    }
    
}

function handelGarageCars(event) {
    event.preventDefault();
    var newCarName=event.target.carName.value;
    var newCategoryModel=event.target.categoryModel.value;
    var newModelYear=event.target.modelyear.value;
   var newCar=new Garage (newCarName,newCategoryModel,newModelYear);
   newCar.renderCar();
   localStorage.setItem('arrayOfGarage',JSON.stringify(arrayOfGarage));

}

//event //call
addEventListener('submit',handelGarageCars);
checkLocalStorage();
