class FormValidate{
    constructor(myForm, name, email, contact){
        this.myForm = myForm;
        this.name = name;
        this.email = email;
        this.contact = contact
    }

    formContent = () => {
        document.getElementById("myForm").addEventListener("submit",this.handleSubmit.bind(this));
    }
       handleSubmit(e) {
            let nN = document.getElementById(this.name).value.trim();
            let eE = document.getElementById(this.email).value.trim();
            let cC = document.getElementById(this.contact).value.trim();

            let isOk = true;
            if(nN === "" || eE === "" || cC === "") {
                isOk = false
            }
            if(isOk === false) {
                e.preventDefault();
                alert("Please Enter all the fields");
                return
            }
        }
   
}

const validForm = new FormValidate("myForm", "name", "email", "contact")
validForm.formContent();