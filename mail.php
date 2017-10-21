<?php
$firstname = $_POST['uname'];
$telephone = $_POST['uphone'];
$tinkoff = $_POST['utinkoff'];
$office = $_POST['uoffice'];

$firstname = htmlspecialchars($firstname);
$telephone = htmlspecialchars($telephone);
$tinkoff = htmlspecialchars($tinkoff);
$office = htmlspecialchars($office);

$firstname = urldecode($firstname);
$telephone = urldecode($telephone);
$tinkoff = urldecode($tinkoff);
$office = urldecode($office);

$firstname = trim($firstname);
$telephone = trim($telephone);
$tinkoff = trim($tinkoff);
$office = trim($office);

//echo $firstname;
//echo "<br>";
//echo $telephone;
mail("mobileexpress@yandex.ru", "Заявка на ремонт. MobileExpress.", "ФИО:".$firstname."\n Телефон: ".$telephone."\n Филиал(если выбран): ".$office."\n Ремонт: ".$tinkoff,"From: mobileexpress@yandex.ru \r\n");

//$post_data = array(); mobileexpress@yandex.ru

//if (isset($_POST['uname'])) { $post_data['name'] = htmlspecialchars($_POST['uname']); } else { $post_data['name'] = ''; }
//if (isset($_POST['uphone'])) { $post_data['phone'] = htmlspecialchars($_POST['uphone']); } else { $post_data['phone'] = ''; }
//$post_data['site'] = 'iphone-express.ru';

//$curl = curl_init();
//curl_setopt($curl, CURLOPT_URL, 'http://portal.dev-platform.ru/Modules/RequestsForm/Listening/Index/5942200c877a5');
//curl_setopt($curl, CURLOPT_POST, 1);
//curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
//curl_setopt($curl, CURLOPT_POSTFIELDS, $post_data);
//$output = curl_exec($curl);

error_reporting(-1);
header('Content-Type: text/html; charset=utf-8');
$root=__DIR__.DIRECTORY_SEPARATOR;
require $root.'prepare.php'; #Здесь будут производиться подготовительные действия, объявления функций и т.д.
require $root.'auth.php'; #Здесь будет происходить авторизация пользователя
require $root.'account_current.php'; #Здесь мы будем получать информацию об аккаунте
require $root.'fields_info.php'; #Получим информацию о полях
require $root.'contacts_list.php'; #Получим информацию о контактах
require $root.'contact_add.php'; #Здесь будет происходить добавление контакта
require $root.'task_add.php'; #Добавляем задачу
?>