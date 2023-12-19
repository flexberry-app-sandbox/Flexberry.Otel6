import { Serializer as СмартКлючSerializer } from
  '../mixins/regenerated/serializers/i-i-s-otel6-смарт-ключ';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СмартКлючSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
