

var id;
$("#modalForm").on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget); //Button that triggered the modal
    const email = button.data('email') //need to find the button and get email
    const nume = button.data('nume') //need to find the button and get name
    $(".modal-body #email").val( email );
    $(".modal-body #name").val( nume );
    id = button.attr('id');
    // var datainfo = document.getElementById(id);
     alert(JSON.stringify(button[0]));
    // alert(JSON.stringify(datainfo));
    
   
  })
  $("#modalForm").on('hidden.bs.modal', function(event) {
   
    alert('Modalul s-a inchis');
    document.getElementById(id).classList.remove('btn-primary');
    document.getElementById(id).classList.add('btn-success');
  })
  