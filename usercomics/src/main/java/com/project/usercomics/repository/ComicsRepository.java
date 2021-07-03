package com.project.usercomics.repository;

import com.project.usercomics.model.Comics;
import com.project.usercomics.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ComicsRepository extends JpaRepository<Comics, Long> {
}
