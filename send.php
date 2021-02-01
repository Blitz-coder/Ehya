<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];




// Формирование самого письма

// если указан только email
if ($email) {
  $title = "Новый подписчик с Ehya";
  $body = "
    <h2>Новый подписчик с Ehya</h2>
    <b>Email:</b> $email<br>
  ";
}

// если указан email и телефон - модальное окно
if (($email) and ($phone)) {
$title = "Новый пользователь Ehya";
$body = "
<h2>Новый пользователь Ehya</h2>
<b>Имя:</b> $name<br>
<b>Email</b> $email<br>
<b>Телефон:</b> $phone<br><br>
<p>Отправлено из модального окна с сайта<br> https://seogalaxy.ru/ehya/.</p>
";
}


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'the.best.tour.plan@gmail.com'; // Логин на почте
    $mail->Password   = 'GjyjvfhtyrjY77'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('the.best.tour.plan@gmail.com', 'Юрий Пономаренко'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('blitz-coder@yandex.ru');  
  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');