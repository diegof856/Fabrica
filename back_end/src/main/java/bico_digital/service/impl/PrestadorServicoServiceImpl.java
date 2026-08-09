package bico_digital.service.impl;

import bico_digital.exception.BusinessException;
import bico_digital.exception.ResourceNotFoundException;
import bico_digital.model.dto.PrestadorServicoRequestDTO;
import bico_digital.model.dto.PrestadorServicoResponseDTO;
import bico_digital.model.dto.PrestadorServicoUpdateDTO;
import bico_digital.model.entity.PrestadorServico;
import bico_digital.model.enums.CategoriaProfissional;
import bico_digital.repository.PrestadorServicoRepository;
import bico_digital.service.PrestadorServicoService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PrestadorServicoServiceImpl implements PrestadorServicoService {

	
    private final PrestadorServicoRepository repository;


    
    @Override
    @Transactional
    public PrestadorServicoResponseDTO criar(PrestadorServicoRequestDTO request) {
        if (repository.existsByEmail(request.email())) {
            throw new BusinessException("Já existe um prestador cadastrado com o e-mail informado: " + request.email());
        }

        if (repository.existsByCpfCnpj(request.cpfCnpj())) {
            throw new BusinessException("Já existe um prestador cadastrado com o CPF/CNPJ informado: " + request.cpfCnpj());
        }

        PrestadorServico entity = PrestadorServico.builder()
            .nome(request.nome())
            .email(request.email())
            .senha(request.senha())
            .cpfCnpj(request.cpfCnpj())
            .tipoUsuario("PRESTADOR")
            .categoriaProfissional(request.categoriaProfissional())
            .saldoCarteira(BigDecimal.ZERO)
            .telefone(request.telefone())
            .biografia(request.biografia())
            .ativo(true)
            .build();

        PrestadorServico saved = repository.save(entity);
        return PrestadorServicoResponseDTO.fromEntity(saved);
    }

    @Override
    @Transactional(readOnly = true)
    public List<PrestadorServicoResponseDTO> listarTodos(CategoriaProfissional categoria) {
        List<PrestadorServico> lista;
        if (categoria != null) {
            lista = repository.findByCategoriaProfissional(categoria);
        } else {
            lista = repository.findAll();
        }
        return lista.stream()
            .map(PrestadorServicoResponseDTO::fromEntity)
            .toList();
    }

    @Override
    @Transactional(readOnly = true)
    public PrestadorServicoResponseDTO buscarPorId(UUID id) {
        PrestadorServico entity = repository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Prestador de serviço não encontrado com o ID: " + id));
        return PrestadorServicoResponseDTO.fromEntity(entity);
    }

    @Override
    @Transactional
    public PrestadorServicoResponseDTO atualizar(UUID id, PrestadorServicoUpdateDTO update) {
        PrestadorServico entity = repository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Prestador de serviço não encontrado com o ID: " + id));

        if (repository.existsByEmailAndIdNot(update.email(), id)) {
            throw new BusinessException("O e-mail " + update.email() + " já está em uso por outro prestador.");
        }

        entity.setNome(update.nome());
        entity.setEmail(update.email());
        entity.setCategoriaProfissional(update.categoriaProfissional());
        entity.setTelefone(update.telefone());
        entity.setBiografia(update.biografia());
        if (update.ativo() != null) {
            entity.setAtivo(update.ativo());
        }

        PrestadorServico updated = repository.save(entity);
        return PrestadorServicoResponseDTO.fromEntity(updated);
    }

    @Override
    @Transactional
    public void deletar(UUID id) {
        PrestadorServico entity = repository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Prestador de serviço não encontrado com o ID: " + id));
        repository.delete(entity);
    }

    @Override
    @Transactional
    public PrestadorServicoResponseDTO atualizarSaldo(UUID id, BigDecimal valor) {
        PrestadorServico entity = repository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Prestador de serviço não encontrado com o ID: " + id));

        BigDecimal novoSaldo = entity.getSaldoCarteira().add(valor);
        if (novoSaldo.compareTo(BigDecimal.ZERO) < 0) {
            throw new BusinessException("Saldo insuficiente para realizar a operação. Saldo atual: " + entity.getSaldoCarteira());
        }

        entity.setSaldoCarteira(novoSaldo);
        PrestadorServico updated = repository.save(entity);
        return PrestadorServicoResponseDTO.fromEntity(updated);
    }
}
