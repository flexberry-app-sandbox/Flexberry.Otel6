import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодКлюча: DS.attr('number'),
  статус: DS.attr('i-i-s-otel6-статусы')
});

export let ValidationRules = {
  кодКлюча: {
    descriptionKey: 'models.i-i-s-otel6-смарт-ключ.validations.кодКлюча.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-otel6-смарт-ключ.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СмартКлючE', 'i-i-s-otel6-смарт-ключ', {
    кодКлюча: attr('Код ключа', { index: 0 }),
    статус: attr('Статус', { index: 1 })
  });

  modelClass.defineProjection('СмартКлючL', 'i-i-s-otel6-смарт-ключ', {
    кодКлюча: attr('Код ключа', { index: 0 }),
    статус: attr('Статус', { index: 1 })
  });
};
