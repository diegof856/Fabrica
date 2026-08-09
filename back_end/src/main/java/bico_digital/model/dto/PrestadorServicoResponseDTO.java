package bico_digital.model.dto;

import bico_digital.model.entity.PrestadorServico;
import bico_digital.model.enums.CategoriaProfissional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

public record PrestadorServicoResponseDTO(
    UUID id,
    String nome,
    String email,
    String cpfCnpj,
    String tipoUsuario,
    CategoriaProfissional categoriaProfissional,
    BigDecimal saldoCarteira,
    String telefone,
    String biografia,
    Boolean ativo,
    LocalDateTime criadoEm
) {
    public static PrestadorServicoResponseDTO fromEntity(PrestadorServico entity) {
        return new PrestadorServicoResponseDTO(
            entity.getId(),
            entity.getNome(),
            entity.getEmail(),
            entity.getCpfCnpj(),
            entity.getTipoUsuario(),
            entity.getCategoriaProfissional(),
            entity.getSaldoCarteira(),
            entity.getTelefone(),
            entity.getBiografia(),
            entity.getAtivo(),
            entity.getCriadoEm()
        );
    }
}
