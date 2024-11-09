// ====== validate form ======
const contactForm = document.getElementById("myForm"),
    username = document.getElementById("username"),
    address = document.getElementById("address"),
    email = document.getElementById("email"),
    phone = document.getElementById("phone"),
    age = document.getElementById("age"),
    profile = document.getElementById("profile"),
    title = document.getElementById("title"),
    recommend = document.getElementById("recommend"),
    plan = document.getElementById("plan"),
    url = document.getElementById("url"),
    btnConfirm = document.getElementById("btnConfirm");

let hasError = false;

//Show input error messages
const showError = (input, message) => {
    const formControl = input.parentElement;
    $(formControl).addClass("is-error");
    hasError = false;
    // const small = formControl.querySelector("small");
    // small.innerText = message;
};

//show success colour
const showSucces = (input) => {
    const formControl = input.parentElement;
    $(formControl).removeClass("is-error");
    hasError = true;
};

//check email is valid
const checkEmail = (input) => {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSucces(input);
    } else {
        showError(input, "Email is not invalid");
    }
};

//checkRequired fields
const checkRequired = (inputArr) => {
    inputArr.forEach(function (input) {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSucces(input);
        }
    });
};

//get FieldName
const getFieldName = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

//check input Length
const checkLength = (input, min, max) => {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} must be at least ${min} characters`
        );
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} must be les than ${max} characters`
        );
    } else {
        showSucces(input);
    }
};

// check mails match
const checkMailMatch = (input1, input2) => {
    if (input1.value !== input2.value) {
        showError(input2, "Email do not match");
    }
};

// function validateForm() {
//     checkRequired([username, address, phone, email, age, profile, title, recommend, plan, url]);
//     checkLength(username, 1, 99);
//     checkEmail(email);
// if (hasError && $(".is-error").length === 0) {
//     $("#myForm").submit();
// } else {
//     return false;
// }
// }

$("#js-checkbox").change(function () {
    let isCheck = this.checked;
    if (isCheck) {
        $(this).addClass("show");
        $(".js-contact-confirm").addClass("show");
    } else {
        $(this).removeClass("show");
        $(".js-contact-confirm").removeClass("show");
    }
});

btnConfirm.addEventListener("click", (e) => {
    $('.js-contact-confirm').addClass("disabled");
    checkRequired([username, address, phone, email, age, profile, title, recommend, plan, url]);
    checkLength(username, 1, 99);
    checkEmail(email);;

    if (hasError && $(".is-error").length === 0) {
        $('.js-contact-confirm').addClass("disabled");
    } else {
        setTimeout(() => {
            $('.js-contact-confirm').removeClass("disabled");
        }, 1000);
        return false;
    }
});

// https://www.xserver.ne.jp/bizhp/contact-form-7-confirm-thanks/