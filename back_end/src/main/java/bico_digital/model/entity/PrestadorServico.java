package bico_digital.model.entity;

import bico_digital.model.enums.CategoriaProfissional;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "tb_prestadores")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PrestadorServico {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false, length = 150)
    private String nome;

    @Column(nullable = false, unique = true, length = 150)
    private String email;

    @Column(nullable = false)
    private String senha;

    @Column(name = "cpf_cnpj", nullable = false, unique = true, length = 18)
    private String cpfCnpj;

    @Column(name = "tipo_usuario", nullable = false, length = 20)
    @Builder.Default
    private String tipoUsuario = "PRESTADOR";

    @Enumerated(EnumType.STRING)
    @Column(name = "categoria_profissional", nullable = false, length = 50)
    private CategoriaProfissional categoriaProfissional;

    @Column(name = "saldo_carteira", nullable = false, precision = 10, scale = 2)
    @Builder.Default
    private BigDecimal saldoCarteira = BigDecimal.ZERO;

    @Column(length = 20)
    private String telefone;

    @Column(columnDefinition = "TEXT")
    private String biografia;

    @Column(nullable = false)
    @Builder.Default
    private Boolean ativo = true;

    @Column(name = "criado_em", nullable = false, updatable = false)
    private LocalDateTime criadoEm;

    @PrePersist
    public void prePersist() {
        if (this.criadoEm == null) {
            this.criadoEm = LocalDateTime.now();
        }
        if (this.saldoCarteira == null) {
            this.saldoCarteira = BigDecimal.ZERO;
        }
        if (this.tipoUsuario == null) {
            this.tipoUsuario = "PRESTADOR";
        }
        if (this.ativo == null) {
            this.ativo = true;
        }
    }

}
