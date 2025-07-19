
/* 
1. add event listener to the add money button (form submit )
 * make sure to preventDefault so that page doesn't reloads 
2. get the money user wants to add
* also, get the pin number provided
3. verify the pic number. for, wrong pin number ==> failed to add 
* for right pin number , allow to add the number to the account balance 
4.get the current balance
5. add money to be added with current balance 
6. display/update the balance in the DOM/UI
*/

document.getElementById("addMoney").addEventListener("click", function (event) {
    event.preventDefault();
  
    const AddMoneyInput = document.getElementById("AddMoneyInput").value;
  
    const pinNumberInput = document.getElementById("pinNumberInput").value;
  
    if (pinNumberInput === "1234") {
      // console.log("Add Money To Your Account");
  
      // get the current balance
      const balance = document.getElementById("balance").innerText;
  
      // add addMoneyInput with balance
      const AddMoneyNumber = parseInt(AddMoneyInput);
      const balanceNumber = parseInt(balance);
      const newBalance = AddMoneyNumber - balanceNumber;
      console.log(newBalance);
  
      // update the balance in the UI/DOM
      document.getElementById("balance").innerText = newBalance;
    } else {
      alert("Failed To Add Money!");
    }
  });
  