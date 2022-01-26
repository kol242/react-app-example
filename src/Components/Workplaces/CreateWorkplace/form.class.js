import { Form } from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";
import WpCreateStore from '../../../Stores/Workplaces/WpCreateStore'

export default class CreateWP extends Form {
  plugins() {
    return {
      dvr: dvr({
        package: validatorjs,
        extend: ({ validator, form }) => {
          const messages = validator.getMessages('en')
          messages.required = 'Polje ne smije biti prazno!'
          messages.integer = 'Polje mora biti broj!'
          validator.setMessages('en', messages)
        }
      })
    };
  }

  setup() {
    return {
      fields: [
        {
          name: "name",
          type: "text",
          rules: "required|string",
          placeholder: "Unesite naziv...",
        },
        {
          name: "description",
          type: "text",
          rules: "required|string",
          placeholder: "Unesite kratki opis...",
        },
        {
          name: "salary",
          rules: "required|integer",
          placeholder: "Unesite plaću...",
        }
      ]
    };
  }

  hooks() {
    return {
      onSuccess(form) {
        WpCreateStore.createWorkplace(form.values())
        console.log("Success", form.values());
      },
      onError(form) {
        console.log("All form errors", form.errors());
      }
    };
  }
}