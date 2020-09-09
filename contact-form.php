<?php
    $name=$_POST['name'];
    $visitor_phone= $_POST['phone'];
    $message=$_POST['message'];

    $email_from = 'madalinamanole71@gmail.com';
    $email_subject = "New Form Submission";
    $email_body = "User Name: $name.\n".
                  "User Phone: $visitor_phone.\n".
                  "User Message: $message.\n";

    $to = "WebFormulaTeam@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_phone \r\n";

    mail($to, $email_subject, $email_body, $headers);

    header("Location: index0.html");
                  
?>