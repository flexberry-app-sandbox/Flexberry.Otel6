import { Serializer as ОтельSerializer } from
  '../mixins/regenerated/serializers/i-i-s-otel6-отель';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОтельSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
