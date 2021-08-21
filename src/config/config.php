<?php

    define('TEMPLATE_PATH', realpath(dirname(__FILE__) . '/../views/templates'));
    define('CONTROLLER_PATH', realpath(dirname(__FILE__) . '/../controllers'));

    require_once(realpath(dirname(__FILE__) . '/loader.php'));
?>