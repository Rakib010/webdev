function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }
  const mail = email.split("@");
  const userName = mail[0];
  const domainName = mail[1];
  const message = `${userName} sent you an email from ${domainName}`;
  return message;
}

console.log(sendNotification("zihad@gmail.com"));
console.log(sendNotification("farhan34@yahoo.com "));
console.log(sendNotification("nadim.naem5@outlook.com"));
console.log(sendNotification("sadia8icloud.com"));
console.log(sendNotification("fahim234.hotmail.com "));
