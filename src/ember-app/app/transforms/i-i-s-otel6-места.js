import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import МестаEnum from '../enums/i-i-s-otel6-места';

export default FlexberryEnum.extend({
  enum: МестаEnum,
  sourceType: 'IIS.Otel6.Места'
});
