import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import КлассыEnum from '../enums/i-i-s-otel6-классы';

export default FlexberryEnum.extend({
  enum: КлассыEnum,
  sourceType: 'IIS.Otel6.Классы'
});
