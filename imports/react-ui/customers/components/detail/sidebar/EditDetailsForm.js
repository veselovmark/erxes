import React, { PropTypes, Component } from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  ButtonToolbar,
  Modal,
  Button,
} from 'react-bootstrap';
import Alert from 'meteor/erxes-notifier';

const propTypes = {
  customer: PropTypes.object,
  edit: PropTypes.func.isRequired,
};

const contextTypes = {
  closeModal: PropTypes.func.isRequired,
};

class EditDetailsForm extends Component {
  constructor(props) {
    super(props);

    const { name, email } = this.props.customer;
    this.state = { name, email };

    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  save(e) {
    e.preventDefault();

    const { customer } = this.props;
    const { name, email } = this.state;

    this.props.edit({ id: customer._id, doc: { name, email } }, error => {
      if (error) return Alert.error("Can't save customer details", error.reason);

      Alert.success('Congrats', 'Customer details are successfully saved.');
      return this.context.closeModal();
    });
  }

  render() {
    return (
      <form onSubmit={this.save}>
        <FormGroup>
          <ControlLabel>Name</ControlLabel>
          <FormControl
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Email</ControlLabel>
          <FormControl
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
        </FormGroup>

        <Modal.Footer>
          <ButtonToolbar className="pull-right">
            <Button
              bsStyle="link"
              onClick={() => {
                this.context.closeModal();
              }}
            >
              Cancel
            </Button>
            <Button type="submit" bsStyle="primary">Save</Button>
          </ButtonToolbar>
        </Modal.Footer>
      </form>
    );
  }
}

EditDetailsForm.propTypes = propTypes;
EditDetailsForm.contextTypes = contextTypes;

export default EditDetailsForm;
