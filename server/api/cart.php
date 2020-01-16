<?php

if ($request['method'] === 'GET') {
  if (!isset($_SESSION['cart_id'])) {
    $response['body'] = [];
  } else {
    $link = get_db_link();
    $cartId = $_SESSION['cart_id'];
    $cartItemDataSQL = "SELECT products.name, products.productId,
                               products.price, products.image,
                               products.shortDescription,
                               cartItems.quantity,
                               cartItems.cartItemId as id
                        FROM products JOIN cartItems
                        ON products.productId=cartItems.productId
                        WHERE cartItems.cartId={$cartId}";
    $result = mysqli_query($link, $cartItemDataSQL);
    $message = mysqli_fetch_all($result, MYSQLI_ASSOC);
    $response['body'] = $message;
  }
  send($response);
}

if ($request['method'] === 'DELETE') {
  $link = get_db_link();
  $id = $request['body']['id'];
  $cartItemDeleteSQL =
    "DELETE FROM cartItems
     WHERE cartItems.cartItemId={$id}";
  $result = mysqli_query($link, $cartItemDeleteSQL);
  if ($result) {
    $response['body'] = $id;
  } else {
    $response['body']['error'] = TRUE;
  }
  send($response);
}

if($request['method']==='PUT'){
  $link = get_db_link();
  $id = $request['body']['id'];
  $cartId = $_SESSION['cart_id']
  $quantityReduceSQL = "UPDATE `cartItems` 
                        SET quantity=quantity-1
                        WHERE cartId = $cartId 
                        AND productId = $id";
  $result = mysqli_query($link, $quantityReduceSQL);
  if($result){
    $response['body']=$quantity-1;
  } else{
    $response['body']['error'] = TRUE;
  }
  send($response);
}

if ($request['method'] === 'POST') {
  $productId = $request['body']['productId'];
  if (!isset($productId) || !is_numeric($productId) || intval($productId) === 0) {
    throw new ApiError('Please provide a valid productId', 400);
  } else {
    $link = get_db_link();
    $query = "SELECT price from products WHERE productId={$productId}";
    $productPrice = mysqli_query($link, $query);
    if (mysqli_num_rows($productPrice) === 0) {
      throw new ApiError("No.", 404);
    }
    $productPrice = mysqli_fetch_assoc($productPrice);
    $productPrice = $productPrice['price'];
    if (!isset($_SESSION['cart_id'])) {
      $cartInsert = "INSERT INTO `carts` (createdAt)
                   VALUES(CURRENT_TIMESTAMP)";
      mysqli_query($link, $cartInsert);
      $cartId = mysqli_insert_id($link);
    } else {
      $cartId = $_SESSION['cart_id'];
    }
    $cartItemInsert = "INSERT INTO `cartItems` (cartId,productId,price)
                       VALUES ($cartId,$productId,$productPrice)
                       ON DUPLICATE KEY UPDATE quantity=quantity+1";
    mysqli_query($link, $cartItemInsert);
    $cartItemId = mysqli_insert_id($link);
    $cartItemDataSQL = "SELECT products.name, products.productId,
                               products.price, products.image,
                               products.shortDescription,
                               cartItems.quantity,
                               cartItems.cartItemId as id
                        FROM products JOIN cartItems
                        ON products.productId=cartItems.productId
                        WHERE cartItems.cartItemId={$cartItemId}";
    $results = mysqli_query($link, $cartItemDataSQL);
    $data = mysqli_fetch_assoc($results);
    $response['body'] = $data;
    $_SESSION['cart_id'] = $cartId;
    send($response);
  }
}
