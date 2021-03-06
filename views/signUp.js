const getError = (errors, prop) => {
    try {
        return errors.mapped()[prop].msg
    } catch (error) {
        return ''
    }
}

module.exports = ({errors})=> {
    return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="description" content="Signup.">
    <title>SCE Tours Signup page.</title>
    <script type='text/javascript' src='../Routes/Verifier.js'></script>
    <link rel="stylesheet" type="text/css" href="css/main.css">
  </head>
  <body>
    <ul id="navigation">
      <li><a href="../">Home</a></li>
      <li><a href="deals">Deals</a></li>
      <li><a href="about">About us</a></li>
      <li><a href="contact">Contact us</a></li>
      <li><a href="login">Login</a></li>
    </ul>
    <h1>Sign up:</h1>

    </div>
    <br><form id='signUp' action="/signup" method="POST">
        <input type='email' name='email' placeholder='Email Address' required>
        <br><br>${getError(errors, 'email')}
        <br><br><input type="username" name="username" placeholder="Username" required>
        <br><br><input type="password" name="password" placeholder="Password" required>
        <br><br><input type="submit" name='submit' >
      </form>
    </form>
  </body>
</html>
`
}
