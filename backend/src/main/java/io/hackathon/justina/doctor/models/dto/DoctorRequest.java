package io.hackathon.justina.doctor.models.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class DoctorRequest {

    @NotBlank(message = "La especialidad es obligatorio")
    private EspecialidadRequest speciality;

    @NotBlank(message = "El numero de licencia es obligatorio")
    @Size(min = 8, max = 8, message = "El numero de licencia debe tener 8 digitos")
    private Integer licenseNumber;

}
