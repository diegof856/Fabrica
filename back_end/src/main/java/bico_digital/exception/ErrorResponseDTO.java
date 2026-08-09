package bico_digital.exception;

import java.time.LocalDateTime;
import java.util.List;

public record ErrorResponseDTO(
    int status,
    String error,
    String message,
    List<String> details,
    LocalDateTime timestamp
) {
    public ErrorResponseDTO(int status, String error, String message) {
        this(status, error, message, null, LocalDateTime.now());
    }

    public ErrorResponseDTO(int status, String error, String message, List<String> details) {
        this(status, error, message, details, LocalDateTime.now());
    }
}
