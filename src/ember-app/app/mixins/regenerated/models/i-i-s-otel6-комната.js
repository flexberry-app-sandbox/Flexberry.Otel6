import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  класс: DS.attr('i-i-s-otel6-классы'),
  кодКомнаты: DS.attr('number'),
  колвоМест: DS.attr('i-i-s-otel6-места'),
  стоимость: DS.attr('decimal'),
  отель: DS.belongsTo('i-i-s-otel6-отель', { inverse: null, async: false })
});

export let ValidationRules = {
  класс: {
    descriptionKey: 'models.i-i-s-otel6-комната.validations.класс.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодКомнаты: {
    descriptionKey: 'models.i-i-s-otel6-комната.validations.кодКомнаты.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  колвоМест: {
    descriptionKey: 'models.i-i-s-otel6-комната.validations.колвоМест.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-otel6-комната.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  отель: {
    descriptionKey: 'models.i-i-s-otel6-комната.validations.отель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КомнатаE', 'i-i-s-otel6-комната', {
    кодКомнаты: attr('Код комнаты', { index: 0 }),
    класс: attr('Класс', { index: 1 }),
    колвоМест: attr('Количество мест', { index: 2 }),
    стоимость: attr('Стоимость', { index: 3 }),
    отель: belongsTo('i-i-s-otel6-отель', 'Отель', {
      наименование: attr('Наименование', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('КомнатаL', 'i-i-s-otel6-комната', {
    кодКомнаты: attr('Код комнаты', { index: 0 }),
    класс: attr('Класс', { index: 1 }),
    колвоМест: attr('Количество мест', { index: 2 }),
    стоимость: attr('Стоимость', { index: 3 }),
    отель: belongsTo('i-i-s-otel6-отель', 'Наименование', {
      наименование: attr('Наименование', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
