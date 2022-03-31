<?php
// informatiile pot fi preluate din baza de date. Ramane ca provocare.

$users =[
    0=>['id'=>1,'nume'=>'Popescu','prenume'=>'Vasile'],
    1=>['id'=>2,'nume'=>'Ionescu','prenume'=>'Dan'],
    2=>['id'=>3,'nume'=>'Florescu','prenume'=>'Ion'],
];

$method = $_SERVER['REQUEST_METHOD'];
if ($method == 'POST'){
     // Method is POST
    array_push($users, $_POST);
    echo json_encode($users);
  
} elseif ($method == 'GET' && empty($_GET)){
    // Method is GET
    echo json_encode($users);
} elseif ($method == 'GET' && !empty($_GET)){

    $key = array_search($_GET['id'], array_column($users, 'id')); //array_search($_GET['id'], $users); 
    echo json_encode($users[$key]);

} elseif ($method == 'PUT'){
    // Method is PUT
    parse_str(file_get_contents("php://input"), $_PUT);
    $key = array_search($_GET['id'], array_column($users, 'id'));

    $users[$key]['nume'] = $_PUT['nume'];
    $users[$key]['prenume'] = $_PUT['prenume'];
    
    echo json_encode($users);

} elseif ($method == 'DELETE'){
        // Method is DELETE
    parse_str(file_get_contents("php://input"), $_DELETE);
    $key = array_search($_GET['id'], array_column($users, 'id'));
    array_splice($users,$key,1);
    echo json_encode($users);

} else {
    // Method unknown
    echo json_encode($users);
}

    

?>