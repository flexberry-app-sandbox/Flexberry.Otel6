import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-otel6-доступ', 'Unit | Model | i-i-s-otel6-доступ', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-otel6-гости',
    'model:i-i-s-otel6-должность',
    'model:i-i-s-otel6-доступ',
    'model:i-i-s-otel6-комната',
    'model:i-i-s-otel6-отель',
    'model:i-i-s-otel6-регистр-записи',
    'model:i-i-s-otel6-смарт-ключ',
    'model:i-i-s-otel6-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
