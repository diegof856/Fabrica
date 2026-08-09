package bico_digital.model.dto;

import bico_digital.model.enums.CategoriaProfissional;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record PrestadorServicoUpdateDTO(
    @NotBlank(message = "O nome é obrigatório")
    String nome,

    @NotBlank(message = "O e-mail é obrigatório")
    @Email(message = "E-mail inválido")
    String email,

    @NotNull(message = "A categoria profissional é obrigatória")
    CategoriaProfissional categoriaProfissional,

    String telefone,

    String biografia,

    Boolean ativo
) {}
