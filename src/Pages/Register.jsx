function Register() {
  return (
    <div className="page">
      <h1>Register</h1>

      <form className="form">
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Hall Ticket No" />
        <input type="password" placeholder="Password" />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
