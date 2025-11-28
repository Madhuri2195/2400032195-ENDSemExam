function Login() {
  return (
    <div className="page">
      <h1>Login</h1>

      <form className="form">
        <input type="text" placeholder="Hall Ticket No" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
