<?php
// https://stackoverflow.com/questions/1597736/how-to-sort-an-array-of-associative-arrays-by-value-of-a-given-key-in-php
function sortArrays(array &$data, string $field, string $direction = 'DESC', $antiNumeric = false) {
  if ($direction == 'ASC') {
    usort($data, function ($item1, $item2) use ($field, $antiNumeric){
      if ($item2[$field] == 'A*' && $item1[$field] == 'A') {
        return 1;
      }
      if ($item1[$field] == 'A*' && $item2[$field] == 'A') {
        return -1;
      }
      if ($antiNumeric && is_numeric($item1[$field]) && is_numeric($item2[$field])) {
        return $item2[$field] <=> $item1[$field];
      } else {
        return $item1[$field] <=> $item2[$field];
      }
    });
  } else if ($direction == 'DESC') {
    usort($data, function ($item1, $item2) use ($field){
      if ($item2[$field] == 'A*' && $item1[$field] == 'A') {
        return -1;
      }
      if ($item1[$field] == 'A*' && $item2[$field] == 'A') {
        return 1;
      }
      return $item2[$field] <=> $item1[$field];
    });
  } else {

  }
  return $data;
}

function sortObjects(array &$data, string $field, string $direction = 'DESC') {
  if ($direction == 'ASC') {
    usort($data, function ($item1, $item2) use ($field){
      return $item1->{$field} <=> $item2->{$field};
    });
  } else if ($direction == 'DESC') {
    usort($data, function ($item1, $item2) use ($field){
        return $item2->{$field} <=> $item1->{$field};
    });
  } else {

  }
  return $data;
}

// https://blog.martinhujer.cz/clever-way-to-sort-php-arrays-by-multiple-values/

function rankArray(array $data, string $rankByField, string $rankField)
{
  $data = sortArrays($data, $rankByField, 'DESC');
  $rank = 0;
  $previousPoint = 'nonsense';

  foreach($data as &$d){
    $point = $d[$rankByField];
    if ($point !== $previousPoint) $rank++;
    $d[$rankField] = $rank;
    $previousPoint = $point;
  }
  return $data;
}

?>
