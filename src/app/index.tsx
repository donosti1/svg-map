import React from "react";
import {Container, Stack, Text, Select} from "@chakra-ui/react";
import {motion} from "framer-motion";

import "./index.css";
import Mapa from "../assets/map";

const Provincias = [
  {
    id: 1,
    territorio: "Navarra",
    capital: "Pamplona",
    extension: 10421.0,
    poblacion: 640647,
    densidad: 61.48,
    nro_municipios: 272,
  },
  {
    id: 2,
    territorio: "Álava",
    capital: "Vitoria",
    extension: 3316.9,
    poblacion: 324126,
    densidad: 97.72,
    nro_municipios: 53,
  },
  {
    id: 3,
    territorio: "Vizcaya",
    capital: "Bilbao",
    extension: 2236.7,
    poblacion: 1147576,
    densidad: 513.07,
    nro_municipios: 112,
  },
  {
    id: 4,
    territorio: "Guipúzcoa",
    capital: "San Sebastián",
    extension: 1980.3,
    poblacion: 717576,
    densidad: 362.49,
    nro_municipios: 88,
  },
  {
    id: 5,
    territorio: "Baja Navarra",
    capital: "San Juan Pie de Puerto",
    extension: 1323.3,
    poblacion: 31750,
    densidad: 23.99,
    nro_municipios: 74,
  },
  {
    id: 6,
    territorio: "Labort",
    capital: "Bayona",
    extension: 859,
    poblacion: 243466,
    densidad: 283.43,
    nro_municipios: 41,
  },
  {
    id: 7,
    territorio: "Sola",
    capital: "Mauleón",
    extension: 785,
    poblacion: 17018,
    densidad: 21.68,
    nro_municipios: 43,
  },
];
const App: React.FC = (props: any) => {
  const renderMessage = (contenido?) => {
    if (!contenido) {
      contenido = <Text>Seleccione un territorio en el mapa o en el desplegable debajo.</Text>;
    }

    return contenido;
  };

  const handleSelect = (event) => {
    let idSeleccionado = event.target.value;

    setOptionSelected(idSeleccionado);
    let contenido = getDataTerritorios(idSeleccionado);

    setProvinciaSelected(renderMessage(contenido));
  };
  const handleClick = (e) => {
    e.stopPropagation();

    if (!Provincias[e.target.id - 1]) return;
    let contenido = getDataTerritorios(e.target.id);

    setProvinciaSelected(renderMessage(contenido));
    setOptionSelected(e.target.id);
  };

  const getDataTerritorios = (id) => {
    if (id == 0)
      return <Text>Seleccione un territorio en el mapa o en el desplegable debajo.</Text>;
    let cont = Provincias.map((prov) => {
      if (prov.id == id) {
        return (
          <Stack key={prov.id}>
            <Text>Territorio: {prov.territorio}</Text>
            <Text>Capital: {prov.capital}</Text>
            <Text>
              Extensión (km²):{" "}
              {prov.extension.toLocaleString("es-ar", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Text>
            <Text>
              Población (2016):{" "}
              {prov.poblacion.toLocaleString("es-ar", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Text>
            <Text>
              Densidad (hab/km²):{" "}
              {prov.densidad.toLocaleString("es-ar", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Text>
            <Text>Número de municipios: {prov.nro_municipios}</Text>
          </Stack>
        );
      }
    });

    return cont;
  };
  const [optionSelected, setOptionSelected] = React.useState(0);
  const [provinciaSelected, setProvinciaSelected] = React.useState(renderMessage());

  return (
    <Container alignSelf="center" height="100vh" maxWidth="container.xl" paddingY={4}>
      <Stack>
        <Text
          align="center"
          animate={{y: 0, opacity: 1}}
          as={motion.div}
          color="primary.600"
          fontSize="4xl"
          initial={{opacity: 0, y: -10}}
          layoutId="1"
        >
          Conocé Euskal Herria
        </Text>
      </Stack>
      <Stack direction="row" justifyContent="space-between" paddingY={2}>
        <Stack
          animate={{x: 0, opacity: 1, scale: 1}}
          as={motion.div}
          height={570}
          initial={{opacity: 0, x: -1000, scale: 0.5}}
          layoutId="2"
          padding={2}
          width="40%"
        >
          <Mapa onClick={(e) => handleClick(e)} />
        </Stack>
        <Stack paddingY={12} spacing={0} width="50%">
          <Stack
            backgroundColor="primary.500"
            borderColor="primary.500"
            borderTopRadius="3xl"
            borderWidth={2}
          >
            <Text align="center" color="whiteAlpha.900" fontSize="2xl" paddingY={3}>
              Información
            </Text>
          </Stack>
          <Stack borderBottomRadius="3xl" borderColor="secondary.500" borderWidth={3}>
            <Text
              align="center"
              backgroundColor="secondary.500"
              color="whiteAlpha.900"
              fontSize="2xl"
              paddingY={2}
            >
              Conocé las provincias de Euskal Herria
            </Text>
            <Stack
              align="left"
              backgroundColor="white.500"
              color="gray.600"
              fontSize="xl"
              padding={4}
            >
              {provinciaSelected}
            </Stack>
          </Stack>
          <Stack paddingY={2}>
            <Select name="territorios-select" value={optionSelected} onChange={handleSelect}>
              <option value="0">Seleccione un territorio</option>
              {Provincias.map((prov) => {
                return (
                  <option key={prov.id} value={prov.id}>
                    {prov.territorio}
                  </option>
                );
              })}
            </Select>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default App;
