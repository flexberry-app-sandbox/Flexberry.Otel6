import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СмартКлючMixin
} from '../mixins/regenerated/models/i-i-s-otel6-смарт-ключ';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СмартКлючMixin, Validations, {
});

defineProjections(Model);

export default Model;
