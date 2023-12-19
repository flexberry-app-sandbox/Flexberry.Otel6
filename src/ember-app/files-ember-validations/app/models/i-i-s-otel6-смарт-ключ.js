import {
  defineNamespace,
  defineProjections,
  Model as СмартКлючMixin
} from '../mixins/regenerated/models/i-i-s-otel6-смарт-ключ';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СмартКлючMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
