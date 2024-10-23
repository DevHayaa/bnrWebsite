function contactMe() {
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var query = document.getElementById('query').value;
    var loader = document.getElementById('loader');
    var errorText = document.getElementById('errorText');
    const successAlert = document.getElementById('successAlert');
    const errorAlert = document.getElementById('errorAlert');
    
    // Form data
    const formData = new FormData();
    formData.append('to', email);
    formData.append('data', query);
    formData.append('type', 'contact');
    loader.classList.remove('d-none');
    loader.classList.add('d-block');

    // API endpoint
    const apiUrl = 'https://dev-platform-api.bnr360.net/submit_customer_query/';

    // Fetch options
    const options = {
        method: 'POST',
        body: formData
    };

    if(name && email && query){
        if(!email.includes('@') || !email.includes('.')) {
            errorText.innerHTML = "Please Enter a valid Email";
            // Handle errors
            errorAlert.classList.remove('d-none');
            errorAlert.classList.add('d-block');
            setTimeout(() => {
                errorAlert.classList.remove('d-block');
                errorAlert.classList.add('d-none');
            }, 2000);
            loader.classList.remove('d-block');
            loader.classList.add('d-none');
        }
        else {
        fetch(apiUrl, options)
        .then(response => {
            if (!response.ok) {
                errorAlert.classList.remove('d-none');
                errorAlert.classList.add('d-block');
                setTimeout(() => {
                    errorAlert.classList.remove('d-block');
                    errorAlert.classList.add('d-none');
                }, 2000);
                loader.classList.remove('d-block');
                loader.classList.add('d-none');
                throw new Error('Network response was not ok');
            } else {
                successAlert.classList.remove('d-none');
                successAlert.classList.add('d-block');
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('query').value = '';
                setTimeout(() => {
                    successAlert.classList.remove('d-block');
                    successAlert.classList.add('d-none');
                }, 2000);
                loader.classList.remove('d-block');
                loader.classList.add('d-none');
            }
            return response.json();
        })
        .catch(error => {
            // Handle errors
            errorText.innerHTML = "Something went wrong. Please try again later.";
            errorAlert.classList.remove('d-none');
            errorAlert.classList.add('d-block');
            setTimeout(() => {
                errorAlert.classList.remove('d-block');
                errorAlert.classList.add('d-none');
            }, 2000);
            loader.classList.remove('d-block');
            loader.classList.add('d-none');
            console.error('There was a problem with the fetch operation:', error);
        });
    }
    } else {
        errorText.innerHTML = "Please fill all the input fields";
        // Handle errors
        errorAlert.classList.remove('d-none');
        errorAlert.classList.add('d-block');
        setTimeout(() => {
            errorAlert.classList.remove('d-block');
            errorAlert.classList.add('d-none');
        }, 2000);
        loader.classList.remove('d-block');
        loader.classList.add('d-none');
        console.error('Please fill all the input fields');
    }
    
}


function openProducts() {
    var productLi = document.getElementById('productLi');
    if(productLi.style.height === '200px'){
        productLi.style.height = 'unset';
    }else{
        productLi.style.height = '200px';
        
    }
}
function blurProducts() {
    console.log('blur');
    var productLi = document.getElementById('productLi');
    productLi.style.height = 'unset';
}

function productOpen(){
    var productOpp = document.getElementById("product");
    productOpp.classList.toggle("active");   

}

var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


let loadMore = document.querySelector("#load-btn");
let currentItem = 3;

loadMore.onclick = () => {
   let boxes = [...document.querySelectorAll(".dab-last .blog-carda")]
   for (i = currentItem; i < currentItem + 3; i++){
    boxes[i].style.display = 'block';
   }

   currentItem += 3;
}

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

//   contact-form
function contactMe() {
    // Get form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var companyName = document.getElementById('companyName').value;
    var organizationType = document.getElementById('organizationType').value;
    var requestType = document.getElementById('requestType').value;
    var country = document.getElementById('selectCountry').value;
    var numUsers = document.getElementById('numUsers').value;
    var description = document.getElementById('description').value;
    
    var loader = document.getElementById('loader');
    var errorText = document.getElementById('errorText');
    const successAlert = document.getElementById('successAlert');
    const errorAlert = document.getElementById('errorAlert');
    
    // Form data
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('companyName', companyName);
    formData.append('organizationType', organizationType);
    formData.append('requestType', requestType);
    formData.append('selectCountry', selectCountry);
    formData.append('numUsers', numUsers);
    formData.append('description', description);
    formData.append('type', 'contact');
    
    loader.classList.remove('d-none');
    loader.classList.add('d-block');

    // API endpoint
    const apiUrl = 'https://dev-platform-api.bnr360.net/submit_customer_query/';

    // Fetch options
    const options = {
        method: 'POST',
        body: formData
    };

    if(firstName && lastName && email && organizationType && requestType){
        if(!email.includes('@') || !email.includes('.')) {
            errorText.innerHTML = "Please Enter a valid Email";
            // Handle errors
            errorAlert.classList.remove('d-none');
            errorAlert.classList.add('d-block');
            setTimeout(() => {
                errorAlert.classList.remove('d-block');
                errorAlert.classList.add('d-none');
            }, 2000);
            loader.classList.remove('d-block');
            loader.classList.add('d-none');
        }
        else {
            fetch(apiUrl, options)
            .then(response => {
                if (!response.ok) {
                    errorAlert.classList.remove('d-none');
                    errorAlert.classList.add('d-block');
                    setTimeout(() => {
                        errorAlert.classList.remove('d-block');
                        errorAlert.classList.add('d-none');
                    }, 2000);
                    loader.classList.remove('d-block');
                    loader.classList.add('d-none');
                    throw new Error('Network response was not ok');
                } else {
                    successAlert.classList.remove('d-none');
                    successAlert.classList.add('d-block');
                    document.getElementById('firstName').value = '';
                    document.getElementById('lastName').value = '';
                    document.getElementById('email').value = '';
                    document.getElementById('phoneNumber').value = '';
                    document.getElementById('companyName').value = '';
                    document.getElementById('organizationType').value = '';
                    document.getElementById('requestType').value = '';
                    document.getElementById('selectCountry').value = '';
                    document.getElementById('numUsers').value = '';
                    document.getElementById('description').value = '';
                    setTimeout(() => {
                        successAlert.classList.remove('d-block');
                        successAlert.classList.add('d-none');
                    }, 2000);
                    loader.classList.remove('d-block');
                    loader.classList.add('d-none');
                }
                return response.json();
            })
            .catch(error => {
                // Handle errors
                errorText.innerHTML = "Something went wrong. Please try again later.";
                errorAlert.classList.remove('d-none');
                errorAlert.classList.add('d-block');
                setTimeout(() => {
                    errorAlert.classList.remove('d-block');
                    errorAlert.classList.add('d-none');
                }, 2000);
                loader.classList.remove('d-block');
                loader.classList.add('d-none');
                console.error('There was a problem with the fetch operation:', error);
            });
        }
    } else {
        errorText.innerHTML = "Please fill all required fields";
        errorAlert.classList.remove('d-none');
        errorAlert.classList.add('d-block');
        setTimeout(() => {
            errorAlert.classList.remove('d-block');
            errorAlert.classList.add('d-none');
        }, 2000);
        loader.classList.remove('d-block');
        loader.classList.add('d-none');
        console.error('Please fill all required fields');
    }
}
