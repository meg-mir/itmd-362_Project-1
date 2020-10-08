function buttonPress() {
    var first_name_field = document.getElementByID('first').value ;
    var last_name_field = document.getElementByID('last') ;
    var phone_field= document.getElementByID('phone').value ;
    var email_field = document.getElementByID('email').value ;
    var age_field = document.getElementByID('age').value ;
    var location_field = document.getElementByID('location').value ;
    var comments_field = document.getElementByID('comments').value ;
    var submit_field = document.getElementByID ('submit').value ;
    if (first && last && phone && email && age && comments) {
      alert.button('You have successfully entered your submission!')
    } else {
      alert('Please fill out all fields') ;
    }
}
