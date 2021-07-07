package com.project.usercomics.controller;

import com.project.usercomics.model.Comics;
import com.project.usercomics.model.Usuario;
import com.project.usercomics.repository.ComicsRepository;
import com.project.usercomics.repository.UsuarioRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/api")
@Api(value ="API REST USER_COMICS)")
public class ApiController {

    @Autowired
    ComicsRepository comicsRepository;

    @Autowired
    UsuarioRepository usuarioRepository;

    @GetMapping("/comics")
    @ApiOperation(value = "Retorna uma lista de Comics")
    public List<Comics> listaComics(){
        return comicsRepository.findAll();
    }

    @PostMapping("/comics")
    @ApiOperation(value = "Cadastra um Comics")
    public Comics salvarComic(@RequestBody Comics comics){
        return comicsRepository.save(comics);
    }

    @GetMapping("/usuarios")
    @ApiOperation(value = "Retorna uma lista de Usuarios")
    public List<Usuario> listaUsuarios(){
        return usuarioRepository.findAll();
    }

    @GetMapping("/usuarios/{id}")
    @ApiOperation(value = "Retorna um Usuarios pelo id")
    public Optional<Usuario> findUsuariosById(@PathVariable("id") long id){

        return usuarioRepository.findById(id);
    }

    @PostMapping("/usuarios")
    @ApiOperation(value = "Cadastra um usuario")
    public Usuario salvarUsuario(@RequestBody Usuario usuario){

        return usuarioRepository.save(usuario);
    }

}
