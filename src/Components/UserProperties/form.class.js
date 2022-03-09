import { Form } from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";
import AuthService from '../../Common/Services/AuthService'
import SignupStore from '../../Stores/SignupStore'

export default class UpdateForm extends Form {
  plugins() {
    return {
      dvr: dvr({
        package: validatorjs,
        extend: ({ validator, form }) => {
          const messages = validator.getMessages('en')
          messages.required = "This field can't be empty!"
          messages.same = "Passwords are not matching!"
          messages.integer = "This field must be a number!"
          messages.between = "Password must be between 6 and 20 characters"
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
          rules: "string",
          label: "Email",
          placeholder: AuthService.currentUser ? AuthService.currentUser.email : ""
        },
        {
          name: "username",
          type: "text",
          rules: "string",
          label: "Username",
          placeholder: AuthService.userData.username
        },
        {
          name: "company",
          type: "text",
          rules: "string",
          label: "Company Name",
          placeholder: AuthService.userData.company
        },
        {
          name: "activity",
          type: "text",
          rules: "string",
          label: "Company Activity",
          placeholder: AuthService.userData.activity
        },
        {
          name: "password",
          type: "password",
          path: "password",
          rules: "required|string|between:6,20",
          label: "Password",
        },
        {
          name: "confirmPass",
          type: "password",
          path: "password",
          rules: "required|string|between:6,20|same:password",
          label: "Confirm password",
        },
        {
          name: "country",
          label: "Country",
          type: "text",
          extra: SignupStore.countries,
          placeholder: AuthService.userData.country
        }
      ]
    };
  }

  hooks() {
    return {
      onSuccess(form) {
        AuthService.userUpdate(form.values())
        console.log("Form Values: ", form.values());
      },
      onError(form) {
        // get all form errors
        console.log("All form errors", form.errors());
      }
    };
  }
}