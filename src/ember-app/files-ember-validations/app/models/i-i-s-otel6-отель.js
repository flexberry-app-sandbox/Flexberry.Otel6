import {
  defineNamespace,
  defineProjections,
  Model as ОтельMixin
} from '../mixins/regenerated/models/i-i-s-otel6-отель';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтельMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
