package com.project.usercomics.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;


@Entity
@Table(name = "TB_Comics")
public class Comics{

    @Id
    private Long id_comic;

    @NotBlank
    private String titulo;


    private double preco;


    @NotBlank
    private String isbn;

    @NotBlank
    @Lob
    private String descricao;


    private boolean deconto;

    public Long getId() {
        return id_comic;
    }

    public void setId(Long id) {
        this.id_comic = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(float preco) {
        this.preco = preco;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}
