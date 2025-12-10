<?php

echo "Enter temperature: ";
$temperature = (float)fgets(STDIN);

if ($temperature < 10) {
    echo "It's cold.";
} elseif ($temperature >= 10 && $temperature <= 25) {
    echo "It's warm.";
} else {
    echo "It's hot!";
}

$day = 1;
switch ($day) {
    case 1:
        echo "Monday";
        break;
    case 2:
        echo "Tuesday";
        break;
    case 3:
        echo "Wednesday";
        break;
    case 4:
        echo "Thursday";
        break;
    case 5:
        echo "Friday";
        break;
    case 6:
        echo "Saturday";
        break;
    case 7:
        echo "Sunday";
        break;
    default:
        echo "Invalid day";
}
?>