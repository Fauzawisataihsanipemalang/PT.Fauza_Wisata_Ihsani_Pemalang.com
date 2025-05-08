<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "ihsanifauzawisata@gmail.com";
    $subject = $_POST['subject'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    $body = "Nama: $name\nEmail: $email\nTelepon: $phone\n\nPesan:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "Pesan berhasil dikirim!";
    } else {
        echo "Gagal mengirim pesan.";
    }
}
?>
