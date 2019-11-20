<?php

if ($request['method'] === 'GET') {
  if (!isset($_SESSION['cart_id'])) {
    $response['body'] = [];
  } else {
    $reponse['body'] = [
      'message' => 'You have a cart'
    ];
  }
  send($response);
}

if ($request['method'] === 'POST') {
  $productId = $request['query']['productId'];
  if (!isset($productId) || !is_numeric($productId) || intval($productId) === 0) {
    throw new ApiError('Please provide a valid productId', 400);
  } else {
    $link = get_db_link();
    $query = "SELECT price from products WHERE productId={$productId}";
    $productPrice = mysqli_query($link, $query);
    $cartInsert = "INSERT INTO cart (createdAt)
                   VALUES(CURRENT_TIMESTAMP)";
    $insertId = mysqli_insert_id($link);
  }
}
