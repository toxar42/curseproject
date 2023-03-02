var product=['Dr. Pepper','Canada Dry Ginger Ale ','Fanta Exotic','Fanta Lemon','A&W Root Beer','Fanta Peach USA','Fanta Strawberry USA ','Fanta Berry USA','Toxic waste','Lucky Charms with marshmallow','Jelly Belly Bean Boozled Game','Cadbury Wispa','Lucky Charms Soft Baked Bars','Small box','Medium box','Big box']
var cost=[129,129,139,139,149,139,139,139,249,629,1129,5999,7499,599,1129,2699]
var in_card = 0;
function card()
{
    let total_price=0;
    for (let i=0;i<document.forms.length-1;i++)
    {
        if (document.forms[i].out.value>0)
        {
            let products=document.forms[i].out.value;
            total_price += products * cost[i];
            document.querySelector('#menu_card').insertAdjacentHTML('afterbegin',`<div id="${in_card}" class="list_menu">${product[i]} = ${total_price}</div>`);
            in_card+=1;
        }
    }
}
function delete_card()
{
    for (let i=0;i<in_card;i++)
    {
       let del = document.getElementById(i);
       del.remove();
    } 
    in_card=0;
}

var dialog = document.querySelector('dialog')
document.querySelector(
  '#openDialog'
).onclick = function () {
  dialog.show(); // Показываем диалоговое окно
  card();
}
document.querySelector(
  '#closeDialog'
).onclick = function () {
  dialog.close() ;// Прячем диалоговое окно
  delete_card();
}
