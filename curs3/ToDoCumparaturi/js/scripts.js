
var nrProduse = 0;
function addTask() {
    let task = document.getElementById('task').value;
    if (!task)
        return;
    const text = "<li class='task'>" + task + "</li>"
    document.getElementById('list').insertAdjacentHTML('beforeend', text)
    document.getElementById('task').value = '';
    nrProduse  =nrProduse + 1;
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem(nrProduse, text);
        localStorage.setItem('numarProduse', nrProduse);
        

    }
}

document.getElementById('add').addEventListener('click', addTask);
document.getElementById('list').addEventListener('click', function(event){
    const element = event.target;
    element.classList.toggle("done");
});


window.onload = function () {
    var nr =(localStorage.getItem('numarProduse'));
    let i;
    if (typeof(Storage) !== "undefined" && nr>0) {
        for (i = 1; i <= nr; i++) {
            // Retrieve
            document.getElementById("list").insertAdjacentHTML('beforeend', localStorage.getItem(i));
        }
    }

}
