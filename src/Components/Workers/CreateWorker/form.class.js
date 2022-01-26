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
          placeholder: "Unesite ime...",
        },
        {
          name: "lastName",
          type: "text",
          rules: "required|string",
          placeholder: "Unesite prezime...",
        },
        {
          name: "age",
          rules: "required|integer",
          placeholder: "Unesite godine...",
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