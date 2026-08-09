package bico_digital.repository;

import bico_digital.model.entity.PrestadorServico;
import bico_digital.model.enums.CategoriaProfissional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface PrestadorServicoRepository extends JpaRepository<PrestadorServico, UUID> {

    boolean existsByEmail(String email);

    boolean existsByCpfCnpj(String cpfCnpj);

    boolean existsByEmailAndIdNot(String email, UUID id);

    List<PrestadorServico> findByCategoriaProfissional(CategoriaProfissional categoriaProfissional);

    List<PrestadorServico> findByAtivoTrue();

    List<PrestadorServico> findByCategoriaProfissionalAndAtivoTrue(CategoriaProfissional categoriaProfissional);
}
