<?php
       // from the form
       if (isset($_POST['submit'])){
              $name = $_POST['name'];
              $subject = $_POST['subject'];
              $mail = $_POST['mail'];
              $message = $_POST['message'];

              $mailto = "machytech@yahoo.com";
              $headers = "From: ".$mail;
              $text = "You have received an e-mail from ".$name.".\n\n".$message

              mail($mailTo, $subject, $txt, $headers);
              header("Location: template.html?mailsend")
       }
?>