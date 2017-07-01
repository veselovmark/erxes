import { compose } from 'react-komposer';
import { getTrackerLoader } from '/imports/react-ui/utils';
import { editCustomer } from '/imports/api/customers/methods';
import EditDetailsForm from '../components/detail/sidebar/EditDetailsForm';

function composer({ customerId }, onData) {
  onData(null, {
    edit({ id, doc }, callback) {
      return editCustomer.call({ id, doc }, callback);
    },
  });
}

export default compose(getTrackerLoader(composer))(EditDetailsForm);
