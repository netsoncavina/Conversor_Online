function atualizarMassa(form) {
  if (form.value == "Massa") {
    select1 = document.getElementById("formulario1");
    select1.innerHTML = `<option>Kilograma</option>
                            <option>Grama</option>
                            <option>Libra</option>
                            <option>Onça</option>
                            <option>Quilograma</option>
                            <option>Tonelada</option>`;
    select2 = document.getElementById("formulario2");
    select2.innerHTML = `<option>Kilograma</option>
                            <option>Grama</option>
                            <option>Libra</option>
                            <option>Onça</option>
                            <option>Quilograma</option>
                            <option>Tonelada</option>`;
  }
}

function atualizarVelocidade(form) {
  if (form.value == "Velocidade") {
    select1 = document.getElementById("formulario1");
    select1.innerHTML = `<option>Metro por segundo</option>
                            <option>Kilometro por hora</option>
                            <option>Milha por hora</option>
                            `;
    select2 = document.getElementById("formulario2");
    select2.innerHTML = `<option>Metro por segundo</option>
                            <option>Kilometro por hora</option>
                            <option>Milha por hora</option>
                            `;
  }
}

function atualizarVolume(form) {
  if (form.value == "Volume") {
    select1 = document.getElementById("formulario1");
    select1.innerHTML = `<option>Litro</option> 
                                <option>Metro cúbico</option>
                                <option>Mililitro</option>`;
    select2 = document.getElementById("formulario2");
    select2.innerHTML = `<option>Litro</option>
                                <option>Metro cúbico</option>   
                                <option>Mililitro</option>`;
  }
}

function atualizarArea(form) {
  if (form.value == "Area") {
    select1 = document.getElementById("formulario1");
    select1.innerHTML = `<option>Metro quadrado</option>
                                <option>Kilometro quadrado</option>
                                <option>Hectare</option>
                                <option>Centimetro quadrado</option> `;
    select2 = document.getElementById("formulario2");
    select2.innerHTML = `<option>Metro quadrado</option>
                                <option>Kilometro quadrado</option>
                                <option>Hectare</option>
                                <option>Centimetro quadrado</option> `;
  }
}

function converterMassa(entrada, saida, form1, form2, texto1, texto2) {
  if (form1.value == "Kilograma") {
    if (form2.value == "Kilograma") {
      saida.value = entrada.value;
      texto1.innerHTML = "1 Kilograma equivale a 1 Kilograma";
      texto2.innerHTML = "1 Kilograma equivale a 1 Kilograma";
    } else if (form2.value == "Grama") {
      saida.value = entrada.value * 1000;
      texto1.innerHTML = "1 Kilograma equivale a 1000 Gramas";
      texto2.innerHTML = "1 Grama equivale a 0.001 Kilogramas";
    } else if (form2.value == "Libra") {
      saida.value = entrada.value * 2.205;
      texto1.innerHTML = "1 Kilograma equivale a 2.205 Libras";
      texto2.innerHTML = "1 Libra equivale a 0.4535 Kilogramas";
    } else if (form2.value == "Onça") {
      saida.value = entrada.value * 35.274;
      texto1.innerHTML = "1 Kilograma equivale a 35.274 Onças";
      texto2.innerHTML = "1 Onça equivale a 0.02834 Kilogramas";
    } else if (form2.value == "Tonelada") {
      saida.value = entrada.value * 0.001;
      texto1.innerHTML = "1 Kilograma equivale a 0.001 Toneladas";
      texto2.innerHTML = "1 Tonelada equivale a 1000 Kilogramas";
    }
  }

  if (form1.value == "Grama") {
    if (form2.value == "Kilograma") {
      saida.value = entrada.value * 0.001;
      texto1.innerHTML = "1 Grama equivale a 0.001 Kilogramas";
      texto2.innerHTML = "1 Kilograma equivale a 1000 Gramas";
    } else if (form2.value == "Grama") {
      saida.value = entrada.value;
      texto1.innerHTML = "1 Grama equivale a 1 Grama";
      texto2.innerHTML = "1 Grama equivale a 1 Grama";
    } else if (form2.value == "Libra") {
      saida.value = entrada.value * 0.002205;
      texto1.innerHTML = "1 Grama equivale a 0.002205 Libras";
      texto2.innerHTML = "1 Libra equivale a 453.59 Gramas";
    } else if (form2.value == "Onça") {
      saida.value = entrada.value * 0.035274;
      texto1.innerHTML = "1 Grama equivale a 0.035274 Onças";
      texto2.innerHTML = "1 Onça equivale a 28.3495 Gramas";
    } else if (form2.value == "Tonelada") {
      saida.value = entrada.value * 0.000001;
      texto1.innerHTML = "1 Grama equivale a 0.000001 Toneladas";
      texto2.innerHTML = "1 Tonelada equivale a 1000000 Gramas";
    }
  }

  if (form1.value == "Libra") {
    if (form2.value == "Kilograma") {
      saida.value = entrada.value * 0.4535;
      texto1.innerHTML = "1 Libra equivale a 0.4535 Kilogramas";
      texto2.innerHTML = "1 Kilograma equivale a 2.205 Libras";
    } else if (form2.value == "Grama") {
      saida.value = entrada.value * 453.59;
      texto1.innerHTML = "1 Libra equivale a 453.59 Gramas";
      texto2.innerHTML = "1 Grama equivale a 0.002205 Libras";
    } else if (form2.value == "Libra") {
      saida.value = entrada.value;
      texto1.innerHTML = "1 Libra equivale a 1 Libra";
      texto2.innerHTML = "1 Libra equivale a 1 Libra";
    } else if (form2.value == "Onça") {
      saida.value = entrada.value * 16;
      texto1.innerHTML = "1 Libra equivale a 16 Onças";
      texto2.innerHTML = "1 Onça equivale a 0.0625 Libras";
    } else if (form2.value == "Tonelada") {
      saida.value = entrada.value * 0.0004535;
      texto1.innerHTML = "1 Libra equivale a 0.0004535 Toneladas";
      texto2.innerHTML = "1 Tonelada equivale a 2.205 Libras";
    }
  }

  if (form1.value == "Onça") {
    if (form2.value == "Kilograma") {
      saida.value = entrada.value * 0.02834;
      texto1.innerHTML = "1 Onça equivale a 0.02834 Kilogramas";
      texto2.innerHTML = "1 Kilograma equivale a 35.274 Onças";
    } else if (form2.value == "Grama") {
      saida.value = entrada.value * 28.3495;
      texto1.innerHTML = "1 Onça equivale a 28.3495 Gramas";
      texto2.innerHTML = "1 Grama equivale a 0.035274 Onças";
    } else if (form2.value == "Libra") {
      saida.value = entrada.value * 0.0625;
      texto1.innerHTML = "1 Onça equivale a 0.0625 Libras";
      texto2.innerHTML = "1 Libra equivale a 16 Onças";
    } else if (form2.value == "Onça") {
      saida.value = entrada.value;
      texto1.innerHTML = "1 Onça equivale a 1 Onça";
      texto2.innerHTML = "1 Onça equivale a 1 Onça";
    } else if (form2.value == "Tonelada") {
      saida.value = entrada.value * 0.00002834;
      texto1.innerHTML = "1 Onça equivale a 0.00002834 Toneladas";
      texto2.innerHTML = "1 Tonelada equivale a 35.274 Onças";
    }
  }

  if (form1.value == "Tonelada") {
    if (form2.value == "Kilograma") {
      saida.value = entrada.value * 1000;
      texto1.innerHTML = "1 Tonelada equivale a 1000 Kilogramas";
      texto2.innerHTML = "1 Kilograma equivale a 0.001 Toneladas";
    } else if (form2.value == "Grama") {
      saida.value = entrada.value * 1000000;
      texto1.innerHTML = "1 Tonelada equivale a 1000000 Gramas";
      texto2.innerHTML = "1 Grama equivale a 0.000001 Toneladas";
    } else if (form2.value == "Libra") {
      saida.value = entrada.value * 2205;
      texto1.innerHTML = "1 Tonelada equivale a 2205 Libras";
      texto2.innerHTML = "1 Libra equivale a 0.0004535 Toneladas";
    } else if (form2.value == "Onça") {
      saida.value = entrada.value * 35274;
      texto1.innerHTML = "1 Tonelada equivale a 35274 Onças";
      texto2.innerHTML = "1 Onça equivale a 0.02834 Toneladas";
    } else if (form2.value == "Tonelada") {
      saida.value = entrada.value;
      texto1.innerHTML = "1 Tonelada equivale a 1 Tonelada";
      texto2.innerHTML = "1 Tonelada equivale a 1 Tonelada";
    }
  }
}

function converterVelocidade(entrada, saida, form1, form2) {
  if (form1.value == "Metro por segundo") {
    if (form2.value == "Metro por segundo") {
      saida.value = entrada.value;
      texto1.innerHTML = "1 Metro por segundo equivale a 1 Metro por segundo";
      texto2.innerHTML = "1 Metro por segundo equivale a 1 Metro por segundo";
    } else if (form2.value == "Kilometro por hora") {
      saida.value = entrada.value * 3.6;
      texto1.innerHTML =
        "1 Metro por segundo equivale a 3.6 Kilometros por hora";
      texto2.innerHTML =
        "1 Kilometro por hora equivale a 0.001 Metro por segundo";
    } else if (form2.value == "Milha por hora") {
      saida.value = entrada.value * 2.237;
      texto1.innerHTML = "1 Metro por segundo equivale a 2.237 Milhas por hora";
      texto2.innerHTML =
        "1 Milha por hora equivale a 0.000621371 Metro por segundo";
    } else if (form2.value == "Quilometro por hora") {
      saida.value = entrada.value * 3.6;
      texto1.innerHTML =
        "1 Metro por segundo equivale a 3.6 Quilometros por hora";
      texto2.innerHTML =
        "1 Quilometro por hora equivale a 0.001 Metro por segundo";
    }
  }
  if (form1.value == "Kilometro por hora") {
    if (form2.value == "Metro por segundo") {
      saida.value = entrada.value * 0.001;
      texto1.innerHTML =
        "1 Kilometro por hora equivale a 0.001 Metro por segundo";
      texto2.innerHTML =
        "1 Metro por segundo equivale a 3.6 Kilometros por hora";
    } else if (form2.value == "Kilometro por hora") {
      saida.value = entrada.value;
      texto1.innerHTML = "1 Kilometro por hora equivale a 1 Kilometro por hora";
      texto2.innerHTML = "1 Kilometro por hora equivale a 1 Kilometro por hora";
    } else if (form2.value == "Milha por hora") {
      saida.value = entrada.value * 0.6214;
      texto1.innerHTML =
        "1 Kilometro por hora equivale a 0.6214 Milhas por hora";
      texto2.innerHTML =
        "1 Milha por hora equivale a 1.609 Kilometros por hora";
    } else if (form2.value == "Quilometro por hora") {
      saida.value = entrada.value;
      texto1.innerHTML =
        "1 Kilometro por hora equivale a 1 Quilometro por hora";
      texto2.innerHTML =
        "1 Quilometro por hora equivale a 1 Quilometro por hora";
    }
  }
  if (form1.value == "Milha por hora") {
    if (form2.value == "Metro por segundo") {
      saida.value = entrada.value * 0.00062;
      texto1.innerHTML =
        "1 Milha por hora equivale a 0.00062 Metro por segundo";
      texto2.innerHTML = "1 Metro por segundo equivale a 2.237 Milhas por hora";
    } else if (form2.value == "Kilometro por hora") {
      saida.value = entrada.value * 1.609;
      texto1.innerHTML =
        "1 Milha por hora equivale a 1.609 Kilometros por hora";
      texto2.innerHTML =
        "1 Kilometro por hora equivale a 0.001 Milhas por hora";
    } else if (form2.value == "Milha por hora") {
      saida.value = entrada.value;
      texto1.innerHTML = "1 Milha por hora equivale a 1 Milha por hora";
      texto2.innerHTML = "1 Milha por hora equivale a 1 Milha por hora";
    } else if (form2.value == "Quilometro por hora") {
      saida.value = entrada.value * 1.609;
      texto1.innerHTML =
        "1 Milha por hora equivale a 1.609 Quilometros por hora";
      texto2.innerHTML =
        "1 Quilometro por hora equivale a 0.001 Milhas por hora";
    }
  }
}

function converterVolume(entrada, saida, form1, form2) {
  if (form1.value == "Metro cúbico") {
    if (form2.value == "Metro cúbico") {
      saida.value = entrada.value;
      texto1.innerHTML = "1 Metro cúbico equivale a 1 Metro cúbico";
      texto2.innerHTML = "1 Metro cúbico equivale a 1 Metro cúbico";
    } else if (form2.value == "Litro") {
      saida.value = entrada.value * 1000;
      texto1.innerHTML = "1 Metro cúbico equivale a 1000 Litros";
      texto2.innerHTML = "1 Litro equivale a 0.001 Metro cúbico";
    } else if (form2.value == "Mililitro") {
      saida.value = entrada.value * 1000000;
      texto1.innerHTML = "1 Metro cúbico equivale a 1000000 Mililitros";
      texto2.innerHTML = "1 Mililitro equivale a 0.000001 Metro cúbico";
    }
  }
  if (form1.value == "Litro") {
    if (form2.value == "Metro cúbico") {
      saida.value = entrada.value * 0.001;
      texto1.innerHTML = "1 Litro equivale a 0.001 Metro cúbico";
      texto2.innerHTML = "1 Metro cúbico equivale a 1000 Litros";
    } else if (form2.value == "Litro") {
      saida.value = entrada.value;
      texto1.innerHTML = "1 Litro equivale a 1 Litro";
      texto2.innerHTML = "1 Litro equivale a 1 Litro";
    } else if (form2.value == "Mililitro") {
      saida.value = entrada.value * 1000;
      texto1.innerHTML = "1 Litro equivale a 1000 Mililitros";
      texto2.innerHTML = "1 Mililitro equivale a 0.001 Litros";
    }
  }
  if (form1.value == "Mililitro") {
    if (form2.value == "Metro cúbico") {
      saida.value = entrada.value * 0.000001;
      texto1.innerHTML = "1 Mililitro equivale a 0.000001 Metro cúbico";
      texto2.innerHTML = "1 Metro cúbico equivale a 1000000 Mililitros";
    } else if (form2.value == "Litro") {
      saida.value = entrada.value * 0.001;
      texto1.innerHTML = "1 Mililitro equivale a 0.001 Litros";
      texto2.innerHTML = "1 Litro equivale a 1000 Mililitros";
    } else if (form2.value == "Mililitro") {
      saida.value = entrada.value;
      texto1.innerHTML = "1 Mililitro equivale a 1 Mililitro";
      texto2.innerHTML = "1 Mililitro equivale a 1 Mililitro";
    }
  }
}

function converterArea(entrada, saida, form1, form2) {
  if (form1.value == "Metro quadrado") {
    if (form2.value == "Metro quadrado") {
      saida.value = entrada.value;
      texto1.innerHTML = "1 Metro quadrado equivale a 1 Metro quadrado";
      texto2.innerHTML = "1 Metro quadrado equivale a 1 Metro quadrado";
    } else if (form2.value == "Kilometro quadrado") {
      saida.value = entrada.value * 0.000001;
      texto1.innerHTML = "1 Metro quadrado equivale a 1000000 Metros quadrados";
      texto2.innerHTML =
        "1 Kilometro quadrado equivale a 0.000001 Metro quadrado";
    } else if (form2.value == "Hectare") {
      saida.value = entrada.value * 0.0001;
      texto1.innerHTML = "1 Metro quadrado equivale a 0.0001 Hectares";
      texto2.innerHTML = "1 Hectare equivale a 0.0001 Metro quadrado";
    } else if (form2.value == "Centimetro quadrado") {
      saida.value = entrada.value * 10000;
      texto1.innerHTML =
        "1 Metro quadrado equivale a 10000 Centimetros quadrados";
      texto2.innerHTML =
        "1 Centimetro quadrado equivale a 0.0001 Metro quadrado";
    }
  }

  if (form1.value == "Kilometro quadrado") {
    if (form2.value == "Metro quadrado") {
      saida.value = entrada.value * 1000000;
      texto1.innerHTML = "1 Kilometro quadrado equivale a 1 Metro quadrado";
      texto2.innerHTML = "1 Metro quadrado equivale a 1000000 Metros quadrados";
    } else if (form2.value == "Kilometro quadrado") {
      saida.value = entrada.value;
      texto1.innerHTML = "1 Kilometro quadrado equivale a 1 Kilometro quadrado";
      texto2.innerHTML = "1 Kilometro quadrado equivale a 1 Kilometro quadrado";
    } else if (form2.value == "Hectare") {
      saida.value = entrada.value * 0.01;
      texto1.innerHTML = "1 Kilometro quadrado equivale a 0.01 Hectares";
      texto2.innerHTML = "1 Hectare equivale a 0.01 Kilometro quadrado";
    } else if (form2.value == "Centimetro quadrado") {
      saida.value = entrada.value * 100000000;
      texto1.innerHTML =
        "1 Kilometro quadrado equivale a 100000000 Centimetros quadrados";
      texto2.innerHTML =
        "1 Centimetro quadrado equivale a 0.000001 Kilometro quadrado";
    }
  }

  if (form1.value == "Hectare") {
    if (form2.value == "Metro quadrado") {
      saida.value = entrada.value * 10000;
      texto1.innerHTML = "1 Hectare equivale a 0.0001 Metro quadrado";
      texto2.innerHTML = "1 Metro quadrado equivale a 10000 Hectares";
    } else if (form2.value == "Kilometro quadrado") {
      saida.value = entrada.value * 100;
      texto1.innerHTML = "1 Hectare equivale a 0.01 Kilometro quadrado";
      texto2.innerHTML = "1 Kilometro quadrado equivale a 100 Hectares";
    } else if (form2.value == "Hectare") {
      saida.value = entrada.value;
      texto1.innerHTML = "1 Hectare equivale a 1 Hectare";
      texto2.innerHTML = "1 Hectare equivale a 1 Hectare";
    } else if (form2.value == "Centimetro quadrado") {
      saida.value = entrada.value * 100000000;
      texto1.innerHTML = "1 Hectare equivale a 100000000 Centimetros quadrados";
      texto2.innerHTML = "1 Centimetro quadrado equivale a 0.0001 Hectare";
    }
  }

  if (form1.value == "Centimetro quadrado") {
    if (form2.value == "Metro quadrado") {
      saida.value = entrada.value * 0.0001;
      texto1.innerHTML =
        "1 Centimetro quadrado equivale a 0.0001 Metro quadrado";
      texto2.innerHTML =
        "1 Metro quadrado equivale a 10000 Centimetros quadrados";
    } else if (form2.value == "Kilometro quadrado") {
      saida.value = entrada.value * 0.000001;
      texto1.innerHTML =
        "1 Centimetro quadrado equivale a 0.000001 Kilometro quadrado";
      texto2.innerHTML =
        "1 Kilometro quadrado equivale a 100000000 Centimetros quadrados";
    } else if (form2.value == "Hectare") {
      saida.value = entrada.value * 0.001;
      texto1.innerHTML = "1 Centimetro quadrado equivale a 0.001 Hectares";
      texto2.innerHTML = "1 Hectare equivale a 0.001 Centimetro quadrado";
    } else if (form2.value == "Centimetro quadrado") {
      saida.value = entrada.value;
      texto1.innerHTML =
        "1 Centimetro quadrado equivale a 1 Centimetro quadrado";
      texto2.innerHTML =
        "1 Centimetro quadrado equivale a 1 Centimetro quadrado";
    }
  }
}

function atualizarGrandezas() {
  form = document.getElementById("formularioGrandezas");
  document.getElementById("entrada").value = "";
  document.getElementById("saida").value = "";

  atualizarMassa(form);
  atualizarVelocidade(form);
  atualizarVolume(form);
  atualizarArea(form);
  converter();
}

function converter() {
  form = document.getElementById("formularioGrandezas");
  entrada = document.getElementById("entrada");
  saida = document.getElementById("saida");
  form1 = document.getElementById("formulario1");
  form2 = document.getElementById("formulario2");
  texto1 = document.getElementById("texto1");
  texto2 = document.getElementById("texto2");
  if (form.value == "Massa") {
    converterMassa(entrada, saida, form1, form2, texto1, texto2);
  }
  if (form.value == "Velocidade") {
    converterVelocidade(entrada, saida, form1, form2, texto1, texto2);
  }
  if (form.value == "Volume") {
    converterVolume(entrada, saida, form1, form2, texto1, texto2);
  }
  if (form.value == "Area") {
    converterArea(entrada, saida, form1, form2, texto1, texto2);
  }
}
