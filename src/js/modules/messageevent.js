export function messageEvent (e) {
    e.preventDefault();
    
    const formData = new FormData(e.target.closest('.form-order'));
    const nameSelector = e.target.closest('.form-order').children.name;
    const phoneSelector = e.target.closest('.form-order').children.phone;
    
    const {name, phone} = Object.fromEntries( formData);


    let nameValidate;
    let phoneValidate;
    
    let userName;
    let userPhone;
    
    if (nameSelector) {
      userName = name;
      userName = userName.trim();
      nameValidate = userNameValidate(userName, nameSelector);
    } else {
      nameValidate = true;
      userName = 'Клієнт без імені';
    }

    if (phoneSelector) {
      userPhone = phone.split('').filter(item => item.match(/\d+/)).join('');
      phoneValidate = userPhoneValidate(userPhone, phoneSelector);
    }
    
    if (nameValidate && phoneValidate) {
      const res = sendMessage(userName, userPhone);
    }
  };

  /**
 * Method for send message to Telegram Bot with AXIOS 
 * @param {string} userName 
 * @param {number} userPhone 
 */
function sendMessage(userName, userPhone) {
  try {
    fetch("http://localhost:3500", {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: JSON.stringify({'userName': userName, 'userPhone': userPhone})
      })
    .then((res) => res.json())
    .then(data => {
        // console.log(data);
        if (data.ok) {
            appComplited();
            return true;
        } else {
            appFail(data.error_code);
            console.log("Error from Telegram: " + data.description);
        };
    })
  } catch (error) {
    console.log("no connect");
  }  
};



/**
 * Method for validation of user name
 * @param {string} name - user name from Form
 * @param {object} element - DOM element for show error
 * @returns {boolean}
 */
function userNameValidate(name, element) {
    if (name.length < 3) {
      element.classList.add('valid-error');
      name =  false;
    } else {
      element.classList.remove('valid-error');
      name =  true;
    }
    return name;
};


/**
 * Method for validation of user phone
 * @param {string} phone - user name from Form
 * @param {object} element - DOM element for show error
 * @returns {boolean}
 */
function userPhoneValidate(phone, element) {
    if (phone.length < 10) {
      element.classList.add('valid-error');
      phone =  false;
    } else {
      element.classList.remove('valid-error');
      phone =  true;
    }
    return phone;
};

/**
 * Method which show application completed
 */
function appComplited() {
  document.querySelectorAll('form').forEach(form => form.innerHTML = 'Очікуйте на дзвінок консультанта 👌')
}

/**
* Method which show application fail
*/
function appFail(errorCode) {
  document.querySelectorAll('form').forEach(form => form.innerHTML = `Вибачте, щось пішло не так, Вашу заявку відхилено ${errorCode}`)
}