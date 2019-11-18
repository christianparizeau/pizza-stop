<?php

if (empty($request['body'])) {
  throw new ApiError('You are not allowed', 403);
}

// $response['body'] = [
//   "message" => "You are cool"
// ];

send($response);
