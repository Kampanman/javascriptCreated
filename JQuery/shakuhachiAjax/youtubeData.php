<?php
  $data = [
    ["2021/07/20","講師課題曲","地唄箏曲美緒野会 - 黒髪","qnsYY1whk0c"],
    ["2021/07/20","自主課題曲","The Eagles- DESPERADO","iDNtqy0zjJA"],
  ];
  // PHPの場合、文字列と変数、或いは改行挟んで文字列同士を連結させるのならば、「.」を使うのがルール。「+」と間違えないように！
  $json_data = json_encode($data);
  echo $json_data;