package Otel6.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Otel6.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: СмартКлюч
 */
@Entity(name = "IISOtel6СмартКлюч")
@Table(schema = "public", name = "СмартКлюч")
public class SmartKlyuch {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодКлюча")
    private Integer кодключа;

    @Column(name = "Статус")
    private String статус;


    public SmartKlyuch() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодКлюча() {
      return кодключа;
    }

    public void setКодКлюча(Integer кодключа) {
      this.кодключа = кодключа;
    }

    public String getСтатус() {
      return статус;
    }

    public void setСтатус(String статус) {
      this.статус = статус;
    }


}