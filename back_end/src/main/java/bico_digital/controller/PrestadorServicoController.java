package bico_digital.controller;

import java.math.BigDecimal;
import java.net.URI;
import java.util.List;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import bico_digital.model.dto.PrestadorServicoRequestDTO;
import bico_digital.model.dto.PrestadorServicoResponseDTO;
import bico_digital.model.dto.PrestadorServicoUpdateDTO;
import bico_digital.model.enums.CategoriaProfissional;
import bico_digital.service.PrestadorServicoService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/prestadores")
@RequiredArgsConstructor
public class PrestadorServicoController {

	
    private final PrestadorServicoService service;


    @PostMapping
    public ResponseEntity<PrestadorServicoResponseDTO> criar(@Valid @RequestBody PrestadorServicoRequestDTO request) {
        PrestadorServicoResponseDTO response = service.criar(request);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(response.id())
            .toUri();
        return ResponseEntity.created(uri).build();
    }

    @GetMapping
    public ResponseEntity<List<PrestadorServicoResponseDTO>> listarTodos(
            @RequestParam(required = false) CategoriaProfissional categoria) {
        List<PrestadorServicoResponseDTO> lista = service.listarTodos(categoria);
        return ResponseEntity.ok(lista);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PrestadorServicoResponseDTO> buscarPorId(@PathVariable UUID id) {
        PrestadorServicoResponseDTO response = service.buscarPorId(id);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PrestadorServicoResponseDTO> atualizar(
            @PathVariable UUID id,
            @Valid @RequestBody PrestadorServicoUpdateDTO update) {
        PrestadorServicoResponseDTO response = service.atualizar(id, update);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable UUID id) {
        service.deletar(id);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{id}/saldo")
    public ResponseEntity<PrestadorServicoResponseDTO> atualizarSaldo(
            @PathVariable UUID id,
            @RequestParam BigDecimal valor) {
        PrestadorServicoResponseDTO response = service.atualizarSaldo(id, valor);
        return ResponseEntity.ok(response);
    }
}
