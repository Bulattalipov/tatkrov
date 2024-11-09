<?php


// if (isset($_POST['form'])) { // Это ид кнопки на которую нажмут и сработает php скрипт - Убрать если просто сообщение при заходе на страницу ( внизу скобку убрать }

$name = $_POST['name'];// это что ловим с формы
$phone = $_POST['phone']; // это что ловим с формы
// Можно приписывать так если ловить не надо
// $zakaz = "Заказ с сайты XXX";

$token = "7060742180:AAGhXaywiw3Hv1iB_KJ95EeShfYnPQaWPQ4"; // Это ТОКЕН
$chat_id = "-1002147773665"; // Это ИД группы

$arr = array(

// 'Заказ с сайты: ' => $zakaz,
  'Имя: ' => $name,
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// Это условие Если отправлено редирект если нет  ошибка Можно убрать!
if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}
// ид кнопки
// }
?>