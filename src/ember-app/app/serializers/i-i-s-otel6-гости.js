import { Serializer as ГостиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-otel6-гости';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ГостиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
