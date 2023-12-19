import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-otel6-смарт-ключ', 'Unit | Serializer | i-i-s-otel6-смарт-ключ', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-otel6-смарт-ключ',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-otel6-классы',
    'transform:i-i-s-otel6-места',
    'transform:i-i-s-otel6-статусы',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
