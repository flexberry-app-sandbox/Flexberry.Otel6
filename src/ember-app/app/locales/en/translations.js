import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISOtel6ДолжностьLForm from './forms/i-i-s-otel6-должность-l';
import IISOtel6ДоступLForm from './forms/i-i-s-otel6-доступ-l';
import IISOtel6КомнатаLForm from './forms/i-i-s-otel6-комната-l';
import IISOtel6ОтельLForm from './forms/i-i-s-otel6-отель-l';
import IISOtel6СмартКлючLForm from './forms/i-i-s-otel6-смарт-ключ-l';
import IISOtel6СотрудникLForm from './forms/i-i-s-otel6-сотрудник-l';
import IISOtel6ДолжностьEForm from './forms/i-i-s-otel6-должность-e';
import IISOtel6ДоступEForm from './forms/i-i-s-otel6-доступ-e';
import IISOtel6КомнатаEForm from './forms/i-i-s-otel6-комната-e';
import IISOtel6ОтельEForm from './forms/i-i-s-otel6-отель-e';
import IISOtel6СмартКлючEForm from './forms/i-i-s-otel6-смарт-ключ-e';
import IISOtel6СотрудникEForm from './forms/i-i-s-otel6-сотрудник-e';
import IISOtel6ГостиModel from './models/i-i-s-otel6-гости';
import IISOtel6ДолжностьModel from './models/i-i-s-otel6-должность';
import IISOtel6ДоступModel from './models/i-i-s-otel6-доступ';
import IISOtel6КомнатаModel from './models/i-i-s-otel6-комната';
import IISOtel6ОтельModel from './models/i-i-s-otel6-отель';
import IISOtel6РегистрЗаписиModel from './models/i-i-s-otel6-регистр-записи';
import IISOtel6СмартКлючModel from './models/i-i-s-otel6-смарт-ключ';
import IISOtel6СотрудникModel from './models/i-i-s-otel6-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-otel6-гости': IISOtel6ГостиModel,
    'i-i-s-otel6-должность': IISOtel6ДолжностьModel,
    'i-i-s-otel6-доступ': IISOtel6ДоступModel,
    'i-i-s-otel6-комната': IISOtel6КомнатаModel,
    'i-i-s-otel6-отель': IISOtel6ОтельModel,
    'i-i-s-otel6-регистр-записи': IISOtel6РегистрЗаписиModel,
    'i-i-s-otel6-смарт-ключ': IISOtel6СмартКлючModel,
    'i-i-s-otel6-сотрудник': IISOtel6СотрудникModel
  },

  'application-name': 'Otel6',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Otel6',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Otel6',
          title: 'Otel6'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'регитсрация-и-настройка-доступа': {
          caption: 'Регитсрация и настройка доступа',
          title: 'Регитсрация и настройка доступа',
          'i-i-s-otel6-доступ-l': {
            caption: 'Доступ',
            title: ''
          }
        },
        'справочник-сотрудники': {
          caption: 'Справочник сотрудники',
          title: 'Справочник сотрудники',
          'i-i-s-otel6-должность-l': {
            caption: 'Должность',
            title: 'Должность'
          },
          'i-i-s-otel6-сотрудник-l': {
            caption: 'Сотрудник',
            title: 'Сотрудник'
          }
        },
        'справочник-отель': {
          caption: 'Справочник отель',
          title: 'Справочник отель',
          'i-i-s-otel6-отель-l': {
            caption: 'Отель',
            title: 'Отель'
          },
          'i-i-s-otel6-комната-l': {
            caption: 'Комната',
            title: 'Комната'
          }
        },
        'смарт-ключ': {
          caption: 'Смарт ключ',
          title: 'Смарт ключ',
          'i-i-s-otel6-смарт-ключ-l': {
            caption: 'СмартКлюч',
            title: 'Смарт ключ'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-otel6-должность-l': IISOtel6ДолжностьLForm,
    'i-i-s-otel6-доступ-l': IISOtel6ДоступLForm,
    'i-i-s-otel6-комната-l': IISOtel6КомнатаLForm,
    'i-i-s-otel6-отель-l': IISOtel6ОтельLForm,
    'i-i-s-otel6-смарт-ключ-l': IISOtel6СмартКлючLForm,
    'i-i-s-otel6-сотрудник-l': IISOtel6СотрудникLForm,
    'i-i-s-otel6-должность-e': IISOtel6ДолжностьEForm,
    'i-i-s-otel6-доступ-e': IISOtel6ДоступEForm,
    'i-i-s-otel6-комната-e': IISOtel6КомнатаEForm,
    'i-i-s-otel6-отель-e': IISOtel6ОтельEForm,
    'i-i-s-otel6-смарт-ключ-e': IISOtel6СмартКлючEForm,
    'i-i-s-otel6-сотрудник-e': IISOtel6СотрудникEForm
  },

});

export default translations;
