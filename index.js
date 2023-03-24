function validateForm() {
    // Get the input fields
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
  
    // Check if the fields are empty
    if (name == "") {
      alert("Please fill in all fields");
      return false;
    }
  
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }
    if (!/\S+@\S+.\S+/.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }
    if (password == "") {
      alert("Password must be filled out");
      return false;
    }
  
    // If everything is valid, submit the form
    document.getElementById("signup-form");
  }
  
  //   array
  const users = [];
  
  function show() {
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const user = { name, email, password };
    users.push(user);
    console.log(users)

    
      // Validate the form
      if (!name || !email || !password || !/\S+@\S+\.\S+/.test(email)) {
        return;
      }
    
      // If the form is valid, hide the sign-up form
      document.getElementById("sign-up").style.display = "none";
    
      // Show the login form
      document.getElementById("menu").style.display = "block";
    }

  
    function logIn() {
      const email = document.getElementById("email1").value;
      const password = document.getElementById("password1").value;

      if (email == "") {
        alert("Email must be filled out");
        return false;
      }
      if (!/\S+@\S+.\S+/.test(email)) {
        alert("Invalid email address ");
        return false;
      }
      if (password == "") {
        alert("Password doesnt match");
        return false;
      }
    
      // If everything is valid, submit the form
      document.getElementById("menu1");

      const user = users.find(
        (users) => users.email === email && users.password === password
      );
     
    

      if (user) {
        alert("Login successful");
      } else {
        alert("Login failed");
      }
    }
    
    
    
    
  