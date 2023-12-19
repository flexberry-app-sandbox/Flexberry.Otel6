package Otel6.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Otel6.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Комната
 */
@Entity(name = "IISOtel6Комната")
@Table(schema = "public", name = "Комната")
public class Komnata {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодКомнаты")
    private Integer кодкомнаты;

    @Column(name = "Класс")
    private String класс;

    @Column(name = "КолвоМест")
    private String колвомест;

    @Column(name = "Стоимость")
    private Double стоимость;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Otel")
    @Convert("Otel")
    @Column(name = "Отель", length = 16, unique = true, nullable = false)
    private UUID _otelid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Otel", insertable = false, updatable = false)
    private Otel otel;


    public Komnata() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодКомнаты() {
      return кодкомнаты;
    }

    public void setКодКомнаты(Integer кодкомнаты) {
      this.кодкомнаты = кодкомнаты;
    }

    public String getКласс() {
      return класс;
    }

    public void setКласс(String класс) {
      this.класс = класс;
    }

    public String getКолвоМест() {
      return колвомест;
    }

    public void setКолвоМест(String колвомест) {
      this.колвомест = колвомест;
    }

    public Double getСтоимость() {
      return стоимость;
    }

    public void setСтоимость(Double стоимость) {
      this.стоимость = стоимость;
    }


}