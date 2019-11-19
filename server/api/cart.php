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
