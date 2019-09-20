<?php
    $to      = 'almasgaara@mail.ru';
    $subject = 'the subject';
    $message = 'Project:'. $_POST['project'] .' Position:'. $_POST['position'];
    $headers = 'From: foxxychmoxy@gmail.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
    header('Location: /goals.html');
?>