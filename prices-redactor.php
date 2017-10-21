<?php 
session_start();
if(!isset($_SESSION['access']) || $_SESSION['access']!=true){
header("location: login.php");}
else{ ?>
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="description" content="Отремонтируем Ваш Айфон в любом удобном для Вас месте!" />
  <meta name="keywords" content="мобайл экспресс, mobile express" />
  <link rel="icon" type="image/png" href="/favicon.png" sizes="16x16" />
  <link rel="stylesheet" type="text/css" href="/css/style.css" />
  <title>Выездной ремонт Apple iPhone | сервисный центр Айфон в Тюмени - MobileExpress</title>
  <script type="text/javascript" src="/js/flexibility.js"></script>
  <script type="text/javascript" src="/js/jquery-3.2.1.min.js"></script>
  <script type="text/javascript" src="/js/owl.carousel.min.js"></script>
  <script type="text/javascript" src="/js/jquery.inputmask.bundle.js"></script>
</head>
<body>
  <div class="prices-redactor" id="prices-red">
  <?php
  $prices = file_get_contents('prices.html');
  echo $prices;
?>
</div>
<div class="prices__input-field  prices__input-field--inactive">
  <button class="prices__close-btn"></button>
  <input type="text" class="prices__input  prices__input--num  prices__input--inactive">
  <input type="text" class="prices__input  prices__input--text  prices__input--inactive">
  <button class="prices__ok-btn">Ok</button>
</div>
<button class="prices__submit-btn">Сохранить</button>

<script type="text/javascript" src="/js/redactor.js"></script>
<script type="text/javascript" src="/js/picturefill.min.js"></script>
</body>
</html>
<?php } ?>