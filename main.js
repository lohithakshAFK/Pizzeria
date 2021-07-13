menu_list_array = ["Margherita Pizza","Pepperoni Pizza", "BBQ Chicken Pizza", "Cheese Pizza", "Veggie Pizza",];


function getmenu(){
var htmldata;
row = "Pepperoni Pizza" + "<br>" + "BBQ Chicken Pizza" + "<br>" + "Margherita Pizza" + "<br>" + "Cheese Pizza" + "<br>" + "Veggie Pizza";
document.getElementById("display_menu").innerHTML = row;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.push(item)
var array_value= "";
for( i=0;  i<menu_list_array.length; i++){
console.log(menu_list_array[i]);
array_value= array_value+menu_list_array[i]+"<br>";
}
document.getElementById("display_addedmenu").innerHTML = array_value;
}

function add_top(){
//Complete the code
}