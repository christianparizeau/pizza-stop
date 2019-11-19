<?php

if ($request['method'] === 'GET') {
  $link = get_db_link();
  $all_product_info_except_longDescription = "SELECT productId,name, price, image, shortDescription FROM products";
  $result = mysqli_query($link, $all_product_info_except_longDescription);
  $message = [];
  if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
      array_push($message, $row);
    }
  }
  $response['body'] = $message;
}

send($response);
