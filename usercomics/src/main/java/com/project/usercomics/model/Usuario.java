package com.project.usercomics.model;
import com.fasterxml.jackson.annotation.JsonFormat;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "TB_Usuario")
public class Usuario{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_usuario;

    @NotBlank
    private String nome;

    @NotBlank
    @Column(unique = true)
    private String email;

    @NotBlank
    @Column(unique = true)
    private String cpf;


    @JsonFormat(shape = JsonFormat.Shape.STRING,pattern = "dd-MM-yyyy")
    private LocalDate data;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name="TB_Usuario_has_Comics")
    private List<Comics> comics ;

    public Long getId() {
        return id_usuario;
    }

    public void setId(Long id_usuario) {
        this.id_usuario = id_usuario;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }
    public List<Comics> getComics() {
        return comics;
    }

    public void setComics(List<Comics> comics) {
        this.comics = comics;
    }
}
