import { Serializer as ДоступSerializer } from
  '../mixins/regenerated/serializers/i-i-s-otel6-доступ';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДоступSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
