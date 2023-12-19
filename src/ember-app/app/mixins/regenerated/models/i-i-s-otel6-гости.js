import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодГостя: DS.attr('number'),
  комментарий: DS.attr('string'),
  фИО: DS.attr('string'),
  доступ: DS.belongsTo('i-i-s-otel6-доступ', { inverse: 'гости', async: false })
});

export let ValidationRules = {
  кодГостя: {
    descriptionKey: 'models.i-i-s-otel6-гости.validations.кодГостя.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  комментарий: {
    descriptionKey: 'models.i-i-s-otel6-гости.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-otel6-гости.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  доступ: {
    descriptionKey: 'models.i-i-s-otel6-гости.validations.доступ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГостиE', 'i-i-s-otel6-гости', {
    кодГостя: attr('Код гостя', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    комментарий: attr('Комментарий', { index: 2 })
  });
};
