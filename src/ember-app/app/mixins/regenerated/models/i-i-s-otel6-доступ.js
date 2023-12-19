import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  доступ: DS.attr('boolean'),
  кодДоступа: DS.attr('number'),
  колвоКлючей: DS.attr('number'),
  комната: DS.belongsTo('i-i-s-otel6-комната', { inverse: null, async: false }),
  смартКлюч: DS.belongsTo('i-i-s-otel6-смарт-ключ', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-otel6-сотрудник', { inverse: null, async: false }),
  регистрЗаписи: DS.hasMany('i-i-s-otel6-регистр-записи', { inverse: 'доступ', async: false }),
  гости: DS.hasMany('i-i-s-otel6-гости', { inverse: 'доступ', async: false })
});

export let ValidationRules = {
  доступ: {
    descriptionKey: 'models.i-i-s-otel6-доступ.validations.доступ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодДоступа: {
    descriptionKey: 'models.i-i-s-otel6-доступ.validations.кодДоступа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  колвоКлючей: {
    descriptionKey: 'models.i-i-s-otel6-доступ.validations.колвоКлючей.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  комната: {
    descriptionKey: 'models.i-i-s-otel6-доступ.validations.комната.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  смартКлюч: {
    descriptionKey: 'models.i-i-s-otel6-доступ.validations.смартКлюч.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-otel6-доступ.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регистрЗаписи: {
    descriptionKey: 'models.i-i-s-otel6-доступ.validations.регистрЗаписи.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  гости: {
    descriptionKey: 'models.i-i-s-otel6-доступ.validations.гости.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДоступE', 'i-i-s-otel6-доступ', {
    кодДоступа: attr('Код доступа', { index: 0 }),
    доступ: attr('Доступ', { index: 1 }),
    сотрудник: belongsTo('i-i-s-otel6-сотрудник', 'Сотрудник', {
      фИО: attr('ФИО', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фИО' }),
    комната: belongsTo('i-i-s-otel6-комната', 'Комната', {
      кодКомнаты: attr('Код комнаты', { index: 5, hidden: true }),
      колвоМест: attr('Количество мест', { index: 6 }),
      класс: attr('Класс комнаты', { index: 7 }),
      стоимость: attr('Стоимость комнаты', { index: 8 })
    }, { index: 4, displayMemberPath: 'кодКомнаты' }),
    смартКлюч: belongsTo('i-i-s-otel6-смарт-ключ', 'Смарт ключ', {
      кодКлюча: attr('Код ключа', { index: 10, hidden: true }),
      статус: attr('Статус ключа', { index: 12 })
    }, { index: 9, displayMemberPath: 'кодКлюча' }),
    колвоКлючей: attr('Количество ключей', { index: 11 }),
    регистрЗаписи: hasMany('i-i-s-otel6-регистр-записи', 'Регистр записи', {
      кодРегистра: attr('Код регистра', { index: 0 }),
      датаЗаселения: attr('Дата заселения', { index: 1 }),
      датаВыезда: attr('Дата выезда', { index: 2 })
    }),
    гости: hasMany('i-i-s-otel6-гости', 'Гости', {
      кодГостя: attr('Код гостя', { index: 0 }),
      фИО: attr('ФИО', { index: 1 }),
      комментарий: attr('Комментарий', { index: 2 })
    })
  });

  modelClass.defineProjection('ДоступL', 'i-i-s-otel6-доступ', {
    кодДоступа: attr('Код доступа', { index: 0 }),
    доступ: attr('Доступ', { index: 1 }),
    сотрудник: belongsTo('i-i-s-otel6-сотрудник', 'ФИО', {
      фИО: attr('ФИО', { index: 2 })
    }, { index: -1, hidden: true }),
    комната: belongsTo('i-i-s-otel6-комната', 'Код комнаты', {
      кодКомнаты: attr('Код комнаты', { index: 3 }),
      колвоМест: attr('Количество мест', { index: 4 }),
      класс: attr('Класс комнаты', { index: 5 }),
      стоимость: attr('Стоимость комнаты', { index: 6 })
    }, { index: -1, hidden: true }),
    смартКлюч: belongsTo('i-i-s-otel6-смарт-ключ', 'Код ключа', {
      кодКлюча: attr('Код ключа', { index: 7 }),
      статус: attr('Статус ключа', { index: 9 })
    }, { index: -1, hidden: true }),
    колвоКлючей: attr('Колво ключей', { index: 8 })
  });
};
