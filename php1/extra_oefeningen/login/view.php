<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Corporate slop login portal</title>
</head>
<body>
    <form action="process.php" method="post">
        <?php if(isset($errors["username"])){ ?>
            <sup style="color:red"><?= $errors["username"]?></sup><br>
        <?php } ?>
        <input type="text" placeholder="Username" name="username" id="username"> <br>
        <?php if(isset($errors["password"])){ ?>
            <sup style="color:red"><?= $errors["password"]?></sup><br>
        <?php } ?>
        <input type="password" placeholder="Password" name="password" id="password"> <br>
        <?php if(isset($errors["login"])){ ?>
            <sup style="color:red"><?= $errors["login"]?></sup><br>
        <?php } ?>
        <input type="submit" value="Login" id="submit"> <br>
    </form>
</body>
</html>