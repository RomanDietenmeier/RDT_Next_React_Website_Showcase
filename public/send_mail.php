
<?php
$name = "No Name provided";
$email = "No Email provided";
$message = "No Message provided";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = "No Name provided";
    $message = "No Message provided";
    $name = (strip_tags(trim($_POST["fullname"])));
    $email = (filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL));
    $message = (strip_tags(trim($_POST["message"])));

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Please provide a valid email address.";
        exit;
    }

    $to = 'contact@romandietenmeiertechnik.de';
    $subject = 'Contact Form Submission ' . $email;
    $message = 'Name: ' . "\r\n" . $name . "\r\n" . 'Email:' . "\r\n" . $email . "\r\n" . 'Message: ' . "\r\n" . $message . "\r\n";
    $headers = 'Reply-To: ' . $email . "\r\n" .
        'Content-Type: text/plain; charset=UTF-8';
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Email sending failed.";
    }
}
header("Location: /");
exit;
?>