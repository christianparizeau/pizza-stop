<?php
if ($request['method'] === 'DELETE') {
  $link = get_db_link();
  $cart_id = $_SESSION['cart_id'];
  $deleteFromCartItemsDB = "DELETE FROM `cartItems`
    WHERE cartId=$cart_id";
  $deleteFromCarts = "DELETE FROM `carts`
    WHERE cartId=$cart_id";
  mysqli_query($link, $deleteFromCartItemsDB);
  mysqli_query($link, $deleteFromCarts);
  $response['body'] = [
    complete => true
  ];
  send($response);
}
