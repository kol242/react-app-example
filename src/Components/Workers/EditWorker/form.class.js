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
          label: "Name",
        },
        {
          name: "lastName",
          type: "text",
          rules: "required|string",
          label: "Lastname",
        },
        {
          name: "workplace",
          label: "Workplaces",
          extra: WorkPlaceStore.names,
        },
        {
          name: "age",
          rules: "required|integer",
          label: "Age",
        },
        {
          name: "salary",
          rules: "required|integer",
          label: "Salary",
        },
        {
          label: "Contract",
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