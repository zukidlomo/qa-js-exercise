function validateStatus(code) {
    return code === 200 ? "Success" : "Error";
  }
  console.log(validateStatus(200));