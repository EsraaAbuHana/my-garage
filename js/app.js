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
    this.url='img/'+category+'.png';
arrayOfGarage.push(this);

}
Garage.prototype.renderCar=function(){
    var carImg=document.createElement('img');
    var carName=document.createElement('p');
    var carYear=document.createElement('p');
//    carImg.textContent=document.setItem('src')+this.url;
// carImg.setAttribute('src', url);
carName.textContent=`Car name: ${this.name}`;
carYear.textContent=`Model Year: ${this.model}`;

garageRender.appendChild(carImg)
garageRender.appendChild(carName);
garageRender.appendChild(carYear);

}
function renderGarageCars() {
    for (let index = 0; index < arrayOfGarage.length; index++) {
        
        var carImg=document.createElement('img');
    var carName=document.createElement('p');
    var carYear=document.createElement('p');
carName.textContent=`Car name: ${arrayOfGarage[index].name}`;
carYear.textContent=`Model Year: ${arrayOfGarage[index].model}`;

garageRender.appendChild(carName);
garageRender.appendChild(carYear);
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