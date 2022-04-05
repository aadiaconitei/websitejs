<?php
$errorMSG = "";
/* EMAIL */
if (isset($_POST) & !empty($_POST)) {
    if (empty($_POST["email"])) {
        $errorMSG .= "<li>Email is required</li>";
    } else if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
        $errorMSG .= "<li>Invalid email format</li>";
    } else {
        $email = $_POST["email"];
    }
    /* PASSWORD */
    if (empty($_POST["parola"])) {
        $errorMSG .= "<li>Parola is required</li>";
    } else {
        $pass = $_POST["parola"];
    }
    if (empty($errorMSG)) {
        $msg = "Datele introduse sunt corecte";
        echo json_encode(['code' => 200, 'msg' => $msg]);
        exit;
    }

    echo json_encode(['code' => 404, 'msg' => $errorMSG]);
}
?>