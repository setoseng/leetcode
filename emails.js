var numUniqueEmails = function(emails) {
  emails.forEach(function(e){
    //e = e.split("@");
    var newString = e.replace(/.+/, "");
    console.log(newString);
  });
};

numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]);
