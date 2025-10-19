<?php

function calculatePercentage($amount) {
    $percentage = 0;
    
    if ($amount < 1000) {
        $percentage = $amount * 0.12;
    } else if ($amount >= 1000 && $amount <= 2000) {
        $percentage = $amount * 0.17;
    } else {
        $percentage = $amount * 0.22;
    }
    
    return $percentage;
}


$amount = 1500; 
$result = calculatePercentage($amount);
echo "Summa: $amount\n";
echo "Foiz: $result\n";

?>