var db = openDatabase("Zakaz","1.0","Zakaz",2*1024*1024)
//  функция для добавления данных
function Database() 
{
    var fio = document.getElementById('fio').value; //присваеваем значение переменной
    var tel = document.getElementById('tel').value; 
    var adress = document.getElementById('adress').value; 
    var method = document.getElementById('method').value; 
    var delivery = document.getElementById('delivery').value; 
    var prom = document.getElementById('prom').value; 
    var gift = document.getElementById('gift').value;
    var coment = document.getElementById('coment').value; 
    createTable(db); // вызов функции
    insertData(db,fio,tel,adress,method,delivery,prom,gift,coment); 
    alert("Заявка отправлена!");
}
//  функция для изменнения таблицы
function createTable(db) { 
    db.transaction(function (t) { 
        t.executeSql("CREATE TABLE ZAKAZY (fio TEXT, tel TEXT, adress TEXT, method TEXT, delivery TEXT, prom TEXT, gift TEXT, coment TEXT)", []); 
    });
}
//  функция для добавления новых данных в бд
function insertData(db,fio,tel,adress,method,delivery,prom,gift,coment) { 
    db.transaction(function (e) { 
        e.executeSql("INSERT INTO ZAKAZY(fio,tel,adress,method,delivery,prom,gift,coment) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [fio,tel,adress,method,delivery,prom,gift,coment]); 
    }); 
}
// функция для вывода таблицы
function dataView(db) {   
    db.transaction(function (t) { 
        t.executeSql("SELECT * FROM ZAKAZY", [], 
        function (tran, r) { 
            for (var i = 0; i < r.rows.length; i++) { 
                var fio = r.rows.item(i).fio; 
                var tel = r.rows.item(i).tel; 
                var adress = r.rows.item(i).adress; 
                var method = r.rows.item(i).method;  
                var delivery = r.rows.item(i).delivery; 
                var prom = r.rows.item(i).prom; 
                var gift = r.rows.item(i).gift; 
                var coment = r.rows.item(i).coment; 
                document.getElementById("base_zak").insertAdjacentHTML('beforeend',`<tr><td>${fio}</td> <td>${tel}</td> <td>${adress}</td>
<td>${method}</td> <td>${delivery}</td> <td>${prom}</td> <td>${gift}</td> <td>${coment}</td></tr> `);
}
},
function (t, e) { "Данных нет!"; }
);
});
}


// функция для удаления данных из таблицы
function dropTable(){ 
    db.transaction(function (e) { // отправление транзакции
        e.executeSql("DROP TABLE ZAKAZY"); // удаляем таблицу
    });
    alert("Все данные удалены!"); // сообщение 
    location.reload(); // перезагружаем страницу 
}