import { Form } from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";
import EditStore from '../../../Stores/Workers/EditStore'
import WorkPlaceStore from '../../../Stores/Workplaces/WorkPlaceStore'

export default class EditWorkerForm extends Form {
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
          name: "workplace",
          extra: WorkPlaceStore.names,
        },
        {
          name: "age",
          rules: "required|integer",
          placeholder: "Unesite godine...",
        },
        {
          name: "salary",
          rules: "required|integer",
          placeholder: "Unesite plaću...",
        },
        {
          name: "contract",
          extra: EditStore.contract,
        }
      ]
    };
  }

  hooks() {
    return {
      onSuccess(form) {
        EditStore.updateWorker(form.values())
        console.log("Success", form.values());
      },
      onError(form) {
        // get all form errors
        console.log("All form errors", form.errors());
      }
    };
  }
}