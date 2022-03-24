$("#modalForm").on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget); //Button that triggered the modal
    const email = button.data('email') //need to find the button and get email
    const nume = button.data('nume') //need to find the button and get name
    $(".modal-body #email").val( email );
    $(".modal-body #name").val( nume );
  })
  $("#modalForm").on('hidden.bs.modal', function(event) {
    
    alert('Modalul s-a inchis');
    document.getElementById('button').classList.remove('btn-primary');
    button.classList.add('bg-success');
  })