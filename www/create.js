let para = document.createElement ('p');
para.textContent = "text";
document.querySelector('body').appendChild(para);

let table = document.querySelector('table');

for (let x = 0; x <= 10; x++) {
    let tr = document.createElement('tr');
    table.appendChild(tr);
    for (let y = 0; y <= 10; y++) {
        let td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = x*y;
    
        

        
    };

    
}
