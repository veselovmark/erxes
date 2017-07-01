import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Wrapper } from '/imports/react-ui/layout/components';
import { NameCard, ModalTrigger } from '/imports/react-ui/common';
import { EditDetailsForm } from '/imports/react-ui/customers/containers';

const propTypes = {
  customer: PropTypes.object.isRequired,
};

class Details extends Component {
  render() {
    return (
      <Wrapper.Sidebar.Section>
        <h3>Customer details</h3>
        <Wrapper.Sidebar.Section.QuickButtons>
          <ModalTrigger
            title="Edit customer details"
            trigger={<a className="quick-button"><i className="ion-edit" /></a>}
          >
            <EditDetailsForm customer={this.props.customer} />
          </ModalTrigger>
        </Wrapper.Sidebar.Section.QuickButtons>

        <ul className="sidebar-list no-link">
          <li>
            <NameCard customer={this.props.customer} avatarSize={40} />
          </li>
          <li>
            Created
            <span className="counter">
              {moment(this.props.customer.createdAt).fromNow()}
            </span>
          </li>
        </ul>
      </Wrapper.Sidebar.Section>
    );
  }
}

Details.propTypes = propTypes;

export default Details;
