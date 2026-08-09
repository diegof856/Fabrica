package bico_digital.service;

import bico_digital.model.dto.PrestadorServicoRequestDTO;
import bico_digital.model.dto.PrestadorServicoResponseDTO;
import bico_digital.model.dto.PrestadorServicoUpdateDTO;
import bico_digital.model.enums.CategoriaProfissional;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

public interface PrestadorServicoService {

    PrestadorServicoResponseDTO criar(PrestadorServicoRequestDTO request);

    List<PrestadorServicoResponseDTO> listarTodos(CategoriaProfissional categoria);

    PrestadorServicoResponseDTO buscarPorId(UUID id);

    PrestadorServicoResponseDTO atualizar(UUID id, PrestadorServicoUpdateDTO update);

    void deletar(UUID id);

    PrestadorServicoResponseDTO atualizarSaldo(UUID id, BigDecimal valor);
}
