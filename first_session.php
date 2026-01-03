<?php

session_start();
  ?>
<html>
<body>

<?php
$_SESSION["FAVCOLOR"] = "BLUE";
$_SESSION["FAVANIMAL"] = "CAT";
echo "SESSION variables are set.";
?>
</body>
</html>
