import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from '/imports/react-ui/layout/components';
import { EmptyState } from '/imports/react-ui/common';
import { InternalNotes } from '/imports/react-ui/customers/containers';
import Details from './Details';
import TaggerSection from './TaggerSection';
import MessengerSection from './MessengerSection';
import TwitterSection from './TwitterSection';
import FacebookSection from './FacebookSection';

const propTypes = {
  customer: PropTypes.object.isRequired,
};

function RightSidebar({ customer }) {
  return (
    <Wrapper.Sidebar>
      <Details customer={customer} />
      <Wrapper.Sidebar.Section>
        <h3>Activities</h3>
        <EmptyState icon={<i className="ion-flash" />} text="No activities" size="small" />
      </Wrapper.Sidebar.Section>
      <InternalNotes customerId={customer._id} />
      <MessengerSection customer={customer} />
      <TwitterSection customer={customer} />
      <FacebookSection customer={customer} />
      <TaggerSection customer={customer} />
    </Wrapper.Sidebar>
  );
}

RightSidebar.propTypes = propTypes;

export default RightSidebar;
