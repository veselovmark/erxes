import { compose } from 'react-komposer';
import { getTrackerLoader, composerOptions } from '/imports/react-ui/utils';
import { Meteor } from 'meteor/meteor';
import { Forms } from '/imports/api/forms/forms';
import { pagination } from '/imports/react-ui/common';
import { remove, duplicate } from '/imports/api/forms/methods';
import { List } from '../components';

function composer({ queryParams }, onData) {
  const { limit, loadMore, hasMore } = pagination(queryParams, 'forms.list.count');
  const subHandle = Meteor.subscribe('forms.list', limit);
  const forms = Forms.find().fetch();

  const removeForm = (id, callback) => {
    remove.call(id, callback);
  };

  const duplicateForm = (id, callback) => {
    duplicate.call({ id }, callback);
  };

  if (subHandle.ready()) {
    onData(null, { forms, removeForm, duplicateForm, loadMore, hasMore });
  }
}

export default compose(getTrackerLoader(composer), composerOptions({}))(List);
