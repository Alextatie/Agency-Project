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
        <meta name="description" content="Login">
        <title>SCE Tours Login  page.</title>
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
        <div id="Login">
          <h1>Login:</h1>
          <form action="/login" method="POST">
              <input type="email" name="email" placeholder="Email" required>
              <br>
              <br><input type="password" name="password" placeholder="Password" required>
              <br>
              ${getError(errors, 'email')}
              <br><input type="submit">
          </form>
        </div>
        <p>Don't have an account?
        <a href="signup">Sign up!</a>
        </p>
        <p>Employee Login:
        <a href="emlogin"> Login</a>
        </p>
      </body>
    </html>

`
}
