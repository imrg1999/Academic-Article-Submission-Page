
class FormValidate {
    constructor(publishForm, title, author, email, category, abstract, content) {
        this.publishForm = publishForm;
        this.title = title;
        this.author = author;
        this.email = email;
        this.category = category;
        this.abstract = abstract;
        this.content = content;
    }

    formContent = () => {
        document.getElementById(this.publishForm).addEventListener("submit",this.handleSubmit.bind(this));
    }

    handleSubmit(e){
        let tT = document.getElementById(this.title).value.trim();
        let aA = document.getElementById(this.author).value.trim();
        let eE = document.getElementById(this.email).value.trim();
        let cC = document.getElementById(this.category).value.trim();
        let aB = document.getElementById(this.abstract).value.trim();
        let cT = document.getElementById(this.content).value.trim();

        let isOk = true;

        if(tT === "" || aA === "" || eE === "" || cC === "" || aB === "" || cT === "") {
            isOk = false
        }

        if(isOk === false) {
            e.preventDefault();
            alert("Fill all the fields above");
            return
        }
    }


}
const validForm = new FormValidate("publishForm","title", "author", "email", "category", "abstract", "content")
validForm.formContent();


