const numUniqueEmails = emails => {
  const hasReceivedMail = {};
  emails.forEach(email =>
    hasReceivedMail[email.substring(0, (email.indexOf('+') + 1
    || email.indexOf('@') + 1) - 1).replace(/\./g,'') + email.substring(email.indexOf('@'))] = true
  );
  console.log(Object.keys(hasReceivedMail).length);
  console.log("Has Received Object: ", hasReceivedMail);
};

numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]);
