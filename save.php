<?php
$file_save = "prices.html";

// Читаем текущее значение счетчика
if (file_exists($file_save)) {
    $fp = fopen($file_save, "r");
    $allPricesHTML = fread($fp, filesize($file_save));
    fclose($fp);
} else {
    $allPricesHTML = 0;
}

$allPricesHTML = $_POST['allPricesHTML'];

// Сохраняем обновленное значение счетчика
$fp = fopen($file_save, "w");
fwrite($fp, $allPricesHTML);
fclose($fp); 
?>