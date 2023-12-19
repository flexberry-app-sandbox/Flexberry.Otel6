import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-otel6-должность-l');
  this.route('i-i-s-otel6-должность-e',
  { path: 'i-i-s-otel6-должность-e/:id' });
  this.route('i-i-s-otel6-должность-e.new',
  { path: 'i-i-s-otel6-должность-e/new' });
  this.route('i-i-s-otel6-доступ-l');
  this.route('i-i-s-otel6-доступ-e',
  { path: 'i-i-s-otel6-доступ-e/:id' });
  this.route('i-i-s-otel6-доступ-e.new',
  { path: 'i-i-s-otel6-доступ-e/new' });
  this.route('i-i-s-otel6-комната-l');
  this.route('i-i-s-otel6-комната-e',
  { path: 'i-i-s-otel6-комната-e/:id' });
  this.route('i-i-s-otel6-комната-e.new',
  { path: 'i-i-s-otel6-комната-e/new' });
  this.route('i-i-s-otel6-отель-l');
  this.route('i-i-s-otel6-отель-e',
  { path: 'i-i-s-otel6-отель-e/:id' });
  this.route('i-i-s-otel6-отель-e.new',
  { path: 'i-i-s-otel6-отель-e/new' });
  this.route('i-i-s-otel6-смарт-ключ-l');
  this.route('i-i-s-otel6-смарт-ключ-e',
  { path: 'i-i-s-otel6-смарт-ключ-e/:id' });
  this.route('i-i-s-otel6-смарт-ключ-e.new',
  { path: 'i-i-s-otel6-смарт-ключ-e/new' });
  this.route('i-i-s-otel6-сотрудник-l');
  this.route('i-i-s-otel6-сотрудник-e',
  { path: 'i-i-s-otel6-сотрудник-e/:id' });
  this.route('i-i-s-otel6-сотрудник-e.new',
  { path: 'i-i-s-otel6-сотрудник-e/new' });
});

export default Router;
