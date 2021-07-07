package com.project.usercomics.controller;

import com.project.usercomics.model.Comics;
import com.project.usercomics.model.Usuario;
import com.project.usercomics.repository.ComicsRepository;
import com.project.usercomics.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/api")
public class ApiController {

    @Autowired
    ComicsRepository comicsRepository;

    @Autowired
    UsuarioRepository usuarioRepository;

    @GetMapping("/comics")
    public List<Comics> listaComics(){
        return comicsRepository.findAll();
    }

    @PostMapping("/comics")
    public Comics salvarComic(@RequestBody Comics comics){
        return comicsRepository.save(comics);
    }

    @GetMapping("/usuarios")
    public List<Usuario> listaUsuarios(){
        return usuarioRepository.findAll();
    }

    @GetMapping("/usuarios/{id}")
    public Optional<Usuario> findUsuariosById(@PathVariable("id") long id){

        return usuarioRepository.findById(id);
    }

    @PostMapping("/usuarios")
    public Usuario salvarUsuario(@RequestBody Usuario usuario){

        return usuarioRepository.save(usuario);
    }

}
