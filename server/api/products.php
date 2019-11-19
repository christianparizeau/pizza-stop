<?php


if($request['query']['productId']){

}


if ($request['method'] === 'GET') {
  $link = get_db_link();
  $productId = $request['query']['productId'];
  if(isset($productId)){
    if(is_numeric($productId) && intval($productId) != 0 ){
    $query = "SELECT * FROM products WHERE productId = {$productId}";
    } else{
      throw new ApiError('productId must be a non-zero integer to be considered valid', 400);
    }
} else{
  $query = "SELECT productId,name,price,image,shortDescription FROM products";
}
  $result = mysqli_query($link, $query);
  $message = [];
  if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
      array_push($message, $row);
    }
  }
  if(empty($message)){
    throw new ApiError("No product with productId of {$productId} exists", 404);
  }
  $response['body'] = $message;
}

send($response);
