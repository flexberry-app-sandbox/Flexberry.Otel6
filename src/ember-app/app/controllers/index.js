import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.регитсрация-и-настройка-доступа.caption'),
          title: i18n.t('forms.application.sitemap.регитсрация-и-настройка-доступа.title'),
          children: [{
            link: 'i-i-s-otel6-доступ-l',
            caption: i18n.t('forms.application.sitemap.регитсрация-и-настройка-доступа.i-i-s-otel6-доступ-l.caption'),
            title: i18n.t('forms.application.sitemap.регитсрация-и-настройка-доступа.i-i-s-otel6-доступ-l.title'),
            icon: 'calendar',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-сотрудники.caption'),
          title: i18n.t('forms.application.sitemap.справочник-сотрудники.title'),
          children: [{
            link: 'i-i-s-otel6-должность-l',
            caption: i18n.t('forms.application.sitemap.справочник-сотрудники.i-i-s-otel6-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-сотрудники.i-i-s-otel6-должность-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-otel6-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.справочник-сотрудники.i-i-s-otel6-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-сотрудники.i-i-s-otel6-сотрудник-l.title'),
            icon: 'file',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-отель.caption'),
          title: i18n.t('forms.application.sitemap.справочник-отель.title'),
          children: [{
            link: 'i-i-s-otel6-отель-l',
            caption: i18n.t('forms.application.sitemap.справочник-отель.i-i-s-otel6-отель-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-отель.i-i-s-otel6-отель-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-otel6-комната-l',
            caption: i18n.t('forms.application.sitemap.справочник-отель.i-i-s-otel6-комната-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-отель.i-i-s-otel6-комната-l.title'),
            icon: 'phone',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.смарт-ключ.caption'),
          title: i18n.t('forms.application.sitemap.смарт-ключ.title'),
          children: [{
            link: 'i-i-s-otel6-смарт-ключ-l',
            caption: i18n.t('forms.application.sitemap.смарт-ключ.i-i-s-otel6-смарт-ключ-l.caption'),
            title: i18n.t('forms.application.sitemap.смарт-ключ.i-i-s-otel6-смарт-ключ-l.title'),
            icon: 'book',
            children: null
          }]
        }
      ]
    };
  }),
})