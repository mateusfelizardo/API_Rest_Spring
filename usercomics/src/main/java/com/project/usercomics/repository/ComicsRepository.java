package com.project.usercomics.repository;

import com.project.usercomics.model.Comics;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ComicsRepository extends JpaRepository<Comics, Long> {

}
