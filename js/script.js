// 회원가입 유효성 검사 함수
sign_up = () => {
    const user_id = document.getElementById("user_id");
    const user_password = document.getElementById("user_password");
    const user_password_confirm = document.getElementById("user_password_check");
    const user_name = document.getElementById("user_name");
    const user_email = document.getElementById("user_email");
    const user_phone = document.getElementById("user_phone");
    const user_birth = document.getElementById("user_birth");

    const reg_exp_id = /^[a-zA-Z0-9]{4,12}$/;
    const reg_exp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()_+]).{4,20}$/;
    const reg_exp_name = /^[가-힣]{2,5}$/;
    const reg_exp_email = /^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[a-zA-Z]{2,3}$/;
    const reg_exp_phone = /^\d{3}-\d{4}-\d{4}$/;

    if (!reg_exp_id.test(user_id.value)) {
        alert("아이디는 4~12자의 영문 대소문자와 숫자만 가능합니다.");
        user_id.focus();
        return false;
    }
    if (!reg_exp_password.test(user_password.value)) {
        alert("비밀번호는 4~20자의 영문 대소문자, 숫자, 특수문자를 포함해야 합니다.");
        user_password.focus();
        return false;
    }
    if (user_password.value !== user_password_confirm.value) {
        alert("비밀번호가 일치하지 않습니다.");
        user_password_confirm.focus();
        return false;
    }
    if (!reg_exp_name.test(user_name.value)) {
        alert("이름은 2~5자의 한글만 가능합니다.");
        user_name.focus();
        return false;
    }
    if (!reg_exp_email.test(user_email.value)) {
        alert("이메일 형식이 올바르지 않습니다.");
        user_email.focus();
        return false;
    }
    if (!reg_exp_phone.test(user_phone.value)) {
        alert("전화번호 형식이 올바르지 않습니다.");
        user_phone.focus();
        return false;
    }
    if (user_birth.value === "") {
        alert("생년월일을 입력해주세요.");
        user_birth.focus();
        return false;
    }

    alert("회원가입 검증 통과!");
    return true;
};

// 주민등록번호 유효성 검사 함수
is_valid = () => {
    const ssn_1 = document.getElementById("ssn_1").value;
    const ssn_2 = document.getElementById("ssn_2").value;

    if (ssn_1 === "" || ssn_2 === "") {
        alert("주민등록번호를 입력해주세요.");
        return false;
    }
    if (ssn_1.length !== 6 || ssn_2.length !== 7) {
        alert("주민등록번호는 13자리입니다.");
        return false;
    }
    if (isNaN(ssn_1) || isNaN(ssn_2)) {
        alert("주민등록번호는 숫자만 입력 가능합니다.");
        return false;
    }

    const ssn = (ssn_1 + ssn_2).split("").map(Number);
    const check_arr = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];

    let sum = 0;
    for (let i = 0; i < check_arr.length; i++) {
        sum += ssn[i] * check_arr[i];
    }

    const valid_num = (11 - (sum % 11)) % 10;

    if (valid_num === ssn[12]) {
        alert("주민등록번호가 유효합니다.");
        return true;
    } else {
        alert("주민등록번호가 유효하지 않습니다.");
        return false;
    }
};
