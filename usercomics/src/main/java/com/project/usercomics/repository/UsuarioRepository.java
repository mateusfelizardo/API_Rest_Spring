package com.project.usercomics.repository;

import com.project.usercomics.model.Usuario;
import com.project.usercomics.model.Comics;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

}
