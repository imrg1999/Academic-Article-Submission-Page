class SignUpValidate{
    constructor(myForm, name, email, password) {
        this.myForm = myForm;
        this.name = name;
        this.email = email
        this.password = password;
    }

    
    formContent = () => {
        document.getElementById("myForm").addEventListener("submit",this.handleSubmit.bind(this));
    }
       handleSubmit(e) {
            let nN = document.getElementById(this.name).value.trim();
            let eE = document.getElementById(this.email).value.trim();
            let pP = document.getElementById(this.password).value.trim();

            let isOk = true;
            if(nN === "" || eE === "" || pP === "") {
                isOk = false
            }
            if(isOk === false) {
                e.preventDefault();
                alert("Please Enter all the fields");
                return
            }
        }
   
}

const validForm = new SignUpValidate("myForm", "name", "email", "password")
validForm.formContent();
