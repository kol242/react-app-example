import { Form } from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";

export default class SignUp extends Form {
  plugins() {
    return {
      dvr: dvr({
        package: validatorjs,
        extend: ({ validator, form }) => {
          const messages = validator.getMessages('en')
          messages.required = "This field can't be empty!"
          messages.integer = 'This field must be a number!'
          validator.setMessages('en', messages)
        }
      })
    };
  }

  setup() {
    return {
      fields: [
        {
          name: "email",
          type: "text",
          rules: "required|string",
          placeholder: "Email...",
        },
        {
          name: "password",
          type: "text",
          rules: "required|string",
          placeholder: "Password...",
        },
        {
          name: "confirmPass",
          type: "text",
          rules: "required|string",
          placeholder: "Confirm password...",
        }
      ]
    };
  }

  hooks() {
    return {
      onSuccess(form) {
        // CreateStore.createWorker(form.values())
        console.log("Form Values!", form.values());
      },
      onError(form) {
        // get all form errors
        console.log("All form errors", form.errors());
      }
    };
  }
}