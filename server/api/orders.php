<?php


if ($request['method'] === 'POST') {
  $link = get_db_link();
  if (!isset($_SESSION['cart_id'])) {
    throw new ApiError('Active Shopping Cart Required', 400);
  }
  $name = $request['body']['name'];
  $creditCard = $request['body']['creditCard'];
  $shippingAddress = $request['body']['shippingAddress'];

  if (!$name) {
    throw new ApiError("Need to specify a name", 400);
  } elseif (!$creditCard) {
    throw new ApiError("Need to specify a credit card", 400);
  } elseif (!$shippingAddress) {
    throw new ApiError("Need to specify a shipping address", 400);
  }
  $orderQuery = "INSERT INTO orders (cartId,name,creditCard,shippingAddress)
                 VALUES (?,?,?,?)";
  $preparedStatement = mysqli_prepare($link, $orderQuery);
  mysqli_stmt_bind_param(
    $preparedStatement,
    'isss',
    $_SESSION['cart_id'],
    $name,
    $creditCard,
    $shippingAddress
  );
  mysqli_stmt_execute($preparedStatement);
  $orderId = mysqli_insert_id($link);
  unset($_SESSION['cart_id']);
  $response['body'] = [
    orderId => $orderId,
    name => $name,
    creditCard => $creditCard,
    shippingAddress => $shippingAddress
  ];
  send($response);
}
