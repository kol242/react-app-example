import { Form } from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";
import CreateStore from '../../../Stores/Workers/CreateStore'

export default class AddWorkerForm extends Form {
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
          name: "name",
          type: "text",
          rules: "required|string",
          placeholder: "Name...",
        },
        {
          name: "lastName",
          type: "text",
          rules: "required|string",
          placeholder: "Lastname...",
        },
        {
          name: "age",
          rules: "required|integer",
          placeholder: "Age...",
        },
        {
          name: "contract",
          extra: CreateStore.contracts
        }
      ]
    };
  }

  hooks() {
    return {
      onSuccess(form) {
        CreateStore.createWorker(form.values())
        console.log("Form Values!", form.values());
      },
      onError(form) {
        // get all form errors
        console.log("All form errors", form.errors());
      }
    };
  }
}