package bico_digital.model.dto;

import bico_digital.model.enums.CategoriaProfissional;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record PrestadorServicoRequestDTO(
    @NotBlank(message = "O nome é obrigatório")
    @Size(max = 150, message = "O nome não pode exceder 150 caracteres")
    String nome,

    @NotBlank(message = "O e-mail é obrigatório")
    @Email(message = "E-mail inválido")
    String email,

    @NotBlank(message = "A senha é obrigatória")
    @Size(min = 6, message = "A senha deve conter no mínimo 6 caracteres")
    String senha,

    @NotBlank(message = "O CPF/CNPJ é obrigatório")
    String cpfCnpj,

    @NotNull(message = "A categoria profissional é obrigatória")
    CategoriaProfissional categoriaProfissional,

    String telefone,

    String biografia
) {}
